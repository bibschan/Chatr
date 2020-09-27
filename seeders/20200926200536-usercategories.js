"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User_categories",
      [
        {
          userId: 1,
          categoryOne: false,
          categoryTwo: true,
          categoryThree: true,
          categoryFour: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryOne: true,
          categoryTwo: true,
          categoryThree: true,
          categoryFour: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          categoryOne: false,
          categoryTwo: false,
          categoryThree: true,
          categoryFour: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          categoryOne: true,
          categoryTwo: true,
          categoryThree: false,
          categoryFour: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          categoryOne: false,
          categoryTwo: false,
          categoryThree: false,
          categoryFour: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User_categories", null, {});
  },
};
