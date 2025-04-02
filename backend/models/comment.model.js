const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        videoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING
        },
        like: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        dislike: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });
    return Comment;
}