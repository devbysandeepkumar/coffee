import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import AppRoutes from './app/app.routes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRoutes}/>
)
