import React, {useState} from 'react'
import AddtoBag from './AddtoBag'



export default function ItemPreview(props) {
    //Handling Different Product Picture Selection by User
    const handleFeaturedImage = (src) => {
        props.handleFeaturedImage(src)
    }


    //Handling When User Selects One of the Related Products 
    const handleItemPreview2 = (itemTitle, imageArray, itemPrice, category) => {
        props.handleItemPreview(itemTitle, imageArray, itemPrice, category)
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div>
            <div className="item_related_container">
                <div className="item_preview_container">
                    <div className="item_images">
                        <img className="featured_image" src={props.featuredImage} alt="" />
                        <div className="item_photos">
                            <img src={props.featuredProduct.imageArray[0]} alt="" onClick={() => handleFeaturedImage(props.featuredProduct.imageArray[0])}/>
                            <img src={props.featuredProduct.imageArray[1]} alt="" onClick={() => handleFeaturedImage(props.featuredProduct.imageArray[1])}/>
                            <img src={props.featuredProduct.imageArray[2]} alt="" onClick={() => handleFeaturedImage(props.featuredProduct.imageArray[2])}/> 
                        </div>
                    </div>
                    <div className="item_options">
                        <p>{props.featuredProduct.category}</p>
                        <h3>{props.featuredProduct.itemTitle}</h3>
                        <h3>${props.featuredProduct.itemPrice}</h3>
                        <AddtoBag 
                        handleAddToBag={props.handleAddToBag}
                        itemTitle={props.featuredProduct.itemTitle}  
                        itemPrice={props.featuredProduct.itemPrice}
                        itemImage={props.featuredProduct.imageArray[0]} 
                        />
                    </div>
                </div>
                <div className="related_products_container">
                    <h2 style={{textAlign: "center"}}>Related ECLIPSE Products</h2>
                    <div className="related_product" onClick={() => handleItemPreview2(props.relatedProducts[0].itemTitle, props.relatedProducts[0].itemImages, props.relatedProducts[0].itemPrice, props.relatedProducts[0].category)}>
                        <img src={props.relatedProducts[0].itemImages[0]} alt=""/>
                        <div className="related_description">
                            <p>{props.relatedProducts[0].category}</p>
                            <h4>{props.relatedProducts[0].itemTitle}</h4>
                            <h4>${props.relatedProducts[0].itemPrice}</h4>
                        </div>
                    </div>
                    <div className="related_product" onClick={() => handleItemPreview2(props.relatedProducts[1].itemTitle, props.relatedProducts[1].itemImages, props.relatedProducts[1].itemPrice, props.relatedProducts[1].category)}>
                        <img src={props.relatedProducts[1].itemImages[0]} alt=""/>
                        <div className="related_description">
                            <p>{props.relatedProducts[1].category}</p>
                            <h4>{props.relatedProducts[1].itemTitle}</h4>
                            <h4>${props.relatedProducts[1].itemPrice}</h4>
                        </div>
                    </div>
                    <div className="related_product" onClick={() => handleItemPreview2(props.relatedProducts[2].itemTitle, props.relatedProducts[2].itemImages, props.relatedProducts[2].itemPrice, props.relatedProducts[2].category)}>
                        <img src={props.relatedProducts[2].itemImages[0]} alt=""/>
                        <div className="related_description">
                            <p>{props.relatedProducts[2].category}</p>
                            <h4>{props.relatedProducts[2].itemTitle}</h4>
                            <h4>${props.relatedProducts[2].itemPrice}</h4>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    )
}