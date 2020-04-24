import React from "react";

function Products(props) {
    let array = props.array;
    let addProductsInCart = props.addProductsInCart;
    /*доделать отображение последнего элемента*/
    return (
        <div className="Products_wrap">
            {array.map((value, index) => {
                let positionProducts = "position_products";
                let ProductsWrapInfo = "Products_wrap-info";
                let row = Math.floor(index / 2);
                if (row % 2 === 1) {
                    ProductsWrapInfo += " " + positionProducts;
                }
                return (
                    <div className={ProductsWrapInfo} key={value.name}>
                        <div className="Products-info">
                            <h3 className="Products-title">{value.name}</h3>
                            <p className="Products-price">{value.price} P.</p>
                            <button className="pure-button" onClick={() => {
                                addProductsInCart(value.name)
                            }}>ADD IN CART
                            </button>
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

export default Products