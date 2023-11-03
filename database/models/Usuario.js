module.exports = (sequelize,DataTypes) =>{
    const Usuarios = sequelize.define("Usuarios",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.STRING},
        apellido : {type : DataTypes.STRING},
        email : {type : DataTypes.STRING},
        contraseña : {type : DataTypes.STRING},
        img : {type : DataTypes.STRING}
    },
    {
    tableName: "usuarios",
    timestamps: false
    }
    )
    return Usuarios;
}