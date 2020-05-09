import React, {useRef} from "react";


function Search(props)  {
    let searchProducts = props.searchProducts;
    let updateRefToProducts = props.updateRefToProducts;
    let ref = useRef();
    updateRefToProducts(ref);

    return (
        <form className="products_search" ref={ref}>
            <input type="text" placeholder="Search..." onChange={(event) => {
                searchProducts(event.target.value)
            }}/>
        </form>
    );
}

export default Search