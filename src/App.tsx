import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Plans from './pages/Plans';


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plans' element={<Plans/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
