import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Home from "./components/pages/Home.jsx"
import Login from "./components/pages/Login.jsx"
import Signup from "./components/pages/Signup.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import {merchantsLoader} from "./components/pages/Home.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>} loader={merchantsLoader} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>,
)
