import { createBrowserRouter } from "react-router"
import App from "./App"
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
],{
  basename: '/coffee', // Must match your repository name!
})

export default AppRoutes
