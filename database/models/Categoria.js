module.exports = (sequelize,DataTypes) =>{
    const Categoria = sequelize.define("Categoria",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.INTEGER}
    },
    {
    tableName: "categoria",
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