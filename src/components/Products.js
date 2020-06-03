import React, {useRef} from "react";

function Products(props) {
    const array = props.array;
    const addProductsInCart = props.addProductsInCart;
    /*доделать отображение последнего элемента*/

    return (
        array.length === 0 ? <p className="no-products-in-cart">No products</p> :
            <div className="products_wrap">
                {array.map((value, index) => {
                    const positionProducts = "position_products";
                    let ProductsWrapInfo = "products_wrap-info";
                    const row = Math.floor(index / 2);
                    if (row % 2 === 1) {
                        ProductsWrapInfo += " " + positionProducts;
                    }
                    return (
                        <div className={ProductsWrapInfo} key={value.name}>
                        <span className="products-info">
                            <h3 className="products-title">{value.name}</h3>
                            <p className="products-price">{value.price} P.</p>
                            <button className="add-in-cart_button" onClick={() => {
                                addProductsInCart(value.name)
                            }}>ADD IN CART
                            </button>
                        </span>
                            <span className="products-img-wrap">
                            <img className="products-img" src={value.imageUrl}/>
                        </span>
                        </div>
                    )
                })
                }
            </div>
    )
}

export default Products