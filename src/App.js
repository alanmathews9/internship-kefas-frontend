import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Table from './components/Home'



function App() {
  return (
    <Router><Navbar />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
