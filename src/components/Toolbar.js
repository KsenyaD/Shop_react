import React from "react";

function Toolbar(props) {
    let menuDisplay = props.menuDisplay;
    let changeMenuDisplay = props.changeMenuDisplay;

    window.onscroll = () => {
        const header = document.querySelector('.toolbar__list');
        if (window.pageYOffset > 50) {
            header.classList.add('toolbar__bold_active');
        } else {
            header.classList.remove('toolbar__bold_active');
        }
    };


    let toolbarNav = "toolbar__nav";

    if (menuDisplay) {
        toolbarNav += " toolbar__nav_active"
    }

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
            <nav className={toolbarNav}>
                <a href="#" className={main} onClick={() => {
                    setCategory("Main");
                    changeMenuDisplay(false)
                }}>Main</a>

                <a href="#" className={electronics} onClick={() => {
                    setCategory("Electronics");
                    changeMenuDisplay(false)
                }}>Electronics
                </a>
                <a href="#" className={dishes} onClick={() => {
                    setCategory("Dishes");
                    changeMenuDisplay(false)
                }}>Dishes
                </a>
                <a href="#" className={food} onClick={() => {
                    setCategory("Food");
                    changeMenuDisplay(false)
                }}>Food
                </a>

                <div className="toolbar_nav-close" onClick={() => {
                    changeMenuDisplay(false)
                }}>
                    <span className="toolbar_nav-close-line"/>
                    <span className="toolbar_nav-close-line"/>
                </div>
            </nav>

            <div className="header_burger" onClick={() => {
                changeMenuDisplay(true)
            }}>
                <span className="burger_line burger_line_first"/>
                <span className="burger_line burger_line_second"/>
                <span className="burger_line burger_line_third"/>
            </div>
        </div>
    )
}

export default Toolbar