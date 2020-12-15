import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom' 
//IMPORT Related Products Info
import {Men_Products} from './MenData'
import {Women_Products} from './WomenData';


export default function Search(props) { 
    const user_input = React.createRef()
    const all_products = Men_Products.concat(Women_Products)

    

    //Setting Local Storage for Orders (Array of Order Objects)
    // const setSuggestionsStorage = (suggestions) => {
    //     localStorage.setItem('suggestions', JSON.stringify(suggestions))
    // }
    
    // const readSuggestionsStorage = () => {
    //     return JSON.parse(localStorage.getItem('suggestions'))
    // }

    // if (localStorage.getItem('suggestions') === null ){
    //     setSuggestionsStorage([])
    // } 

    // const [suggestions, setSuggestions] = useState(readSuggestionsStorage() != null ? readSuggestionsStorage() : [] ) 

    const [suggestions, setSuggestions] = useState([])
    
    const UserTyping = () => {
        let new_suggestions = []
        if (user_input.current.value.length >= 2){
            all_products.forEach(product => {
                if (product.itemTitle.toLowerCase().includes(user_input.current.value.toLowerCase())){
                    let product_object = {}
                    product_object.itemTitle = product.itemTitle
                    product_object.itemPrice = product.itemPrice
                    product_object.category = product.category
                    product_object.itemImages = product.itemImages
                    product_object.key = suggestions.length + 1
                    new_suggestions.push(product_object)
                }
            })
        }
        setSuggestions(new_suggestions)
    }

    const handleItemPreview2 = (itemTitle, imageArray, itemPrice, category) => {
        props.handleItemPreview(itemTitle, imageArray, itemPrice, category)
        window.scrollTo({
            top: 0
        })
        props.handleSearch()
    }

    return (
        <div className={props.searchOpen ? "search_container active" : "search_container"}>
            <input ref={user_input} id="search_input" type="text" placeholder="Search ECLIPSE Products..." onKeyUp={UserTyping} autoComplete="off"/>
            {suggestions.length >= 1 ? 
            <div className="suggestions_container">
            {suggestions.map(suggestion => {
                    return (
                        <div className="suggestion_div" onClick={() => handleItemPreview2(suggestion.itemTitle, suggestion.itemImages, suggestion.itemPrice, suggestion.category)}>
                            <Link to="/ITEM" className="suggestion_link">
                            <div className="suggestion" >
                                <img src={suggestion.itemImages[0]} alt=""/>
                                <div className="suggestion_description">
                                    <p>{suggestion.category}</p>
                                    <h4>{suggestion.itemTitle}</h4>
                                    <h4>(${suggestion.itemPrice})</h4>
                                </div>
                            </div>          
                            </Link>
                        </div>             
                        )
                    })}
            </div> : ""
            }
        </div>
    )
}
