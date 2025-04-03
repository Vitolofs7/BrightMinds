"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Video", [
      {
        videoUrl: "https://example.com/html-intro",
        videoName: "Introduction to HTML",
        summary: "A beginner-friendly introduction to HTML, covering the basics of structuring a webpage.",
        duration: 600,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://example.com/javascript-basics",
        videoName: "JavaScript Basics",
        summary: "Learn the fundamentals of JavaScript, including variables, functions, and event handling.",
        duration: 900,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Video", null, {});
  },
};
