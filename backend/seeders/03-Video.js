"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("videos", [
      {
        videoUrl: "https://www.youtube.com/watch?v=P0EGYTb1cBs",
        videoName: "Introduction to HTML",
        summary: "A beginner-friendly introduction to HTML, covering the basics of structuring a webpage.",
        duration: 600,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=Ihy0QziLDf0",
        videoName: "JavaScript for Beginners",
        summary: "Learn the fundamentals of JavaScript, including variables, functions, and event handling.",
        duration: 900,
        subjectId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=hn80mWvP-9g",
        videoName: "React for Beginners",
        summary: "Learn the fundamentals of React, including components, state management, and JSX syntax.",
        duration: 900,
        subjectId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8",
        videoName: "Python for Beginners",
        summary: "Learn the fundamentals of Python, including variables, data types, and control structures.",
        duration: 900,
        subjectId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=1PnVor36_40&t=25s",
        videoName: "Learn CSS in 20 Minutes",
        summary: "Learn the fundamentals of CSS, including selectors, box model, and layout techniques.",
        duration: 900,
        subjectId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=QRvA8Mp-uME",
        videoName: "Head Tag in HTML",
        summary: "In this tutorial you will learn all about the meta tag and the metadata it holds as well as how the link tag can pull other resources into your page.",
        duration: 600,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        videoUrl: "https://www.youtube.com/watch?v=frAGrGN00OA",
        videoName: "HTML Forms and Inputs",
        summary: "In this tutorial, you will learn about HTML forms and many HTML5 inputs and attributes.",
        duration: 600,
        subjectId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("videos", null, {});
  },
};
