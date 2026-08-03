import { createBrowserRouter } from "react-router"
import Home from "./features/auth/pages/Home"
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

export default AppRoutes
