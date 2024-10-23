import express from 'express';
const router = express.Router();

// Add routes here


router.get("/", (req, res) => {
    res.send("router.get #1")
})

export {router as backendRouter};
