// Fill this in
// let restuarantData = [
//     {
//         "id": 0,
//         "name": "...",
//         "phone": "...",
//         "address": "..."
//     },
//     etc ...
// ];
let restaurantData = [
    {
        "id": 0,
        "name": "HogWars",
        "phone": "123-456-7891",
        "address": "sfsu-address"
    },
    {
        "id": 1,
        "name": "BearDiner",
        "phone": "789-123, 4567",
        "address": "funny-address"
    },
    {
        "id": 2,
        "name": "BurgerDiner",
        "phone": "567-891-2345",
        "address": "sfsu-address"
    }
];

let lastId = restaurantData.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurantData[id].id
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
