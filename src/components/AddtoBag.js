import React from 'react'

export default function AddtoBag(props) {
    const quantity_selection = React.createRef()
    const size_selection = React.createRef()
    
    const handleAddToBag = () => {
        props.handleAddToBag(Number(quantity_selection.current.value), size_selection.current.value, props.itemTitle, props.itemPrice)
    }

    return (
        <div>
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
