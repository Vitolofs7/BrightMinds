import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();

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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
