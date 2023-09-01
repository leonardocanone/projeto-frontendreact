import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './StyleApp';
import { productsList } from './Components/assents/productsList';
import { useState } from 'react';

function App() {

  const [minFilter, setMinfilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState ("")
  const [amount, setAmount] = useState(0)

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

  console.log(`${minFilter} ${maxFilter} ${searchFilter}`)

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
        />
      </AppContainer>
    </>
  );
}

export default App;
