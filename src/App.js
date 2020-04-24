import React from 'react';
import './App.css';
import filter from "./utils/filterUtils";
import Cart from "./components/cart";
import allItemsArray from "./utils/allItemsArray";
import Toolbar from "./components/toolbar";
import Feedback from "./components/feedback";
import InfoOfShop from "./components/infoOfShop";
import Search from "./components/search";
import Products from "./components/products";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: allItemsArray,
            category: "Main",
            text: "",
            show: false,
            buyProducts: new Map(),
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

    addProductsInCart(productName) {
        let buyProductsMap = this.state.buyProducts;
        let amount = buyProductsMap.get(productName);
        if (amount !== undefined) {
            buyProductsMap.set(productName, amount + 1)
        } else buyProductsMap.set(productName, 1);
        this.setState({
            buyProducts: buyProductsMap,
        })
    }

    minusProduct(product) {
        let buyProductsMap = this.state.buyProducts;
        let amount = buyProductsMap.get(product); //нашла количество
        if (amount > 1) {
            buyProductsMap.set(product, amount - 1)
        } else buyProductsMap.set(product, 1);

        this.setState({
            buyProducts: buyProductsMap,
        });

    }

    removeProducts(product) {
        let buyProductsMap = this.state.buyProducts;
        let amount = buyProductsMap.get(product);
        if (amount !== undefined) {
            buyProductsMap.delete(product)
        }
        this.setState({
            buyProducts: buyProductsMap,
        });
    }

    render() {

        return (
            <div className="App">
                <Toolbar category={this.state.category} setCategory={this.setCategory.bind(this)}/>
                <Cart show={this.state.show} changeShow={this.changeShow.bind(this)}
                      buyProducts={this.state.buyProducts} minusProduct={this.minusProduct.bind(this)}
                      addProductsInCart={this.addProductsInCart.bind(this)}
                      removeProducts={this.removeProducts.bind(this)}
                />
                <Feedback/>
                <InfoOfShop/>
                <Search searchProducts={this.searchProducts.bind(this)}/>
                <Products array={this.state.array} addProductsInCart={this.addProductsInCart.bind(this)}/>
            </div>
        )
    }
}

export default App;
