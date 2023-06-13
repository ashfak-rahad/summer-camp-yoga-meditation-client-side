import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'


import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { AuthProvider } from './context/AuthProvider'
import Routes from './routes/Routes'
const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes}/>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
