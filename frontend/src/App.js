import Navbar from './components/Navbar'
import './App.css';
import Home from './pages';
import About from './pages/about';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    
    </>
    
    );

}


export default App;
