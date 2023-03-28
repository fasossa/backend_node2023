'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producto.init({
    nombre: DataTypes.STRING,
    nom_comercial: DataTypes.STRING,
    lote: DataTypes.STRING,
    fecha_ven: DataTypes.DATE,
    precio: DataTypes.DECIMAL,
    pventa: DataTypes.DECIMAL,
    punitario: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    descripcion: DataTypes.TEXT,
    proveedorID: DataTypes.INTEGER,
    presentacionID: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};