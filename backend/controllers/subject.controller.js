import models from '../models/index.js';

const { Subject } = models;

export const addSubject = async (req, res) => {
    try {

        const { subjectName, description } = req.body;

        if (!subjectName || !description) {
            return res.status(400).json({ error: "Fields missing" });
        }

        const newSubject = await Subject.create({
            subjectName,
            description,
        });

        return res.status(201).json({ subject: newSubject, message: "Subject added" });
    } catch (error) {
        console.error("Error adding subject:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const getAllSubjects = async (req, res) => {
    try {

        const subjects = await Subject.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({ data: subjects });
    } catch (error) {
        console.error("Error getting subjects:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const updateSubject = async (req, res) => {
    try {
        const { id } = req.params;
        const { subjectName, description } = req.body;

        const subject = await Subject.findByPk(id);
        if (!subject) {
            return res.status(404).json({ error: "Subject not found" });
        }

        let updatedFields = { subjectName, description };

        await subject.update(updatedFields);

        return res.json({ message: "Subject updated" });
    } catch (error) {
        console.error("Error updating subject:", error.message);
        return res.status(500).json({ error: error.message });
    }
};

export const deleteSubject = async (req, res) => {
    try {

        const { id } = req.params;

        const subject = await Subject.findByPk(id);
        if (!subject) {
            return res.status(404).json({ error: "Subject not found" });
        }

        await subject.destroy();

        return res.json({ message: "Subject deleted" });
    } catch (error) {
        console.error("Error deleting subject:", error.message);
        return res.status(500).json({ error: error.message });
    }
};