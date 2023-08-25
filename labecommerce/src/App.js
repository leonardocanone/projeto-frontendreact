import './App.css';
import { Filters } from './Components/Filters/Filters';
import { Home } from './Components/ProductList/Home/Home';
import { Cart } from './Components/ShoppingCart/Cart/Cart';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './StyleApp';

function App() {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <Filters />
        <Home />
        <Cart />
      </AppContainer>
    </>
  );
}

export default App;
