"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reply", [
      {
        commentId: 1,
        content: "I completely agree with you!",
        like: 5,
        dislike: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        commentId: 2,
        content: "I see your point, but I think differently.",
        like: 2,
        dislike: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Reply", null, {});
  },
};
