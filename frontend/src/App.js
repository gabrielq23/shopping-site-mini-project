import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../src/components/Home.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Cart from "../src/components/Cart.jsx";
import PageNotFound from './components/PageNotFound.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/notfound" element={<PageNotFound/>}/>
          <Route path="*" element={<Navigate to="/notfound" replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
