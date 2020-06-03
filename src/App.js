import React, {useRef} from 'react';
import './App.css';
import filter from "./utils/filterUtils";
import Cart from "./components/Cart";
import allItemsArray from "./utils/allItemsArray";
import Toolbar from "./components/Toolbar";
import Feedback from "./components/Feedback";
import ShopInfo from "./components/ShopInfo";
import Search from "./components/Search";
import Products from "./components/Products";
import Popup from "./components/Popup";
import checkClick from "./utils/checkClickUtil";

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
        const array = filter(allItemsArray, this.state.category, text);
        this.setState({
            text: text,
            array: array,
        });
    }

    changeShow() {
        const cartButtonPressed = !this.state.cartShow;
        this.setState({
            cartShow: cartButtonPressed,
        })
    }

    addProductsInCart(productName) {
        const buyProductsMap = this.state.buyProducts;
        const amount = buyProductsMap.get(productName);
        if (amount !== undefined) {
            buyProductsMap.set(productName, amount + 1)
        } else buyProductsMap.set(productName, 1);
        this.setState({
            buyProducts: buyProductsMap,
        })
    }

    minusProduct(product) {
        const buyProductsMap = this.state.buyProducts;
        let amount = buyProductsMap.get(product); //нашла количество
        if (amount > 1) {
            buyProductsMap.set(product, amount - 1)
        } else buyProductsMap.set(product, 1);

        this.setState({
            buyProducts: buyProductsMap,
        });

    }

    removeProducts(product) {
        const buyProductsMap = this.state.buyProducts;
        const amount = buyProductsMap.get(product);
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
                    const cartDropdownExist = checkClick(event,".cart-dropdown");
                    const buttonExist = checkClick(event,".add-in-cart_button");

                    if (!cartDropdownExist && !buttonExist) {
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

                <Toolbar menuDisplay={this.state.menuDisplay}
                         changeMenuDisplay={this.changeMenuDisplay.bind(this)}
                         category={this.state.category}
                         setCategory={this.setCategory.bind(this)}/>

                <Cart cleanCartAction={this.cleanCart.bind(this)}
                      showPopupAction={this.showPopup.bind(this)}
                      menuDisplay={this.state.menuDisplay}
                      cartShow={this.state.cartShow}
                      changeShowAction={this.changeShow.bind(this)}
                      buyProducts={this.state.buyProducts}
                      minusProductAction={this.minusProduct.bind(this)}
                      addProductsInCartAction={this.addProductsInCart.bind(this)}
                      removeProductsAction={this.removeProducts.bind(this)}/>
                <Feedback showPopupAction={this.showPopup.bind(this)}/>
                <ShopInfo/>
                <Search searchProducts={this.searchProducts.bind(this)}
                        updateRefToProducts={this.updateRefToProducts.bind(this)}/>
                <Products array={this.state.array}
                          addProductsInCart={this.addProductsInCart.bind(this)}/>
            </div>
        )
    }
}

export default App;
