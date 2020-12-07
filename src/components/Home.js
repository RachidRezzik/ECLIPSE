import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <section className="Home_Section">
                <div class="diagonalHover first">
                    
                </div>
                <div class="diagonalHover second">
                </div>
            </section>
            <div className="sale_container">
                <h1>Deals for the Holidays</h1>
                <div className="sale_flex">
                    <div className="sale_item">
                        <h2>15% Off Mens Shirts</h2>
                        <button>Apply Coupon Code: GINGERBREAD15</button>
                    </div>
                    <div className="sale_item">
                        <h2>$10 Off Order of $75 or More</h2>
                        <button>Apply Coupon Code: SANTACLAUS22</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
