import './App.css';
import {HashRouter, Switch, Route} from "react-router-dom"
import React, {useState} from 'react'
//Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import Men from './components/Men';
import Women from './components/Women'
import Cart from './components/Bag'
import ItemPreview from './components/ItemPreview'
//IMPORT Related Products Info
import {Men_Products} from './components/MenData'
import { Women_Products } from './components/WomenData';

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
  const newItemInOrder = (quantity, size, itemTitle, itemPrice, itemImage) => {
    let order_object = {}
    order_object.quantity = quantity
    order_object.size = size
    order_object.itemTitle = itemTitle
    order_object.itemPrice = itemPrice
    order_object.subtotal = quantity * itemPrice
    order_object.itemImage = itemImage
    order_object.key = bagOrders.length + 1
    setBagOrders(bagOrders.concat([order_object]))
    setOrderStorage(bagOrders.concat([order_object]))
  }
  
  const handleAddToBag = (quantity, size, itemTitle, itemPrice, itemImage) => {
    setBagItems(bagItems + quantity)
    localStorage.setItem('bagItems', (bagItems + quantity))
    if (bagOrders.length === 0) {
      newItemInOrder(quantity, size, itemTitle, itemPrice, itemImage)
    } else{
      let products_in_bag = []
      bagOrders.forEach(order => {
        products_in_bag.push(order.itemImage)
      })
      bagOrders.forEach(order => {
        if (products_in_bag.includes(itemImage) && order.itemImage === itemImage && order.size === size){
          order.quantity = order.quantity + quantity
          order.subtotal = order.subtotal + (itemPrice * quantity)
          setBagOrders(bagOrders)
          setOrderStorage(bagOrders)
        } else if (!products_in_bag.includes(itemImage) || products_in_bag.includes(itemImage) && order.itemImage === itemImage && order.size !== size){
          newItemInOrder(quantity, size, itemTitle, itemPrice, itemImage)
        }
      })
    }
  }

  const handleRemoveFromBag = (orders, itemImage, size, quantity) => {
    let order_index = orders.findIndex(order => (order.itemImage === itemImage && order.size === size))
    let new_orders = orders.filter((order, idx) => idx !== order_index)
    setBagOrders(new_orders)
    setOrderStorage(new_orders)
    setBagItems(bagItems - quantity)
    localStorage.setItem('bagItems', (bagItems - quantity))
  }

  //Setting Local Storage for Number of Bag Items
  if (localStorage.getItem('bagItems') === undefined){
    localStorage.setItem('bagItems', 0)
  }
  const bagItemsStorage = localStorage.getItem('bagItems')

  const [bagItems, setBagItems] = useState(bagItemsStorage === 0 ? 0 : Number(bagItemsStorage))




  // Adding/Subtracting from the Number of Bag Items displayed in Navigation

  const handleAddQuantity = (orders, itemImage, size, quantity, itemPrice) => {
    let order_index = orders.findIndex(order => (order.itemImage === itemImage && order.size === size))
    orders[order_index].quantity = quantity + 1
    orders[order_index].subtotal = itemPrice * (quantity + 1)
    setBagOrders(orders)
    setOrderStorage(orders)
    setBagItems(bagItems + 1)
    localStorage.setItem('bagItems', (bagItems + 1))
  }

  const handleSubtractQuantity = (orders, itemImage, size, quantity, itemPrice) => {
    let order_index = orders.findIndex(order => (order.itemImage === itemImage && order.size === size))
    if(quantity !== 0){
      orders[order_index].quantity = quantity - 1
      orders[order_index].subtotal = itemPrice * (quantity - 1)
      setBagItems(bagItems - 1)
      localStorage.setItem('bagItems', (bagItems - 1))
    }
    setBagOrders(orders)
    setOrderStorage(orders)
  }

  //Local Storage for User's Product Selection they'd like to preview, contains all product details

  const setFeaturedProductStorage = (featuredProduct) => {
    localStorage.setItem('featuredProduct', JSON.stringify(featuredProduct))
  }
  
  const readFeaturedProductStorage = () => {
    return JSON.parse(localStorage.getItem('featuredProduct'))
  }

  if (localStorage.getItem('featuredProduct') === null){
    setFeaturedProductStorage({})
  }

  const [featuredProduct, setFeaturedProduct] = useState(readFeaturedProductStorage() != null ? readFeaturedProductStorage() : "")

  //Local Storage for User's selected image on the item preview of the product

  const setFeaturedImageStorage = (featuredImage) => {
    localStorage.setItem('featuredImage', JSON.stringify(featuredImage))
  }
  
  const readFeaturedImageStorage = () => {
    return JSON.parse(localStorage.getItem('featuredImage'))
  }

  if (localStorage.getItem('featuredImage') === null){
    setFeaturedProductStorage("")
  }

  const [featuredImage, setFeaturedImage] = useState(readFeaturedImageStorage() != null ? featuredProduct.imageArray[0] : "")

  //Handling the data needed for user's selected product to be previewed before adding to cart
  const handleItemPreview = (itemTitle, imageArray, itemPrice, category) => {
    let product = {
      itemTitle: itemTitle,
      imageArray: imageArray,
      itemPrice: itemPrice,
      category: category
    }
    setFeaturedProduct(product)
    setFeaturedProductStorage(product)
    window.scrollTo({
        top: 0
    })
    handleFeaturedImage(imageArray[0])
    handleRelatedProducts(product)
  }

  //Handling user selecting another product image in preview
  const handleFeaturedImage = (src) => {
    setFeaturedImage(src)
    setFeaturedImageStorage(src)
  }


  //Related Products Local Storage (displaying related products images/details next to featured product user is previewing)

  const setRelatedProductsStorage = (relatedProducts) => {
    localStorage.setItem('relatedProducts', JSON.stringify(relatedProducts))
  }
  
  const readRelatedProductsStorage = () => {
    return JSON.parse(localStorage.getItem('relatedProducts'))
  }

  if (localStorage.getItem('relatedProducts') === null){
    setRelatedProductsStorage([])
  }
  //Random Generation of Related Products to the One the User is Currently Viewing
  const [relatedProducts, setRelatedProducts] = useState(readRelatedProductsStorage() != null ? readRelatedProductsStorage() : [])
  let featured_index

  const handleRelatedProducts = (product) => {
    let productCategoryData = []
    if (product.category === "MEN"){
      productCategoryData = Men_Products
    } else{
      productCategoryData = Women_Products
    }
    let newRelated = []
    let new_product_list = productCategoryData.filter(product_obj => product_obj.itemTitle !== product.itemTitle)
    let related_product1 = new_product_list[Math.floor(Math.random() * new_product_list.length)]
    newRelated.push(related_product1)
    new_product_list = new_product_list.filter(product_obj => product_obj.itemTitle !== related_product1.itemTitle)
    let related_product2 = new_product_list[Math.floor(Math.random() * new_product_list.length)]
    newRelated.push(related_product2)
    new_product_list = new_product_list.filter(product_obj => product_obj.itemTitle !== related_product2.itemTitle)
    let related_product3 = new_product_list[Math.floor(Math.random() * new_product_list.length)]
    newRelated.push(related_product3)
    setRelatedProducts(newRelated)
    setRelatedProductsStorage(newRelated)  
  }


  //Menu slider for smaller devices
  const [menuSlider, setMenuSlider] = useState(false)
  const [X, setX] = useState(0)

  const handleMenuSlider = (message) => {
    setSearchOpen(false)
    if (message === "logo_click" || message === "bag_click"){
        window.scrollTo({
          top: 0
        })
        setMenuSlider(false)
    } else {
      setMenuSlider(!menuSlider)
    }
    if (!menuSlider){
        setX(0)
    } else{
        setTimeout(function(){setX(0)}, 770)
    }
  }

  const handleSearchCloseDesktop = () => {
    setSearchOpen(false)
  }

  const handleClickOutsideSearch = () => {
    setSearchOpen(false)
  }

  const handleMenuSwitch = () => {
      if (X == 0){
          setX(-100)
      } else{
          setX(0)
      }
  }


  //Search Toggle
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearch = () => {
    if (menuSlider){
      setMenuSlider(false)
    }
    setSearchOpen(!searchOpen)
  }


  return (
    <div className="App">
    <HashRouter basename="/">
      <Navigation 
      bagItems={bagItems}
      searchOpen={searchOpen}
      menuSlider={menuSlider}
      X={X}
      handleMenuSwitch={handleMenuSwitch}
      handleMenuSlider={handleMenuSlider}
      handleItemPreview={handleItemPreview}
      handleSearch={handleSearch}
      handleClickOutsideSearch={handleClickOutsideSearch}
      handleSearchCloseDesktop={handleSearchCloseDesktop}
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
        featuredProduct={featuredProduct}
        featuredImage={featuredImage}
        relatedProducts={relatedProducts}
        handleItemPreview={handleItemPreview}
        handleFeaturedImage={handleFeaturedImage}
        handleAddToBag={handleAddToBag} />} />
        <Route path="/BAG" render={() => <Cart 
        bagOrders={bagOrders}
        bagItems={bagItems}
        handleRemoveFromBag={handleRemoveFromBag}
        handleAddQuantity={handleAddQuantity}
        handleSubtractQuantity={handleSubtractQuantity} />} />
      </Switch>
      <Footer />
    </HashRouter>
    </div>
  );
}

export default App;
