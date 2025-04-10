import models from '../models/index.js';

const { Comment, Reply } = models;

export const addComment = async (req, res) => {
    try {

        const { userId, videoId, content, like, dislike } = req.body;

        if (!userId || !videoId || !content) {
            return res.status(400).json({ error: "Fields missing" });
        }

        const newComment = await Comment.create({
            userId,
            videoId,
            content,
            like: like || 0,
            dislike: dislike || 0,
        });

        return res.status(201).json({ comment: newComment, message: "Comment added" });
    } catch (error) {
        console.error("Error adding comment:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const getAllComments = async (req, res) => {
    try {

        const comments = await Comment.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({ data: comments });
    } catch (error) {
        console.error("Error getting comments:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, videoId, content, like, dislike } = req.body;

        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        let updatedFields = { userId, videoId, content };

        if (like !== undefined) updatedFields.like = like;
        if (dislike !== undefined) updatedFields.dislike = dislike;

        await comment.update(updatedFields);

        return res.json({ message: "Comment updated" });
    } catch (error) {
        console.error("Error updating comment:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const deleteComment = async (req, res) => {
    try {

        const { id } = req.params;

        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }

        await comment.destroy();

        return res.json({ message: "Comment deleted" });
    } catch (error) {
        console.error("Error deleting comment:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const getCommentReplies = async (req, res) => {
    try {
        const { commentId } = req.params;
        console.log(`Received request to get replies for commentId: ${commentId}`);

        const comment = await Comment.findByPk(commentId, {
            include: [
                {
                    model: Reply,
                    attributes: ['id', 'content', 'like', 'dislike', 'createdAt', 'updatedAt'],
                }
            ],
        });

        if (!comment) {
            console.log(`Comment with id ${commentId} not found`);
            return res.status(404).json({ error: 'Comment not found' });
        }

        console.log(`Found comment with id ${commentId}. Number of replies: ${comment.Replies.length}`);
        res.json({ replies: comment.Replies });
    } catch (error) {
        console.error("Error fetching comment replies:", error.message);
        res.status(500).json({ error: error.message });
    }
};