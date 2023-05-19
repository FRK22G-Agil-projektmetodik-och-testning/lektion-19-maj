import './App.css'
import { useState } from 'react'

import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {
  const[products, setProducts] = useState([
    { id: 1, title: 'A Sign of Four', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum', price: 200 },
    { id: 2, title: 'A Study in Scarlet', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum', price: 200 },
    { id: 3, title: 'Baskervilles Hound', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum', price: 200 },
    { id: 4, title: 'The Adventures of Sherlock Holmes', author: 'Sir Arthur Conan Doyle', text: 'Lorem ipsum', price: 150 },
  ]);
  const [cart, setCart] = useState([]) // Vår varukorgen där vi kan spara produkter när man trycker på "lägg till i varukorgen"

  const productComponents = products.map((product) => {
    return <Product product={ product } key={ product.id } addToCart={ addToCart } />
  });

  function addToCart(product) { // Funktion som lägger till en produkt i vår varukorgen
    const tempCart = [...cart];
    tempCart.push(product); // Här kan man välja vad man vill spara, jag sparar bara titeln i detta exemplet

    setCart(tempCart);
  }

  function removeFromCart(id) {
    console.log(id);
    const tempCart = [...cart];
    const newCart = tempCart.filter((product) => {
      if (product.id !== id) {
        return product;
      }
    })

    setCart(newCart);
  }

  console.log(productComponents);
  return (
    <div className="App">
      <Header cart={ cart } removeFromCart={ removeFromCart } /> { /* Skickar vidare cart till Header */}
      <section className='products'>
        { productComponents }
      </section>
    </div>
  )
}

export default App
