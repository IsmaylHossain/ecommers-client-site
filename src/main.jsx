import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Root from './Layouts/Root';
import AddProduct from './Pages/AddProduct/AddProduct';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyCart from './Pages/MyCart/MyCart';
import Products from './Pages/Products/Products';
import ViewDetails from './Pages/Products/ViewDetails';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/brands.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path:'/myCart',
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute>,
        // loader: ()=> fetch('https://classy-shop-server-atu86hzmb-ahnaf-ahmeds-projects.vercel.app/cart')
      },
      {
        path: '/products/:brand',
        element: <PrivateRoute>
          <Products></Products>
        </PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/product'),
      },
      {
        path: '/details/:_id',
        element:<PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/product')
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
