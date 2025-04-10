"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("subjects", [
      {
        subjectName: "HTML",
        description: "The standard markup language for creating web pages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subjectName: "JavaScript",
        description: "A programming language used to create dynamic and interactive web applications",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subjectName: "React",
        description: "A JavaScript library for building interactive user interfaces using components",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subjectName: "Python",
        description: "A versatile, high-level programming language known for its readability and wide range of applications",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subjectName: "CSS",
        description: "A stylesheet language used to control the presentation and layout of HTML elements on web pages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("subjects", null, {});
  },
};
