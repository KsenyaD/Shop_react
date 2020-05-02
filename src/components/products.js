import React from "react";

function Products(props) {
    let array = props.array;
    let addProductsInCart = props.addProductsInCart;
    /*доделать отображение последнего элемента*/
    return (
        <div className="products_wrap">
            {array.map((value, index) => {
                let positionProducts = "position_products";
                let ProductsWrapInfo = "products_wrap-info";
                let row = Math.floor(index / 2);
                if (row % 2 === 1) {
                    ProductsWrapInfo += " " + positionProducts;
                }
                return (
                    <div className={ProductsWrapInfo} key={value.name}>
                        <div className="products-info">
                            <h3 className="products-title">{value.name}</h3>
                            <p className="products-price">{value.price} P.</p>
                            <button className="add-in-cart_button" onClick={() => {
                                addProductsInCart(value.name)
                            }}>ADD IN CART
                            </button>
                        </div>
                        <div className="products-img-wrap">
                            <img className="products-img" src={value.imageUrl}/>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Products