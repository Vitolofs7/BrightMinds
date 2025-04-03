"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash("1234", 10);

    await queryInterface.bulkInsert("User", [
      {
        name: "Juan",
        surname1: "Pérez",
        surname2: "García",
        role: "admin",
        email: "juan.perez@example.com",
        password: hashedPassword1,
      },
      {
        name: "María",
        surname1: "López",
        surname2: "Fernández",
        role: "user",
        email: "maria.lopez@example.com",
        password: hashedPassword1,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
