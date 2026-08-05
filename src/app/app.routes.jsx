import { createBrowserRouter } from "react-router"
import App from "./App"
import Recipe from "./features/coffee/pages/Recipe"
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe/:id?",
    element: <Recipe />,
  },
],{
  basename: import.meta.env.BASE_URL,
})

export default AppRoutes
