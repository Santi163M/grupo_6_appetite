module.exports = (sequelize,DataTypes) =>{
    const Categoria = sequelize.define("Categoria",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.STRING},
        imagen: {type:DataTypes.STRING}
        },
    {
    tableName: "categorias",
    timestamps: false
    }
    )
    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto,{
            as : "productos",
            foreignKey : "categoria_id"
        })
    }
    return Categoria;
}