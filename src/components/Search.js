import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom' 
//IMPORT Related Products Info
import {Men_Products} from './MenData'
import {Women_Products} from './WomenData';


export default function Search(props) { 
    const user_input = React.createRef()
    const all_products = Men_Products.concat(Women_Products)

    const [suggestions, setSuggestions] = useState([])
    
    const UserTyping = () => {
        let new_suggestions = []
        setSuggestions([])
        if (user_input.current.value.length >= 2){
            all_products.forEach(product => {
                if (product.itemTitle.toLowerCase().startsWith(user_input.current.value.toLowerCase()) || product.itemTitle.toLowerCase().includes(` ${user_input.current.value.toLowerCase()}`)){
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
        if (new_suggestions.length >= 1){
            setSuggestions(new_suggestions)
        } else if (new_suggestions.length == 0 && user_input.current.value.length >= 2){
            setSuggestions(<h2 className="no_results_found">No Search Results Found for "{user_input.current.value}"</h2>)
        }
    }

    const handleItemPreview2 = (itemTitle, imageArray, itemPrice, category) => {
        props.handleItemPreview(itemTitle, imageArray, itemPrice, category)
        window.scrollTo({
            top: 0
        })
        props.handleSearch()
    }

    const node = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!node.current.contains(event.target) && event.target.id !== "search") {
                props.handleClickOutsideSearch()
            }
        }
        document.addEventListener('mousedown', handler)
        let search_container = document.querySelector('.search_container')
        let search_height = search_container.offsetHeight
        let search_top_position = `${-search_height - 65}px`
        search_container.style.top = search_top_position
        if (props.searchOpen){
            search_container.style.top = "65px"
        }

        return () => {
            document.removeEventListener('mousedown', handler)
        }

    });
    

    return (
        <div ref={node} className={props.searchOpen ? "search_container active" : "search_container"}>
            <input ref={user_input} id="search_input" type="text" placeholder="Search ECLIPSE Products..." onKeyUp={UserTyping} autoComplete="off"/>
            {suggestions.length >= 1 && Array.isArray(suggestions) ? 
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
                                    <h4>(${suggestion.itemPrice.toFixed(2)})</h4>
                                </div>
                            </div>          
                            </Link>
                        </div>             
                        )
                    })}
            </div> : suggestions.type == "h2" ? suggestions : ""
            }
        </div>
    )
}
