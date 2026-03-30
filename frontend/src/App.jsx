import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import CategoriesPage from './pages/CategoriesPage'
import OrdersPage from './pages/OrdersPage'
import WishlistPage from './pages/WishlistPage'
import ContactUs from './pages/ContactUs'
import CartPage from './pages/CartPage'

import LoginSignup from './pages/LoginSignup'
import {
  GiftCards,
  Coupons,
  SavedCards,
  SavedAddresses
} from './pages/ProfilePages'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        
        {/* Shopping Routes */}
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/deals" element={<CategoryPage />} />
        <Route path="/bestsellers" element={<CategoryPage />} />
        <Route path="/sale/:category" element={<CategoryPage />} />

        {/* Profile Routes */}
        <Route path="/login" element={<LoginSignup />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/orders" element={<OrdersPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
        <Route path="/giftcards" element={<GiftCards />}/>
        <Route path="/contactus" element={<ContactUs />}/>
       
        <Route path="/coupons" element={<Coupons />}/>
        <Route path="/savedcards" element={<SavedCards />}/>
        <Route path="/savedaddresses" element={<SavedAddresses />}/>

        <Route path='*' element={<NotFound />}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

