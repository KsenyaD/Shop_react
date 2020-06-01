import React from "react";

function Feedback(props) {
    const showPopupAction = props.showPopupAction;

    return (
        <div className="feedback__label" onClick={() => {
            showPopupAction("Under development")
        }}>
        </div>
    );
}

export default Feedback