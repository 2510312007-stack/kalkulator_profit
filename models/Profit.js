const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Profit extends Model {}

Profit.init(
  {
    revenue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    totalCost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    profit: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    margin: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'profit'
  }
);

module.exports = Profit;
