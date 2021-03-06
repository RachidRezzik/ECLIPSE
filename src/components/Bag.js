import React, { useState } from 'react'
//Images
import x_mark from '../images/X-icon.svg'
import minus_sign from '../images/Minus-icon.svg'
import plus_sign from '../images/Plus-icon.svg'
//Components
import CheckoutModal from './CheckoutModal'

export default function Cart(props) {
    let total = 0
    total = props.bagOrders.reduce((total, order) => total + order.subtotal, 0).toFixed(2) 

    
    const setDiscountStorage = (discount_amount) => {
        localStorage.setItem('discount', discount_amount)
        setDiscount(discount_amount)
    }
    
    const readDiscountStorage = () => {
        return Number(localStorage.getItem('discount'))   
    }
    
    const [discount, setDiscount] = useState(readDiscountStorage() != null ? readDiscountStorage() : 0)
    
    if (localStorage.getItem('discount') === null){
        console.log('discount needs to be zero')
        setDiscountStorage(0)
    }

    const handleRemove = (itemImage, size, quantity, subtotal) =>{
        props.handleRemoveFromBag(props.bagOrders, itemImage, size, quantity)
        if ((total - subtotal < 50 && discount === 5) || (total -subtotal < 80 && discount === 15)){
            setDiscount(0)
            setDiscountStorage(0)
        }
    }

    const handleAdd = (itemImage, size, quantity, itemPrice) => {
        props.handleAddQuantity(props.bagOrders, itemImage, size, quantity, itemPrice)
    }

    const handleSubtract = (itemImage, size, quantity, itemPrice) => {
        props.handleSubtractQuantity(props.bagOrders, itemImage, size, quantity, itemPrice)
        if ((total - itemPrice < 50 && discount === 5) || (total - itemPrice < 80 && discount === 15)){
            setDiscount(0)
            setDiscountStorage(0)
        }
    }

    const coupon_code = React.createRef()
    const handleCoupon = () => {
        if (coupon_code.current.value === "SANTACLAUS22" && total >= 50 && discount === 0){
            setDiscount(5)
            setDiscountStorage(5)
            coupon_message = "Coupon Code: SANTACLAUS22 Applied"
        } else if (coupon_code.current.value === "GINGERBREAD15" && total >= 80){ 
            setDiscount(15)
            setDiscountStorage(15)
            coupon_message = "Coupon Code: GINGERBREAD15 Applied"
        }
    }

    let coupon_message = <h4 className="coupon_message">Status: No Valid Coupons</h4>
    if (discount == 5){
        coupon_message = <h4 className="coupon_message">Status: <span style={{color: "rgb(5, 175, 5)"}}>SANTACLAUS22 Applied</span></h4>
    } else if (discount == 15){
        coupon_message = <h4 className="coupon_message">Status: <span style={{color: "rgb(5, 175, 5)"}}>GINGERBREAD15 Applied</span></h4>
    }

    //Message Modal When User Clicks Checkout
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className="bag_container">
        <CheckoutModal 
        modalOpen={modalOpen}
        handleModalClick={handleModalClick}
        />
            <h1>Your Bag</h1>
            {props.bagItems === 0 ? 
            <div>
                <h2 id="empty_bag">Your Bag is Empty</h2>
            </div> :
            <div>
                <div className="bag_intro">
                    <div>
                        <h3>TOTAL: ({props.bagItems} {props.bagItems > 1 ? "Items" : "Item"})</h3>
                        <h3>${total}</h3>
                    </div>
                    <button className="checkout" onClick={handleModalClick}>CHECKOUT</button>
                </div>
                <div className="bag_items_container">
                {props.bagOrders.map(order => {
                    return (
                        <div key={order.key}className="bag_item">
                            <div className="subtotal_remove">
                            ${order.subtotal.toFixed(2)}
                            <img className="remove_item" src={x_mark} alt="" onClick={() => handleRemove(order.itemImage, order.size, order.quantity, order.subtotal)} />
                            </div>
                            <div className="item_image">
                                <img src={order.itemImage} alt="" />
                            </div>
                            <div className="item_description">
                                <h2>{order.itemTitle}</h2>
                                <h2>Size: {order.size}</h2>
                                <h2>Quantity:</h2>
                                <div className="quantity_div">
                                    <img id="minus_sign" src={minus_sign} alt="" onClick={() => handleSubtract(order.itemImage, order.size, order.quantity, order.itemPrice)}/>
                                    <span>{order.quantity}</span>
                                    <img id="plus_sign" src={plus_sign} alt="" onClick={() => handleAdd(order.itemImage, order.size, order.quantity, order.itemPrice)}/>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <div className="coupon_area">
                    <h3>Coupon Codes</h3>
                    <form className="coupon_flex" onSubmit={handleCoupon}>
                        <input ref={coupon_code} className="coupon_input" type="text" placeholder="Enter Coupon Code..." />
                        <input className="coupon_submit" type="submit" value="APPLY" />
                    </form>
                    {coupon_message}
                </div>
                <div style={{marginTop: "30px"}} className="order_summary_div">
                    <p>{props.bagItems} {props.bagItems > 1 ? "ITEMS" : "ITEM"}</p>
                    <p>${total}</p>
                </div>
                <div className="order_summary_div">
                    <p>DELIVERY</p>
                    <p>FREE</p>
                </div>
                <div className="order_summary_div">
                    <p>Sales Tax</p>
                    <p>-</p>
                </div>
                {discount != 0 ? 
                <div className="order_summary_div">
                    <p>COUPON CODE</p>
                    <p style={{color:'red'}}>-${discount.toFixed(2)}</p>
                </div>: ""}
                <div className="order_summary_div">
                    <h2>TOTAL</h2>
                    <h2 >${(total - discount).toFixed(2)}</h2>
                </div>
                <button className="checkout" style={{margin: "50px"}} onClick={handleModalClick}>CHECKOUT</button>
            </div>}
        </div>
    )
}
