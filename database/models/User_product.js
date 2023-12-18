module.exports = (sequelize,DataTypes) =>{
    const alias = "User_product"
    const cols = {
        id:{type : DataTypes.INTEGER,primaryKey : true},
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }
    }
    const config = {
        tableName: "usuarios_productos",
        timestamps: false
        }
    const User_product = sequelize.define(alias,cols,config)
    return User_product;
}