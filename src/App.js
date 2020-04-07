import React from 'react';
import logo from './logo.svg';
import './App.css';
import {render} from "react-dom";
import filter from "./utils/FilterUtils";

let allItemsArray = [
    /*electronics start*/
    {
        name: "Mixer",
        price: 800,
        category: "Electronics",
        popularity: 1,
        imgFile: "mikser.png",
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

    },
    {
        name: "Iron",
        price: 300,
        category: "Electronics",
        popularity: 4,
    },
    {
        name: "Fridge",
        price: 1100,
        category: "Electronics",
        popularity: 20,
    },
    {
        name: "Hairdryer",
        price: 100,
        category: "Electronics",
        popularity: 21,
    },
    /*electronics end*/
    /*dishes start*/
    {
        name: "Folk",
        price: 15,
        category: "Dishes",
        popularity: 15,
    },
    {
        name: "Knife",
        price: 500,
        category: "Dishes",
        popularity: 53,
    },
    {
        name: "Plate",
        price: 110,
        category: "Dishes",
        popularity: 52,
    },
    {
        name: "Spoon",
        price: 20,
        category: "Dishes",
        popularity: 35,
    },
    {
        name: "Cup",
        price: 300,
        category: "Dishes",
        popularity: 45,
    },
    /*dishes end */
    /*food start*/ // text == value.text
    {
        name: "Cheese",
        price: 500,
        category: "Food",
        popularity: 75,
    },
    {
        name: "Pasta",
        price: 200,
        category: "Food",
        popularity: 95,
    },
    {
        name: "Cake",
        price: 600,
        category: "Food",
        popularity: 95,
    },
    {
        name: "Butter",
        price: 200,
        category: "Food",
        popularity: 85,
    },
    {
        name: "Crisps",
        price: 80,
        category: "Food",
        popularity: 75,
    }
];


class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.setCategory = props.setCategory;
    }

    render() {
        return (
            <div className="Toolbar__list">
                <a onClick={() => {
                    this.setCategory("Main")
                }}>Main
                </a>
                <a onClick={() => {
                    this.setCategory("Electronics")
                }}>Electronics
                </a>
                <a onClick={() => {
                    this.setCategory("Dishes")
                }}>Dishes
                </a>
                <a onClick={() => {
                    this.setCategory("Food")
                }}>Food
                </a>
            </div>
        )
    }
}

class Cart extends React.Component {
    render() {
        return (
            <div className="Cart_wrapper">
                <p>Cart</p>
            </div>
        );
    }

    //количество указать
}

class Feedback {

}

class InfoOfShop extends React.Component {
    render() {
        return (
            <div className="General-info-wrap">
                <div className="General-info-img"/>
                <h1 className="Title-one">APPLIANCES</h1>
                <p className="Title-two">Online Shop</p>
                <div className="Short-title-wrap">
                    <p className="Short-title">We offer the sale of goods of all categories. Low prices. Always in
                        stock.</p>
                </div>
                <p className="Title-all-products">PRODUCTS</p>

            </div>
        );
    }
}


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchProducts = props.searchProducts
    }

    render() {
        return (
            <form className="Subtitle-all-products">
                <input type="text" placeholder="Search..." onChange={(event) => {
                    this.searchProducts(event.target.value)
                }}/>
            </form>
        )
    }
}

class Category {

}

function Products(props) {
    let array = props.array;
    return (
        <div className="Products_wrap">
            {array.map((value, index) => {
                return (
                    <div className="Products_wrap-info" key={value.name}>
                        <div className="Products-info">
                            <h3 className="Products-title">{value.name}</h3>
                            <p className="Products-price">{value.price} P.</p>
                            <button className="Products-button">ADD IN CART</button>
                        </div>
                        <div className="Products-img">{value.imgFile}</div>
                    </div>
                )
            })
            }
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array1: allItemsArray,
            array: allItemsArray,
            category: "Main",
            text: "",
        };
    }

    setCategory(categoryName) {
        let array = filter(allItemsArray, categoryName, this.state.text);
        this.setState({
            array: array,
            category: categoryName,
        });
    }

    searchProducts(text) {
        let array = filter(allItemsArray, this.state.category, text);
        this.setState({
            text: text,
            array: array,
        });
    }

    render() {

        return (
            <div className="App">
                <Toolbar setCategory={this.setCategory.bind(this)}/>
                <InfoOfShop/>
                <Search searchProducts={this.searchProducts.bind(this)}/>
                <Products array={this.state.array}/>
            </div>
        )
    }
}

export default App;
