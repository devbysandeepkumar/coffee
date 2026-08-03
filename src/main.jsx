import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { RouterProvider } from 'react-router'
import AppRoutes from './app/app.routes.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRoutes}>
    <App />
</RouterProvider>
)
