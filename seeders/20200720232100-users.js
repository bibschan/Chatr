"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Bibiana",
          lastName: "Souza",
          email: "souzabibiana@gwtg.com",
          username: "Bibster",
          password: "25253",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Andrew",
          lastName: "Lin",
          email: "linandrew@gwtg.com",
          username: "ALIN",
          password: "kk123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bruna",
          lastName: "Garcia",
          email: "gbruna@gwtg.com",
          username: "garciabrunap",
          password: "kk123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Carol",
          lastName: "Darski",
          email: "cdarski@gwtg.com",
          username: "CDarski",
          password: "hello123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bruno",
          lastName: "Nunes",
          email: "bnunes@gwtg.com",
          username: "bnunes",
          password: "Jesus123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Maria",
          lastName: "Chiquina",
          email: "mchiquinha@gwtg.com",
          username: "Mchiq",
          password: "HeyHo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
