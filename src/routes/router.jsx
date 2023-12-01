import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import ErrorPage from "../pages/404/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about-us',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
        ]
}
])

export default router;