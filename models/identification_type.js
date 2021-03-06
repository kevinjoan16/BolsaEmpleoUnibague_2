'use strict';
module.exports = function(sequelize, DataTypes) {
  var Identification_Type = sequelize.define('Identification_Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      underscored: true,
      timestamps: false,
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Identification_Type;
};