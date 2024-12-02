import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home"; 
import ErrorPage from "../pages/Error";
import Invoice from "../pages/Invoice";
import UserPage from "../pages/Users";
import OrdersPage from "../pages/Orders";
import welcome from "../pages/Welcome";

export const Routes = createBrowserRouter([
    {
        path:'/',
        Component:App,
        children:[
            {
                path:'/',
                Component: HomePage
            },
            {
                path: '/invoice',
                Component: Invoice
            },
            {
                path: '/user',
                Component: UserPage
            },
            {
                path: '/orders',
                Component: OrdersPage
            }
            
            ,{
                path:'*',
                Component: ErrorPage
            }
        ]
    },
    {
        path: '/welcome',
        Component: welcome,
        
    },
    // {
    //     path: '/login',
    //     Component: Login,
        
    // },
    // {
    //     path: '/register',
    //     Component: Register
    // }
])
 