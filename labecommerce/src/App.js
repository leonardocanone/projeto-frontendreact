import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './StyleApp';
import { productsList } from './Components/assents/productsList';

function App() {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <Filters />
        <Home
        products={productsList}
        />
        <Cart />
      </AppContainer>
    </>
  );
}

export default App;
