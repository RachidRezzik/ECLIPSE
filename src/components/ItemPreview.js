import React, {useState} from 'react'
import AddtoBag from './AddtoBag'

export default function ItemPreview(props) {
    const [featuredImage, setFeaturedImage] = useState(props.imageArray[0])

    const handleSwitchFeatured = (src) => {
        setFeaturedImage(src)
    }

    return (
        <div>
            <h1 className="itemPreviewTitle">{props.itemTitle}</h1>
            <div className="item_preview_container">
                <div className="item_images">
                    <img className="featured_image" src={featuredImage} alt="" />
                    <div className="item_photos">
                        <img src={props.imageArray[0]} alt="" onClick={() => handleSwitchFeatured(props.imageArray[0])}/>
                        <img src={props.imageArray[1]} alt="" onClick={() => handleSwitchFeatured(props.imageArray[1])}/>
                        <img src={props.imageArray[2]} alt="" onClick={() => handleSwitchFeatured(props.imageArray[2])}/> 
                    </div>
                </div>
                <div className="item_options">
                    <p>{props.category}</p>
                    <h3>${props.itemPrice}</h3>
                    <AddtoBag 
                     handleAddToBag={props.handleAddToBag}   
                    />
                </div>
            </div>
        </div>
    )
}
