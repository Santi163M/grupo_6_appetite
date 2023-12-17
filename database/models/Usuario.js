module.exports = (sequelize,DataTypes) =>{
    const Usuario = sequelize.define("Usuario",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.STRING},
        apellido : {type : DataTypes.STRING},
        email : {type : DataTypes.STRING},
        password : {type : DataTypes.STRING}
    },
    {
    tableName: "usuarios",
    timestamps: false
    }
    )
    Usuario.associate = function (models) {
        Usuario.belongsToMany(models.Producto, {
            as: "productos",
            through: "usuarios_productos",
            foreignKey: "usuario_id",
            otherKey: "producto_id",
            timestamps: false
          })
    }
    return Usuario;
}