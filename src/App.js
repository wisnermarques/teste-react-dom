import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
