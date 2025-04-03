"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Subject", [
      {
        subjectName: "HTML",
        description: "The standard markup language for creating web pages.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subjectName: "JavaScript",
        description: "A programming language used to create dynamic and interactive web applications.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Subject", null, {});
  },
};
