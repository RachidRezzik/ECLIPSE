import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <section className="Home_Section">
                <div className="diagonalHover first">
                    
                </div>
                <div className="diagonalHover second">
                </div>
            </section>
            <div className="sale_container">
                <div className="sale_background">
                    <h1>Deals for the Holidays</h1>
                    <div className="sale_flex">
                        <div className="sale_item">
                            <h2>$5 Off Order of $50 or More</h2>
                            <button>Coupon Code: SANTACLAUS22</button>
                        </div>
                        <div className="sale_item">
                            <h2>$15 Off Order of $80 or More</h2>
                            <button>Coupon Code: GINGERBREAD15</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
