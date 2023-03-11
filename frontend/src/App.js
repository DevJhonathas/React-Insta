import './App.css';

// router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// page
import Home from './pages/Home/Home.js';
import Login from './pages/Auth/Login.js';
import Register from './pages/Auth/Register.js';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
