const db = require("../models");
const Comment = db.comment;

exports.addComment = async (req, res) => {
    try {
        const { userId, videoId, content, like, dislike} = req.body;

        if (!userId || !videoId || !content) {
            return res.status(400).send({ message: "Missing required fields" });
        }

        const newComment = await Comment.create({
            userId,
            videoId,
            content,
            like: like || 0,
            dislike: dislike || 0
        });

        return res.status(201).json({
            comment: newComment,
            message: "Comment added successfully",
            
        });

    } catch (error) {
        return res.status(500).send({
            message: "Error adding comment",
            error: error.message,
        });
    }
};

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({ data: comments });
    } catch (error){
        res.status(500).json({
            message: "Error retrieving comments",
            error: error.message,
        });
    }
};