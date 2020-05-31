import React, {useRef} from 'react';
import './App.css';
import filter from "./utils/filterUtils";
import Cart from "./components/Cart";
import allItemsArray from "./utils/allItemsArray";
import Toolbar from "./components/Toolbar";
import Feedback from "./components/Feedback";
import InfoOfShop from "./components/InfoOfShop";
import Search from "./components/Search";
import Products from "./components/Products";
import Popup from "./components/Popup";

class App extends React.Component {
    state = {};
    ref = null;

    constructor(props) {
        super(props);
        this.state = {
            array: allItemsArray,
            category: "Main",
            text: "",
            cartShow: false,
            buyProducts: new Map(),
            menuDisplay: false,
            popupMsg: undefined,
        };
    }

    closePopup() {
        this.setState({
            popupMsg: undefined,
        })
    }

    cleanCart() {
        this.setState({
            buyProducts: new Map(),
        })
    }

    showPopup(massage) {

        this.setState({
            popupMsg: {
                type: "info",
                msg: massage
            }
        })
    }

    changeMenuDisplay(show) {
        if (!show) {
            const ref = this.ref;
            setTimeout(function () {
                window.scrollTo({
                    behavior: "smooth",
                    top: ref.current.offsetTop - 120
                });
            }, 100);
        }

        this.setState({
            menuDisplay: show,
        })
    }

    updateRefToProducts(ref) {
        this.ref = ref
    }

    setCategory(categoryName) {
        const array = filter(allItemsArray, categoryName, this.state.text);
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
        let cartButtonPressed = !this.state.cartShow;
        this.setState({
            cartShow: cartButtonPressed,
        })
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
        const popupMsg = this.state.popupMsg;

        return (
            <div className="site-content-holder" onClick={
                (event) => {
                    const cartDropdown = document.querySelector(".cart-dropdown");
                    if (cartDropdown === null) return;
                    let cartDropdownExist = event.target === cartDropdown;
                    if (!cartDropdownExist) {
                        let element = event.target.parentElement;
                        do {
                            if (element === cartDropdown) {
                                cartDropdownExist = true;
                                break
                            }
                            element = element.parentElement;
                        }
                        while (element !== null)
                    }

                    if (!cartDropdownExist) {
                        if (this.state.cartShow) {
                            this.changeShow()
                        }
                    }
                }
            }>
                {popupMsg ?
                    <Popup popupMsg={this.state.popupMsg} closePopup={this.closePopup.bind(this)}/>
                    : null
                }

                <Toolbar menuDisplay={this.state.menuDisplay} changeMenuDisplay={this.changeMenuDisplay.bind(this)}
                         category={this.state.category} setCategory={this.setCategory.bind(this)}/>

                <Cart cleanCart={this.cleanCart.bind(this)} showPopup={this.showPopup.bind(this)} menuDisplay={this.state.menuDisplay}
                      cartShow={this.state.cartShow} changeShow={this.changeShow.bind(this)}
                      buyProducts={this.state.buyProducts} minusProduct={this.minusProduct.bind(this)}
                      addProductsInCart={this.addProductsInCart.bind(this)}
                      removeProducts={this.removeProducts.bind(this)}/>
                <Feedback/>
                <InfoOfShop/>
                <Search searchProducts={this.searchProducts.bind(this)}
                        updateRefToProducts={this.updateRefToProducts.bind(this)}/>
                <Products array={this.state.array} addProductsInCart={this.addProductsInCart.bind(this)}/>
            </div>
        )
    }
}

export default App;
