// Add your server code here.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import { attractionRouter } from './routes/attractions.js';
import { restaurantRouter } from './routes/api.js';
import { getRestaurants } from './data/restaurants.js';

const app = express();

const PORT = process.env.PORT || 9000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// Setting to using the ejs template!
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
app.use("/api", restaurantRouter);

// acts as our entry point and our main to get responses from our server.
// where we upload index.html as our home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(req)
});

// new_restaurant page call (.html call)
// Is just going to be adding our new restaurants here.
app.get("/new_restaurant", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new_restaurant.html'));
});

// restaurant page (.html call)
// Will be displaying all of our restaurants that are added and not the items deleted.
app.get('/restaurant', (req, res) => {
    const restaurantData = getRestaurants();
    console.log(restaurantData);
    
    // Uses our restaurants.ejs in views directory to use our restaurant data from restaurants.js
    res.render('restaurants', { restaurantData });

});

// attractions page (.html call)
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

// app.use("/attraction", attractionRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});