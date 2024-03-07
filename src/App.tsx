import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Plans from './pages/Plans';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
