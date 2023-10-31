module.exports = (sequelize,DataTypes) =>{
    const Producto = sequelize.define("Producto",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.STRING},
        descripcion : {type : DataTypes.STRING},
        precio : {type : DataTypes.INTEGER},
        usuario_id  : {type : DataTypes.INTEGER},
        categoria_id  : {type : DataTypes.INTEGER},
    },
    {
    tableName: "productos",
    timestamps: false
    }
    )
    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria,{
            as : "categorias",
            foreignKey: "categoria_id"
        })
    }
    return Producto;
}