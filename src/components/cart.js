import React from "react";
import allItemsArray from "../utils/allItemsArray";

/**
 * @return {null}
 */

function Cart(props) {
    let changeShow = props.changeShow;
    let cartShow = props.cartShow;
    let addProductsInCart = props.addProductsInCart;
    let minusProduct = props.minusProduct;
    let removeProducts = props.removeProducts;
    let cartDropdownVisibility = "cart-dropdown";
    let buyProducts = props.buyProducts;
    let arrayKeys = Array.from(buyProducts.keys());
    let menuDisplay = props.menuDisplay;

    if (menuDisplay) {
        return null;
    }

    if (cartShow === false) {
        cartDropdownVisibility = "cart-dropdown__not_show"
    }
    let total = 0;

    return (
        <div className="mini-cart__content" onClick={() => {
            changeShow()
        }}>
            <p className="mini-cart__label">CART</p>
            <div className="mini-cart__amount">{arrayKeys.length}</div>

            <div className={cartDropdownVisibility}>
                {arrayKeys.map((value, index) => {
                    const product = allItemsArray.find((element) => {
                        return element.name === value
                    });
                    let count = buyProducts.get(value);
                    const productTotal = count * product.price;
                    total += productTotal;
                    return (

                        <div className={"product-in-cart"}>
                            <div className="cart-dropdown__nn">{index + 1}.</div>
                            <div className="cart-dropdown__items">
                                {value}
                            </div>
                            <div className="cart-dropdown__price">
                                {productTotal} P.
                            </div>
                            <div className={"count"}>
                                <div className={"count__minus"} onClick={() => {
                                    minusProduct(value)
                                }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/minus-math.png"/>
                                </div>
                                <p>{count}</p>
                                <div className={"count__plus"}
                                     onClick={() => {
                                         addProductsInCart(value)
                                     }}>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"/>
                                </div>
                            </div>
                            <div className={"cart__remove"}
                                 onClick={() => {
                                     removeProducts(value)
                                 }}>
                                <img src="https://img.icons8.com/android/24/000000/full-trash.png"/>
                            </div>
                        </div>

                    )
                })}
                <div className="cart-dropdown__bottom">
                    <div className="cart-dropdown__total_wrap">
                        <span className="cart-dropdown__total">Total:</span>
                        <p className="total">{total} P.</p>
                        <button className="cart-dropdown__button">CHECKOUT</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cart;