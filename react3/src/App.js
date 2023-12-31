import React from 'react'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import AllRoutes from './routes/AllRoutes'


const App = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight : "650px"}}>
          <AllRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App