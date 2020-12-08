import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom"
import React, {useState} from 'react'
//Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Men from './components/Men';
import Women from './components/Women'
import Boys from './components/Boys'
import Girls from './components/Girls'

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

  //Setting Local Storage for Number of Bag Items
  if (localStorage.getItem('bagItems') === undefined){
    localStorage.setItem('bagItems', 0)
  }
  const bagItemsStorage = localStorage.getItem('bagItems')

  const [bagItems, setBagItems] = useState(bagItemsStorage === 0 ? 0 : Number(bagItemsStorage))

  //Managing the Addition/Removal of an Order Item
  const newItemInOrder = (quantity, size, itemTitle, itemPrice) => {
    console.log(quantity)
    let order_object = {}
    order_object.quantity = quantity
    order_object.size = size
    order_object.itemTitle = itemTitle
    order_object.subtotal = quantity * itemPrice
    order_object.key = bagOrders.length + 1
    
    console.log(bagOrders, bagOrders.concat(order_object))
    setBagOrders(bagOrders.concat(order_object))
    setOrderStorage(bagOrders.concat(order_object))
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
          order.subtotal = order.subtotal + itemPrice
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





  return (
    <div className="App">
    <HashRouter basename="/">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/MEN" render={() => <Men handleAddToBag={handleAddToBag} />} />
        <Route path="/WOMEN" render={() => <Women handleAddToBag={handleAddToBag} />} />
        <Route path="/BOYS" render={() => <Boys handleAddToBag={handleAddToBag} />} />
        <Route path="/GIRLS" render={() => <Girls handleAddToBag={handleAddToBag} />} />
      </Switch>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
