import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './StyleApp';
import { productsList } from './Components/assents/productsList';
import { useEffect, useState } from 'react';

function App() {

  const [minFilter, setMinfilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState ([])
  const [amount, setAmount] = useState(0)

  
  const addProductToCart = (product) => {
    // console.log(product);
      const addProduct = cart.find((item) => item.id === product.id)
      // console.log(addProduct);
      if (addProduct === undefined){
        setCart([...cart, {...product, quantity:1}])
      } else {
        const newCart = cart.map((item) => {
          if (item.id === product.id){
            return {...addProduct, quantity:addProduct.quantity + 1}
        } else {
          return item
        }
      })
      setCart(newCart)
      // console.log(newCart);
  }    
}

  const removeProductToCart = (product) => {
    const removeProduct = cart.find((item) => item.id === product.id)
      if (removeProduct.quantity > 1){
    const newCart = cart.map((item) => {
      if (item.id === product.id){
        return {...removeProduct, quantity:removeProduct.quantity - 1}
    } else {
      return item
    }
  })
    setCart(newCart)

    } else {
    const newCart = cart.filter((item) => {
      return item.id !== product.id && product.quantity === 1
    })
    localStorage.removeItem("cartSaved")
    setCart(newCart)
    }
    
    // if (product.quantity === 1){
    //   localStorage.removeItem("cartSaved")
    //   setCart([]) 
    // }
  }

  useEffect(() => {
    if(cart.length > 0){
    localStorage.setItem("cartSaved", JSON.stringify(cart))
    }
  }, [cart])


  useEffect(() => {
    const cartSaved = localStorage.getItem("cartSaved")
    if (cartSaved){
    setCart(JSON.parse(cartSaved))
    }
  }, [])

  
  const cleanCart = () => {
    localStorage.removeItem("cartSaved")
    setCart([])
  }

  // const filtrarValorMinimo = (event) => {
  //   setMinfilter(event.target.value)
  // }

  const filtrarValorMinimo = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && parseInt(inputValue) >= 0)) {
      setMinfilter(inputValue === '' ? '' : parseInt(inputValue));
    }
    // const inputValue = (event.target.value)
    // if (!isNaN(inputValue)) {
    //   const newValue = inputValue === "" ? "" : Math.max(0, parseInt(inputValue, 10));
    //   setMinfilter(newValue);
    // }
  }
  
  // const filtrarValorMaximo = (event) => {
  //   setMaxFilter(event.target.value)
  // }

  const filtrarValorMaximo = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '' || (!isNaN(inputValue) && parseInt(inputValue) >= 0)) {
      setMaxFilter(inputValue === '' ? '' : parseInt(inputValue));
    }
  }

  const filtrarPorNome = (event) => {
    setSearchFilter(event.target.value)
  }

  // console.log(`${minFilter} ${maxFilter} ${searchFilter}`)

  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <Filters
        minFilter={minFilter}
        setMinfilter={setMinfilter}
        filtrarValorMinimo={filtrarValorMinimo}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        filtrarValorMaximo={filtrarValorMaximo}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        filtrarPorNome={filtrarPorNome}
        />
        <Home 
        products={productsList}
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        addProductToCart={addProductToCart}
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        />
        {/* <Home 
        produto1={productsList[0]}
        produto2={productsList[1]}
        produto3={productsList[2]}
        produto4={productsList[3]}
        /> */}
        <Cart
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        removeProductToCart={removeProductToCart}
        cleanCart={cleanCart}
        />
      </AppContainer>
    </>
  );
}

export default App;
