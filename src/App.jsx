import { Route, Routes } from "react-router-dom";
import HomePag from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import Navbar from "./componants/navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";




function App() {

  const {theme} = useSelector((store) => store.global)

  useEffect(() => {
     document.body.classList.toggle('dark')
  },[theme])

  return (
<>
<Navbar/>
<Routes>
  <Route path="/" element={<HomePag/>}/>
  <Route path="/cart" element={<CartPage/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/contact" element={<ContactPage/>}/>
</Routes>

</>
  )
}

export default App
