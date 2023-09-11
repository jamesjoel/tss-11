
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

import Navbar from './components/shared/Navbar'

const App = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path='contact' element={<Contact />} />
        </Routes>



    </>
  )
}

export default App