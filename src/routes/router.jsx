import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
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