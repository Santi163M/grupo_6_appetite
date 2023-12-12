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
    return Usuario;
}