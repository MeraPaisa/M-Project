'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    title: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    discountedPrice: {
      type: DataTypes.INTEGER
    },
    actualPrice: {
      type: DataTypes.INTEGER
    },
    trendy: {
      type: DataTypes.BOOLEAN
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    countryOfOrigin: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};