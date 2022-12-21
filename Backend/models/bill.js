'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here

      this.hasMany(Product, {foreignKey: 'billId',  as: 'bill' })
    }
  }
  Bill.init({
    customerName: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    billAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};