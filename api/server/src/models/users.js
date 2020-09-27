"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
      },
    },
    {}
  );
  Users.associate = function (models) {
    // associations can be defined here
    // Users.belongsToMany(models.Categories, {
    //   through: "User_categories",
    // });
  };
  return Users;
};
