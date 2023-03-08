import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Navbar />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
