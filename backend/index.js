require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

const db = require("./models/index.js");

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hi" });
});

const routes = [
    "comment"
];

routes.forEach((route) => require(`./routes/${route}.routes.js`)(app));

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

db.sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("Database synced: tables dropped and recreated.");

    const PORT = process.env.HOST_PORT || 8080;
    server.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
