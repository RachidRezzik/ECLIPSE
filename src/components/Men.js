import React from 'react'
//Images
import Mens_shirt from '../images/Mens_shirt.jpg'
import Mens_short from '../images/Mens_short.jpg'
import Mens_jogger from '../images/Mens_jogger.jpg'

export default function Men() {
    return (
        <div className="Page">
            <div className="intro_container">
                <h1>Shop Men</h1>
            </div>
            <span className="scroll_fix" id="Shirts"></span>
            <h2 id="Shirts">SHIRTS</h2>
            <div className="product_container">
                <div className="product">
                    <h1 className="product_title">Dryfit T-shirt</h1>
                    <img src={Mens_shirt} alt=""/>
                </div>
            </div>
            <span className="scroll_fix" id="Shorts">1</span>
            <h2>SHORTS</h2>
            <div className="product_container">
                <div className="product">
                    <h1 className="product_title">Flexible Shorts</h1>
                    <img src={Mens_short} alt=""/>
                </div>
            </div>
            <span className="scroll_fix" id="Joggers"></span>
            <h2 id="Joggers">JOGGERS</h2>
            <div className="product_container">
                <div className="product">
                    <h1 className="product_title">Classic Joggers</h1>
                    <img src={Mens_jogger} alt=""/>
                </div>
            </div>
        </div>
    )
}
