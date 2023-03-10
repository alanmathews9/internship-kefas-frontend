import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Signup from './components/Signup'


function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
