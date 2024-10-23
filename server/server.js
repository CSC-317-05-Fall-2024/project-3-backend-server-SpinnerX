// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import "restaurantData"

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));

// Setting to using the ejs template!
app.set("view engine", "ejs")


// acts as our entry point and our main to get responses from our server.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(req)
});

// importing the router
// const router = require("routes/api")

// router.use("/app", router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
