import models from '../models/index.js';

const { Reply } = models;

export const addReply = async (req, res) => {
    try {

        const { commentId, content, like, dislike } = req.body;

        if (!commentId || !content) {
            return res.status(400).json({ error: "Fields missing" });
        }

        const newReply = await Reply.create({
            commentId,
            content,
            like: like || 0,
            dislike: dislike || 0,
        });

        return res.status(201).json({ reply: newReply, message: "Reply added" });
    } catch (error) {
        console.error("Error adding reply:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const getAllReplies = async (req, res) => {
    try {

        const reply = await Reply.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({ data: replies });
    } catch (error) {
        console.error("Error getting replies:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const updateReply = async (req, res) => {
    try {
        const { id } = req.params;
        const { commentId, content, like, dislike } = req.body;

        const reply = await Reply.findByPk(id);
        if (!reply) {
            return res.status(404).json({ error: "Reply not found" });
        }

        let updatedFields = { commentId, content };

        if (like !== undefined) updatedFields.like = like;
        if (dislike !== undefined) updatedFields.dislike = dislike;

        await reply.update(updatedFields);

        return res.json({ message: "Reply updated" });
    } catch (error) {
        console.error("Error updating reply:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const deleteReply = async (req, res) => {
    try {

        const { id } = req.params;

        const reply = await Reply.findByPk(id);
        if (!reply) {
            return res.status(404).json({ error: "Reply not found" });
        }

        await reply.destroy();

        return res.json({ message: "Reply deleted" });
    } catch (error) {
        console.error("Error deleting reply:", error.message);
        return res.status(500).json({ error: error.message });
    }
};