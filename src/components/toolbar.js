import React from "react";

function Toolbar(props) {

    window.onscroll = () => {
        const header = document.querySelector('.toolbar__list');
        if (window.pageYOffset > 50) {
            header.classList.add('toolbar__bold_active');
        } else {
            header.classList.remove('toolbar__bold_active');
        }
    }
    ;

    let setCategory = props.setCategory;
    let category = props.category;

    let main = "";
    if (category === "Main") {
        main = "toolbar__bold"
    }

    let electronics = "";
    if (category === "Electronics") {
        electronics = "toolbar__bold"
    }

    let dishes = "";
    if (category === "Dishes") {
        dishes = "toolbar__bold"
    }

    let food = "";
    if (category === "Food") {
        food = "toolbar__bold"
    }

    return (
        <div className="toolbar__list">
            <a className={main} onClick={() => {
                setCategory("Main")
            }}>Main
            </a>
            <a className={electronics} onClick={() => {
                setCategory("Electronics")
            }}>Electronics
            </a>
            <a className={dishes} onClick={() => {
                setCategory("Dishes")
            }}>Dishes
            </a>
            <a className={food} onClick={() => {
                setCategory("Food")
            }}>Food
            </a>
            <div className="header_burger burger">
                <span className="burger_line burger_line_first"/>
                <span className="burger_line burger_line_second"/>
                <span className="burger_line burger_line_third"/>
            </div>
        </div>
    )

}
export default Toolbar