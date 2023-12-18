module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define(
    "Producto",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      nombre: { type: DataTypes.STRING, allowNull: false },
      descripcion: { type: DataTypes.STRING },
      precio: { type: DataTypes.INTEGER, allowNull: false },
      usuario_id: { type: DataTypes.INTEGER },
      categoria_id: { type: DataTypes.INTEGER, },
      imagen: { type: DataTypes.STRING },
    },
    {
      tableName: "productos",
      timestamps: false,
    }
  );

  Producto.associate = function (models) {
    Producto.belongsTo(models.Categoria, {
      as: "categoria",
      foreignKey: "categoria_id",
    });
    {
      Producto.belongsToMany(models.Usuario, {
        as: "usuarios",
        through: "usuarios_productos",
        foreignKey: "producto_id",
        otherKey: "usuario_id",
        timestamps: false
      })
    }
  }
  return Producto;
};
