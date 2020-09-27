"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          categoryName: "Food",
          description: "Food lovers enjoy this channel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Random",
          description: "Random channel, anyone can join!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Games",
          description: "Gamers enjoy this channel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryName: "Anime",
          description: "Anime lovers enjoy this channel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
