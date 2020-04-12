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
        imageUrl: require("./img/items_img/electronicks/mikser.png"),
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
        imageUrl: require("./img/items_img/electronicks/kettle.png"),

    },
    {
        name: "Iron",
        price: 300,
        category: "Electronics",
        popularity: 4,
        imageUrl: require("./img/items_img/electronicks/iron.png"),
    },
    {
        name: "Hairdryer",
        price: 100,
        category: "Electronics",
        popularity: 21,
        imageUrl: require("./img/items_img/electronicks/hairdryer.png"),
    },
    {
        name: "Fridge",
        price: 1100,
        category: "Electronics",
        popularity: 20,
        imageUrl: require("./img/items_img/electronicks/fridge.png"),
    },
    /*electronics end*/
    /*dishes start*/
    {
        name: "Folk",
        price: 15,
        category: "Dishes",
        popularity: 15,
        imageUrl: require("./img/items_img/dishes/fork.png"),
    },
    {
        name: "Knife",
        price: 500,
        category: "Dishes",
        popularity: 53,
        imageUrl: require("./img/items_img/dishes/knife.png"),
    },
    {
        name: "Plate",
        price: 110,
        category: "Dishes",
        popularity: 52,
        imageUrl: require("./img/items_img/dishes/plate.png"),
    },
    {
        name: "Spoon",
        price: 20,
        category: "Dishes",
        popularity: 35,
        imageUrl: require("./img/items_img/dishes/spoon.png"),
    },
    {
        name: "Cup",
        price: 300,
        category: "Dishes",
        popularity: 45,
        imageUrl: require("./img/items_img/dishes/cup.png"),
    },
    /*dishes end */
    /*food start*/ // text == value.text
    {
        name: "Cheese",
        price: 500,
        category: "Food",
        popularity: 75,
        imageUrl: require("./img/items_img/foods/cheese.png"),
    },
    {
        name: "Pasta",
        price: 200,
        category: "Food",
        popularity: 95,
        imageUrl: require("./img/items_img/foods/pasta.png"),
    },
    {
        name: "Cake",
        price: 600,
        category: "Food",
        popularity: 95,
        imageUrl: require("./img/items_img/foods/cake.png"),
    },
    {
        name: "Butter",
        price: 200,
        category: "Food",
        popularity: 85,
        imageUrl: require("./img/items_img/foods/butter.png"),
    },
    {
        name: "Crisps",
        price: 80,
        category: "Food",
        popularity: 75,
        imageUrl: require("./img/items_img/foods/crisps.png"),
    }
];


function Toolbar(props) {

    let setCategory = props.setCategory;
    let category = props.category;

    let main = "";
    if (category === "Main") {
        main = "Toolbar__Bold"
    }

    let electronics = "";
    if (category === "Electronics") {
        electronics = "Toolbar__Bold"
    }

    let dishes = "";
    if (category === "Dishes") {
        dishes = "Toolbar__Bold"
    }

    let food = "";
    if (category === "Food") {
        food = "Toolbar__Bold"
    }

    return (
        <div className="Toolbar__list">
            <a className={main} onClick={() => {
                setCategory("Main")
            }}>Main
            </a>
            <a className={electronics} onClick={() => {
                setCategory("Electronics")
            }}>Electronics
            </a>
            <a className={dishes} onClick={() => {
                setCategory("Dishes")
            }}>Dishes
            </a>
            <a className={food} onClick={() => {
                setCategory("Food")
            }}>Food
            </a>
        </div>
    )

}

function Cart(props) {
    let changeShow = props.changeShow;
    let show = props.show;
    let cartDropdownVisibility = "cart-dropdown";

    if (show === false) {
        cartDropdownVisibility = "Cart-dropdown__not_show"
    }

    return (
        <div className="Mini-cart__content" onClick={() => {
            changeShow()
        }}>
            <p className="Mini-cart__label">CART</p>
            <div className="Mini-cart__amount">4</div>

            <div className={cartDropdownVisibility}>
                <div className="cart-dropdown__items">
                    Test
                </div>
                <div className="cart-dropdown__bottom">
                    <div className="cart-dropdown__total_wrap">
                        <span className="cart-dropdown__total">Total:</span>
                        <button className="pure-button cart-dropdown__button">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


class Feedback extends React.Component {
    render() {
        return (
            <div className="Feedback__content">
            </div>
        );
    }

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


function Products(props) {
    let array = props.array;
    let lengthArray = array.length + 1;
    let ProductsImgWidth = "Products-img";
    if (lengthArray % 2 === 1) {

    }

    /*доделать отображение элементов*/
    return (
        <div className="Products_wrap">
            {array.map((value, index) => {
                return (
                    <div className="Products_wrap-info" key={value.name}>
                        <div className="Products-info">
                            <h3 className="Products-title">{value.name}</h3>
                            <p className="Products-price">{value.price} P.</p>
                            <button className="pure-button">ADD IN CART</button>
                        </div>
                        <div className="Products-img-wrap">
                            <img className="Products-img" src={value.imageUrl}/>
                        </div>
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
            array: allItemsArray,
            category: "Main",
            text: "",
            show: false,
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

    changeShow() {
        let cartButtonPressed = this.state.show;
        if (cartButtonPressed === true) {
            this.setState({
                show: false,
            })
        } else {
            this.setState({
                show: true,
            })
        }
    }


    render() {

        return (
            <div className="App">
                <Toolbar category={this.state.category} setCategory={this.setCategory.bind(this)}/>
                <Cart show={this.state.show} changeShow={this.changeShow.bind(this)}/>
                <Feedback/>
                <InfoOfShop/>
                <Search searchProducts={this.searchProducts.bind(this)}/>
                <Products array={this.state.array}/>
            </div>
        )
    }
}

export default App;
