import './App.css';
import { Container } from './components/styled-elements/ProjectElements';
import Catalogue from './components/sections/catalogue/Catalogue';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Table from './components/sections/cart/Table';
import Receipt from './components/sections/receipt/Receipt';

function App() {

  const [inCart, setInCart] = useState([]); 
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      <Container>
        <Catalogue setInCart={setInCart} inCart={inCart}/>
        {inCart.length > 0 &&
        <Table inCart={inCart} setShowReceipt={setShowReceipt} showReceipt={showReceipt} setInCart={setInCart}/>}
        {showReceipt && inCart.length > 0 && 
        <Receipt inCart={inCart}/>}
      </Container>
    </div>
  );
}

export default App;
