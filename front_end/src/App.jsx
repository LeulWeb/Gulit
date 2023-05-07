import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ProductsDetailPage from './pages/ProductsDetailPage'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <>
      <section className='mx-auto' >
          <Header/>
            <main className='min-h-[80vh] container w-11/12 my-4  sm:w-8/12  mx-auto'>
              <Routes>
              <Route path='/' element={<HomePage/>} exact/>
              <Route path='/product/:id' element={<ProductsDetailPage/>}  exact/>
              <Route path='*' element={<NotFound/>}/>
              </Routes>
            </main>
          <Footer/>
      </section>
    </>
  )
}

export default App