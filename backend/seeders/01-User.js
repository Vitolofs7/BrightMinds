"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash("12345678", 10);

    await queryInterface.bulkInsert("users", [
      {
        name: "Juan",
        lastName: "Pérez",
        role: "admin",
        email: "juan.perez@example.com",
        password: hashedPassword1,
      },
      {
        name: "María",
        lastName: "López",
        role: "user",
        email: "maria.lopez@example.com",
        password: hashedPassword1,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
