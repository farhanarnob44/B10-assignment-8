import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Root from './component/Root/Root.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import Details from './component/Details/Details.jsx';
import Dashboard from './component/Dashboard/Dashboard.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './component/About/About.jsx';
import Statistics from './component/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     
      {
        path: '/',
        element: <Home></Home>
      },
   {
    path: 'gadgets/:product_id',
    element: <Details  ></Details>,
    loader: ()=> fetch('../gadgetsData.json')
   },
{
  path:'dashboard',
  element: <Dashboard></Dashboard>,
  loader: ()=>fetch('/gadgetsData.json')
},

{
path: 'about',
element: <About></About>

},
{
  path: 'statistics',
  element: <Statistics></Statistics>
}

     
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
