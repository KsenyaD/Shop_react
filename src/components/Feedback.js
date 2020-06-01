import React from "react";

function Feedback(props) {
    const showPopupAction = props.showPopupAction;

    return (
        <section className="feedback__label" onClick={() => {
            showPopupAction("Under development")
        }}>
        </section>
    );
}

export default Feedback