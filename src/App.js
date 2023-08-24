import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const nome = 'Wisner'
  const ano = 2023
  return (
    <div style={{ height: '100vh' }}>
      <header>
        <Navbar />
      </header>
      <main className='h-75 overflow-y-auto'>
        <Outlet />
      </main>
      <Footer nome={nome} ano={ano} />
    </div>
  )
}

export default App
