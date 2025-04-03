"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comment", [
      {
        userId: 1,
        videoId: 1,
        content: "Great video! I loved the explanation.",
        like: 10,
        dislike: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        videoId: 2,
        content: "Interesting content, but it could be improved.",
        like: 3,
        dislike: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Comment", null, {});
  },
};
