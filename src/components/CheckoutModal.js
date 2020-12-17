import React, {useEffect, useRef} from 'react'
//Images
import x_mark from '../images/white_x_mark.png'


export default function CheckoutModal(props) {
    const handleModalClose = () => {
        props.handleModalClick()
    }

    const node = useRef()
    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && props.modalOpen) {
                props.handleModalClick()
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    return (
        <div className={props.modalOpen ? "checkout_modal active" : "checkout_modal"}>
            <div ref={node} className="modal_message_container">
                <h3>We're Sorry, Checkout is Currently Unavailable....</h3>
                <h4>Please Forgive Us and Get 25% Off Your Next Order Using Coupon Code "OURBAD25" When Checkout is Available Again!</h4>
            </div>
            <img className={props.modalOpen ? "exit_modal active" : "exit_modal"} src={x_mark} onClick={handleModalClose} alt=""/>
        </div>
    )
}
