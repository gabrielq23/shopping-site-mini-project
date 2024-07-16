import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../src/components/Home.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Cart from "../src/components/Cart.jsx";
import PageNotFound from './components/PageNotFound.jsx';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/cart" exact element={<Cart />}/>
          <Route path="/notfound" exact element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to="/notfound" replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
