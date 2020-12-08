import React from 'react'
import social_media from '../images/social_media.png'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <h3>Join the ECLIPSE Newsletter to Find Out About New Releases and Exclusive Offers!</h3>
                <p>You Can Unsubscribe Anytime</p>
                <div className="newsletter">
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" id="email_submit" value="Submit" />
                </div>
            </div>
        </div>
    )
}
