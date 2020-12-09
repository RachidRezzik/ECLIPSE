import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom"
import React, {useState} from 'react'
//Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Men from './components/Men';
import Women from './components/Women'
import Cart from './components/Cart'
import ItemPreview from './components/ItemPreview'

function App() {
  //Setting Local Storage for Orders (Array of Order Objects)
  const setOrderStorage = (bagOrders) => {
    localStorage.setItem('bagOrders', JSON.stringify(bagOrders))
  }
  
  const readOrderStorage = () => {
    return JSON.parse(localStorage.getItem('bagOrders'))
  }

  if (localStorage.getItem('bagOrders') === null){
    setOrderStorage([])
  }
  const [bagOrders, setBagOrders] = useState(readOrderStorage() != null ? readOrderStorage() : [] ) 


  //Managing the Addition/Removal of an Order Item
  const newItemInOrder = (quantity, size, itemTitle, itemPrice) => {
    let order_object = {}
    order_object.quantity = quantity
    order_object.size = size
    order_object.itemTitle = itemTitle
    order_object.subtotal = quantity * itemPrice
    order_object.key = bagOrders.length + 1
    setBagOrders(bagOrders.concat(order_object))
    setOrderStorage(bagOrders.concat(order_object))
    console.log(bagOrders)
  }

  const handleAddToBag = (quantity, size, itemTitle, itemPrice) => {
    setBagItems(bagItems + quantity)
    localStorage.setItem('bagItems', (bagItems + quantity))
    if (bagOrders.length === 0) {
      console.log('new_item')
      newItemInOrder(quantity, size, itemTitle, itemPrice)
    } else{
      let products_in_bag = []
      bagOrders.forEach(order => {
        products_in_bag.push(order.itemTitle)
      })
      bagOrders.forEach(order => {
        if (products_in_bag.includes(itemTitle) && order.itemTitle === itemTitle){
          order.quantity = order.quantity + quantity
          order.subtotal = order.subtotal + (itemPrice * quantity)
          setBagOrders(bagOrders)
          setOrderStorage(bagOrders)
        } else if (products_in_bag.includes(itemTitle === false)){
          newItemInOrder(quantity, size, itemTitle, itemPrice)
        }
      })
    }
  }

  // const handleRemoveFromBag = (quantity, itemTitle, orders) => {
  //   let order_index = orders.findIndex(order => order.itemTitle === itemTitle)
  //   let new_orders = orders.filter((order, idx) => idx !== order_index)
  //   setBagOrders(new_orders)
  //   setOrderStorage(new_orders)
  //   setBagItems(bagItems - quantity)
  //   localStorage.setItem('bagItems', (bagItems - quantity))
  // }

  //Setting Local Storage for Number of Bag Items
  if (localStorage.getItem('bagItems') === undefined){
    localStorage.setItem('bagItems', 0)
  }
  const bagItemsStorage = localStorage.getItem('bagItems')

  const [bagItems, setBagItems] = useState(bagItemsStorage === 0 ? 0 : Number(bagItemsStorage))

  //Adding/Subtracting from the Number of Bag Items displayed in Navigation

  // const handleAddQuantity = (item_title, orders, item_quantity) => {
  //   let item_price = 9.99
  //   if (item_title === "Texas Pecan"){
  //     item_price = 7.99
  //   } 
  //   let order_index = orders.findIndex(order => order.item_title === item_title)
  //   orders[order_index].item_quantity = item_quantity + 1
  //   orders[order_index].subtotal = item_price * (item_quantity + 1)
  //   setCartOrders(orders)
  //   setOrderStorage(orders)
  //   setCartItems(cartItems + 1)
  //   localStorage.setItem('cartItems', (cartItems + 1))
  // }

  // const handleSubtractQuantity = (item_title, orders, item_quantity) => {
  //   let item_price = 9.99
  //   if (item_title === "Texas Pecan"){
  //     item_price = 7.99
  //   } 
  //   let order_index = orders.findIndex(order => order.item_title === item_title)
  //   if(item_quantity !== 0){
  //     orders[order_index].item_quantity = item_quantity - 1
  //     orders[order_index].subtotal = item_price * (item_quantity - 1)
  //     setCartItems(cartItems - 1)
  //     localStorage.setItem('cartItems', (cartItems - 1))
  //   }
  //   setCartOrders(orders)
  //   setOrderStorage(orders)
  // }

  //Handling the Data Associated With Product User Wants to Preview/Add to Bag

  const [imageArray, setImageArray] = useState([])
  const [itemTitle, setItemTitle] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [category, setCategory] = useState("")

  const handleItemPreview = (itemTitle, imageArray, itemPrice, category) => {
    console.log(category)
    setItemTitle(itemTitle)
    setImageArray(imageArray)
    setItemPrice(itemPrice)
    setCategory(category)
  }



  return (
    <div className="App">
    <HashRouter basename="/">
      <Navigation 
      bagItems={bagItems}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MEN" render={() => <Men 
        handleAddToBag={handleAddToBag}
        handleItemPreview={handleItemPreview} />} />
        <Route path="/WOMEN" render={() => <Women 
        handleAddToBag={handleAddToBag}
        handleItemPreview={handleItemPreview} />} />
        <Route path="/Item" render={() => <ItemPreview 
        itemTitle={itemTitle}
        itemPrice={itemPrice}
        imageArray={imageArray}
        category={category}
        handleAddToBag={handleAddToBag} />} />
        <Route path="/WOMEN" render={() => <Cart 
        bagOrders={bagOrders}
        bagItems={bagItems} />} />
      </Switch>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
