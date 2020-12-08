import React from 'react'
//Images
import Mens_shirt from '../images/Men_shirt.jpg'
import Mens_shirt2 from '../images/Men_shirt2.jpg'
import Mens_short from '../images/Men_short.jpg'
import Mens_short2 from '../images/Men_short2.jpg'
import Mens_jogger from '../images/Men_jogger.jpg'
import Mens_jogger2 from '../images/Men_jogger2.jpg'

export default function Men() {
    return (
        <div className="Page">
            <div className="intro_container">
                <h1>Shop Men</h1>
            </div>
            <h2 id="Shirts">SHIRTS</h2>
            <div className="product_container">
                <div className="product">
                    <img src={Mens_shirt} alt=""/>
                    <h1 className="product_title">Dryfit T-shirt</h1>
                    <h3>$17.50</h3>
                </div>
                <div className="product">
                    <img src={Mens_shirt2} alt=""/>
                    <h1 className="product_title">Dryfit T-shirt</h1>
                    <h3>$17.50</h3>
                </div>
            </div>
            <h2 id="Shorts">SHORTS</h2>
            <div className="product_container">
                <div className="product">
                    <img src={Mens_short} alt=""/>
                    <h1 className="product_title">Flexible Shorts</h1>
                    <h3>$19.99</h3>
                </div>
                <div className="product">
                    <img src={Mens_short2} alt=""/>
                    <h1 className="product_title">Flexible Shorts</h1>
                    <h3>$19.99</h3>
                </div>
            </div>
            <h2 id="Joggers">JOGGERS</h2>
            <div className="product_container">
                <div className="product">
                    <img src={Mens_jogger} alt=""/>
                    <h1 className="product_title">Classic Joggers</h1>
                    <h3>$27.50</h3>
                </div>
                <div className="product">
                    <img src={Mens_jogger2} alt=""/>
                    <h1 className="product_title">Classic Joggers</h1>
                    <h3>$27.50</h3>
                </div>
            </div>
        </div>
    )
}
