import React from "react";

function Toolbar(props) {

    window.onscroll = () => {
        const header = document.querySelector('.Toolbar__list');
        if (window.pageYOffset > 50) {
            header.classList.add('Toolbar__Bold_active');
        } else {
            header.classList.remove('Toolbar__Bold_active');
        }
    }
    ;

    let setCategory = props.setCategory;
    let category = props.category;

    let main = "";
    if (category === "Main") {
        main = "Toolbar__Bold"
    }

    let electronics = "";
    if (category === "Electronics") {
        electronics = "Toolbar__Bold"
    }

    let dishes = "";
    if (category === "Dishes") {
        dishes = "Toolbar__Bold"
    }

    let food = "";
    if (category === "Food") {
        food = "Toolbar__Bold"
    }

    return (
        <div className="Toolbar__list">
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
        </div>
    )

}
export default Toolbar