import React, {useState} from 'react'
//Components
import ItemAdded from './ItemAdded'

export default function AddtoBag(props) {
    const [show, setShow] = useState(0)
    const quantity_selection = React.createRef()
    const size_selection = React.createRef()
    
    const handleAddToBag = () => {
        console.log(props.itemTitle, props.itemPrice)
        props.handleAddToBag(Number(quantity_selection.current.value), size_selection.current.value, props.itemTitle, props.itemPrice, props.itemImage)
        setShow(show + 1)
    }

    return (
        <div style={{marginTop: "10px"}}>
            <ItemAdded show={show} delay={2000} 
                />
            <div className="product_selections">
                <h3>Quantity:</h3>
                <select ref={quantity_selection}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="product_selections">
                <h3>Size:</h3>
                <select ref={size_selection}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <button className="AddtoBag" onClick={handleAddToBag}>Add to Bag</button>
        </div>
    )
}
