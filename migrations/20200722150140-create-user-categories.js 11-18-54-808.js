"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("User_categories", {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryOne: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.BOOLEAN,
      },
      categoryTwo: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.BOOLEAN,
      },
      categoryThree: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.BOOLEAN,
      },
      categoryFour: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("User_categories");
  },
};
