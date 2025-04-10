import models from '../models/index.js';

const { Video, Comment } = models;

export const getVideo = async (req, res) => {
    try {
        console.log("📽️ Receiving GET request to fetch all videos");

        const videos = await Video.findAll();
        console.log(`✅ Found ${videos.length} videos`);

        if (videos.length === 0) {
            return res.status(404).json({ message: "No videos found" });
        }

        res.status(200).json(videos);
    } catch (error) {
        console.error("❌ Error fetching videos:", error.message);
        res.status(500).json({ error: "Error fetching videos" });
    }
};

export const createVideo = async (req, res) => {
    try {
        console.log("📤 Receiving POST request to create a new video");

        const { videoName, summary, duration, videoUrl, subjectId } = req.body;

        // Check for missing fields
        if (!videoName || !summary || !duration || !videoUrl || !subjectId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if 'duration' is a valid number
        if (isNaN(duration) || duration <= 0) {
            return res.status(400).json({ error: "Duration must be a positive number" });
        }

        // Create the new video
        const newVideo = await Video.create({ videoName, summary, duration, videoUrl, subjectId });
        console.log(`✅ Video created successfully: ${newVideo.id}`);

        res.status(201).json({ message: "Video created successfully", video: newVideo });
    } catch (error) {
        console.error("❌ Error creating video:", error.message);
        res.status(500).json({ error: "Error creating video" });
    }
};

export const updateVideo = async (req, res) => {
    try {
        console.log(`✏️ Receiving PUT request to update video with ID: ${req.params.id}`);

        const { id } = req.params;
        const { videoName, summary, duration, videoUrl, subjectId } = req.body;

        // Find the video by ID
        const video = await Video.findByPk(id);
        if (!video) {
            return res.status(404).json({ error: "Video not found" });
        }

        // Update the video fields
        await video.update({ videoName, summary, duration, videoUrl, subjectId });
        console.log(`✅ Video updated successfully: ${video.id}`);

        res.json({ message: "Video updated successfully", video });
    } catch (error) {
        console.error("❌ Error updating video:", error.message);
        res.status(500).json({ error: "Error updating video" });
    }
};

export const deleteVideo = async (req, res) => {
    try {
        console.log(`🗑️ Receiving DELETE request to remove video with ID: ${req.params.id}`);

        const { id } = req.params;

        // Find the video by ID
        const video = await Video.findByPk(id);
        if (!video) {
            return res.status(404).json({ error: "Video not found" });
        }

        // Delete the video
        await video.destroy();
        console.log(`✅ Video deleted successfully: ${id}`);

        res.json({ message: "Video deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting video:", error.message);
        res.status(500).json({ error: "Error deleting video" });
    }
};
export const getVideoComments = async (req, res) => {
    try {
        // Obtener el videoId de los parámetros de la ruta
        const { videoId } = req.params;
        console.log(`Received request to get comments for videoId: ${videoId}`);

        // Buscar el video en la base de datos e incluir los comentarios relacionados
        const video = await Video.findByPk(videoId, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'content', 'like', 'dislike', 'createdAt', 'updatedAt'],
                },
            ],
        });

        // Si el video no existe, devolver un error
        if (!video) {
            console.log(`Video with ID ${videoId} not found.`);
            return res.status(404).json({ error: "Video not found" });
        }

        // Log para ver los comentarios encontrados
        console.log(`Video found: ${videoId}. Number of comments: ${video.Comments.length}`);

        // Devolver los comentarios
        res.json({ comments: video.Comments });
    } catch (error) {
        // Si ocurre un error, loguearlo y enviar un error al cliente
        console.error("Error fetching video comments:", error);
        res.status(500).json({ error: "Error fetching video comments" });
    }
};
