import React from "react";
import allItemsArray from "../utils/allItemsArray";

/**
 * @return {null}
 */

/** @namespace props.cleanCartAction */
/** @namespace props.changeShowAction */
/** @namespace props.addProductsInCartAction */
/** @namespace props.minusProductAction */
/** @namespace props.removeProductsAction */
/** @namespace props.showPopupAction */

function Cart(props) {

    // actions
    const cleanCartAction = props.cleanCartAction;
    const changeShowAction = props.changeShowAction;
    const addProductsInCartAction = props.addProductsInCartAction;
    const minusProductAction = props.minusProductAction;
    const removeProductsAction = props.removeProductsAction;
    const showPopupAction = props.showPopupAction;

    // data
    const cartShow = props.cartShow;
    const buyProducts = props.buyProducts;
    const arrayKeys = Array.from(buyProducts.keys());
    const menuDisplay = props.menuDisplay;

    if (menuDisplay) {
        return null;
    }

    const cartDropdownVisibility = ["cart-dropdown"];
    if (cartShow === false) {
        cartDropdownVisibility.push("cart-dropdown__not_show")
    }
    let total = 0;

    return (
        <div className="mini-cart__content" >
            <p className="mini-cart__label">CART</p>
            <div className="mini-cart__amount" onClick={() => {
                changeShowAction()
            }}>{arrayKeys.length}</div>

            <div className={cartDropdownVisibility.join(" ")}>
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
                                    minusProductAction(value)
                                }}>
                                    <img alt="minus" src="https://img.icons8.com/ios-glyphs/30/000000/minus-math.png"/>
                                </div>
                                <p>{count}</p>
                                <div className={"count__plus"}
                                     onClick={() => {
                                         addProductsInCartAction(value)
                                     }}>
                                    <img alt="plus" src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"/>
                                </div>
                            </div>
                            <div className={"cart__remove"}
                                 onClick={() => {
                                     removeProductsAction(value)
                                 }}>
                                <img alt="delete" src="https://img.icons8.com/android/24/000000/full-trash.png"/>
                            </div>
                        </div>
                    )
                })}
                <div className="cart-dropdown__bottom">
                    <div className="cart-dropdown__total_wrap">
                        <span className="cart-dropdown__total">Total:</span>
                        <p className="total">{total} P.</p>
                        <button className="cart-dropdown__button" onClick={()=>{
                            showPopupAction("Thanks for your order!");
                            cleanCartAction()
                        }}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;