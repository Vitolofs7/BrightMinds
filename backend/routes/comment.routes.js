module.exports = (app) => {
    const comment = require("../controllers/comment.controller.js");
    const router = require("express").Router();

    // Add a new comment
    router.post("/", comment.addComment);

    // Get all comments
    router.get("/", comment.getAllComments);

    app.use("/api/comments", router);
};