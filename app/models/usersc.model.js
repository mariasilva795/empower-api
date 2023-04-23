module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = require('sequelize');

  const Usersc = sequelize.define("usersc", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    interests: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  });

  return Usersc;
};
