import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './index.css'

//1- configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './routes/Sobre'
import Contato from './routes/Contato'
import Home from './routes/Home'
import Editar from './routes/Editar'

// const listaTarefas = [
//   { id: 1, nome: 'Estudar HTML' },
//   { id: 2, nome: 'Estudar CSS' },
//   { id: 3, nome: 'Estudar Javascript' },
//   { id: 4, nome: 'Estudar React' },
// ]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <Editar />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
      {
        path: '/contato',
        element: <Contato />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
