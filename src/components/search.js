import React from "react";


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

export default Search