import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRoutes from './routes/user.routes.js';
import commentRoutes from './routes/comment.routes.js';
import replyRoutes from './routes/reply.routes.js';
import authRoutes from './routes/auth.routes.js';
import { sequelize } from './models/index.js';
import videoRoutes from './routes/video.routes.js'

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 8080;

sequelize.sync({ force: true })
  .then(() => {
    console.log("Database successfully synchronized");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });