import React from 'react'

export default function Girls() {
    return (
        <div>
            <div className="Page">
                <div className="intro_container" id="container_girls">
                    <h1>Shop Girls</h1>
                </div>
                <h2 id="Shirts">SHIRTS</h2>
                <div className="product_container">
                    <div className="product">
                        <h1 className="product_title">Dryfit T-shirt</h1>
                        {/* <img src={Mens_shirt} alt=""/> */}
                    </div>
                </div>
                <h2 id="Shorts">SHORTS</h2>
                <div className="product_container">
                    <div className="product">
                        <h1 className="product_title">Flexible Shorts</h1>
                        {/* <img src={Mens_short} alt=""/> */}
                    </div>
                </div>
                <h2 id="Joggers">LEGGINGS</h2>
                <div className="product_container">
                    <div className="product">
                        <h1 className="product_title">Classic Joggers</h1>
                        {/* <img src={Mens_jogger} alt=""/> */}
                    </div>
                </div>
            </div> 
        </div>
    )
}
