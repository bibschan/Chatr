"use strict";
module.exports = (sequelize, DataTypes) => {
  const User_categories = sequelize.define(
    "User_categories",
    {
      userId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
      },
      categoryOne: {
        type: DataTypes.BOOLEAN,
        required: false,
        allowNull: true,
      },
      categoryTwo: {
        type: DataTypes.BOOLEAN,
        required: false,
        allowNull: true,
      },
      categoryThree: {
        type: DataTypes.BOOLEAN,
        required: false,
        allowNull: true,
      },
      categoryFour: {
        type: DataTypes.BOOLEAN,
        required: false,
        allowNull: true,
      },
    },
    {}
  );
  User_categories.associate = function (models) {
    //associations can be defined here
  };
  return User_categories;
};
