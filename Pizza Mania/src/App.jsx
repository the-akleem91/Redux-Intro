import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./ui/Home"
import Menu, { loader, loader as menuLoader } from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder, { action as CreateOrderAction } from "./features/order/CreateOrder"
import Order, { loader as loaderOrder } from "./features/order/Order"
import AppLayout from "./ui/AppLayout"
import { Children } from "react"
import Error from "./ui/Error"


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{
      path: "/",
      element: <Home />

    },

    {
      path: "/menu",
      element: <Menu />,
      loader: menuLoader,
      errorElement: <Error />,
    },

    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/order/new", element: <CreateOrder />, action: CreateOrderAction,
    },
    {
      path: "/order/:orderId", element: <Order />, loader: loaderOrder, errorElement: <Error />,
    }]
  }

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
