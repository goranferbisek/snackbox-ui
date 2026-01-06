import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Home from "./components/pages/Home.jsx"
import Login from "./components/pages/Login.jsx"
import Signup from "./components/pages/Signup.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },{
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>,
)
