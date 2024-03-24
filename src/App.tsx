import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Plans from './pages/Plans';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Meals from './pages/Meals';
import Error404 from './pages/Error404';
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';


function App() {
  const { userlogin } = useSelector((state: any) => state);


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/meals' element={<Meals/>}/>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='*' element={<Error404/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
