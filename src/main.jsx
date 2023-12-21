import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={Routes} />
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>,
)
