import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import Landing from "./Pages/Landing"
import About from './Pages/About';
import Products from "./Pages/Products"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Basket from './Pages/Basket';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname != '/login' && location.pathname != '/register' && <Navbar />}
      <Routes>

        <Route exact path='/' element={<Landing />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/basket' element={<Basket />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/prodetails/:id' element={<ProductDetails />} />



      </Routes>
      {location.pathname != '/login' && location.pathname != '/register' && <Footer />}
    
    </div>
  );
}

export default App;

