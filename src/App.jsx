import React, { useState } from 'react'
import './index.css';
import Navbar from './Componets/Navbar';
import Productlist from './Componets/Productlist';
import Cart from './Componets/Cart';
export default function App() {


const [product,setProduct]=useState([
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Electronics',
    seller: 'Seller A',
    prices: 99.99,
    name: 'Smartphone'
},
{
    id: 2,
    imageUrl: ' https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Books',
    seller: 'Seller B',
    prices: 19.99,
    name: 'Novel Book'
},
{
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Clothing',
    seller: 'Seller C',
    prices: 49.99,
    name: 'Jeans'
},
{
    id: 4,
    imageUrl: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Home Appliances',
    seller: 'Seller D',
    prices: 299.99,
    name: 'Microwave Oven'
},
{
    id: 5,
    imageUrl: 'https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Beauty',
    seller: 'Seller E',
    prices: 29.99,
    name: 'Face Cream'
},
{
    id: 6,
    imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    category: 'Sports',
    seller: 'Seller F',
    prices: 59.99,
    name: 'Tennis Racket'
},
{
    id: 7,
    imageUrl: ' https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Furniture',
    seller: 'Seller G',
    prices: 199.99,
    name: 'Office Chair'
},
{
    id: 8,
    imageUrl: '  https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Toys',
    seller: 'Seller H',
    prices: 24.99,
    name: 'Action Figure'
},
{
    id: 9,
    imageUrl: ' https://images.pexels.com/photos/3423860/pexels-photo-3423860.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Groceries',
    seller: 'Seller I',
    prices: 5.99,
    name: 'Organic Apples'
},
{
    id: 10,
    imageUrl: 'https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Automotive',
    seller: 'Seller J',
    prices: 149.99,
    name: 'Car Vacuum Cleaner'
},
{
  id: 11,
  imageUrl: ' https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  category: 'Books',
  seller: 'Seller B',
  prices: 19.99,
  name: 'Novel Book'
},{
  id: 12,
  imageUrl: ' https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  category: 'Books',
  seller: 'Seller B',
  prices: 197.99,
  name: ' Book'
},

])

const [showcart,setShowcart]=useState(false)

const [cart,setCart]=useState([])
console.log(cart)

const cartHandle=(data)=>{
setCart([...cart, {...data,Q:1}])
}

const Show=(v)=>{
setShowcart(v)
}



  return (
    



      <>
      <Navbar  count={cart.length}  Show={(v)=>Show(v)}/> 
      {showcart? <Cart  cart={cart}/>
:<Productlist   product={product} cartHandle={cartHandle} />
}

      </>
  
  )
}

