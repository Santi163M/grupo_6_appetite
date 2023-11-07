module.exports = (sequelize,DataTypes) =>{
    const Usuario = sequelize.define("Usuario",{
        id : {type : DataTypes.INTEGER,primaryKey : true},
        nombre : {type : DataTypes.STRING},
        apellido : {type : DataTypes.STRING},
        email : {type : DataTypes.STRING},
        contraseña : {type : DataTypes.STRING},
        foto : {type : DataTypes.STRING}
    },
    {
    tableName: "usuarios",
    timestamps: false
    }
    )
    return Usuario;
}