import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import AboutePage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import Navbar from './components/navbar/Navbar'

function App() {


  return (
  <>
  <Navbar />
  <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/about' element={<AboutePage/>} />
      <Route path='/contact' element={<ContactPage/>} />
    </Routes>
  
  </>
  )
}

export default App
