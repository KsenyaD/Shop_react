let allItemsArray = [
    /*food start*/
    {
        name: "Pasta",
        price: 200,
        category: "Food",
        popularity: 95,
        imageUrl: require("../img/items_img/foods/pasta.png"),
    },
    {
        name: "Cake",
        price: 600,
        category: "Food",
        popularity: 95,
        imageUrl: require("../img/items_img/foods/cake.png"),
    },
    {
        name: "Butter",
        price: 200,
        category: "Food",
        popularity: 85,
        imageUrl: require("../img/items_img/foods/butter.png"),
    },
    {
        name: "Crisps",
        price: 80,
        category: "Food",
        popularity: 75,
        imageUrl: require("../img/items_img/foods/crisps.png"),
    },
    {
        name: "Cheese",
        price: 500,
        category: "Food",
        popularity: 75,
        imageUrl: require("../img/items_img/foods/cheese.png"),
    },
    /*food end*/
    /*electronics start*/
    {
        name: "Mixer",
        price: 800,
        category: "Electronics",
        popularity: 1,
        imageUrl: require("../img/items_img/electronicks/mikser.png"),
        discounts: [
            {
                count: 3,
                percents: 15
            },
            {
                count: 5,
                percents: 25
            },
        ]
    },
    {
        name: "Kettle",
        price: 400,
        category: "Electronics",
        popularity: 3,
        imageUrl: require("../img/items_img/electronicks/kettle.png"),

    },
    {
        name: "Iron",
        price: 300,
        category: "Electronics",
        popularity: 4,
        imageUrl: require("../img/items_img/electronicks/iron.png"),
    },
    {
        name: "Hairdryer",
        price: 100,
        category: "Electronics",
        popularity: 21,
        imageUrl: require("../img/items_img/electronicks/hairdryer.png"),
    },
    {
        name: "Fridge",
        price: 1100,
        category: "Electronics",
        popularity: 20,
        imageUrl: require("../img/items_img/electronicks/fridge.png"),
    },
    /*electronics end*/
    /*dishes start*/
    {
        name: "Folk",
        price: 15,
        category: "Dishes",
        popularity: 15,
        imageUrl: require("../img/items_img/dishes/fork.png"),
    },
    {
        name: "Knife",
        price: 500,
        category: "Dishes",
        popularity: 53,
        imageUrl: require("../img/items_img/dishes/knife.png"),
    },
    {
        name: "Plate",
        price: 110,
        category: "Dishes",
        popularity: 52,
        imageUrl: require("../img/items_img/dishes/plate.png"),
    },
    {
        name: "Spoon",
        price: 20,
        category: "Dishes",
        popularity: 35,
        imageUrl: require("../img/items_img/dishes/spoon.png"),
    },
    {
        name: "Cup",
        price: 300,
        category: "Dishes",
        popularity: 45,
        imageUrl: require("../img/items_img/dishes/cup.png"),
    },
    /*dishes end */

];

export default allItemsArray;
