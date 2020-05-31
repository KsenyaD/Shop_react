import React from "react";

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.closePopup = this.props.closePopup;

    }

    componentDidMount() {
        this.timerID = setTimeout(() => {

                this.closePopup()
            }, 5000
        )
    }

    componentWillUnmount() {
        clearTimeout(this.timerID)
    }


    render() {
        let popupMsg = this.props.popupMsg;
        if (popupMsg === undefined) {
            return null
        }
        return (
            <div className='popup-wrap' onClick={()=>{
                this.closePopup()
            }}>
                <section className="content__popup">{popupMsg.msg}</section>
            </div>
        )
    }
}

export default Popup;