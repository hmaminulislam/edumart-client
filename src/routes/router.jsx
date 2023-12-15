import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";
import Shop from "../pages/shop/Shop";
import ErrorPage from "../pages/404/ErrorPage";
import Faq from "../pages/faq/Faq";
import AllEvents from "../pages/our-events/OurEvents";
import OurInstructors from "../pages/our-instructors/OurInstructors";
import Courses from "../pages/courses/Courses";
import EventDetails from "../pages/event-details/EventDetails";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog-details/BlogDetails";
import CourseDetails from "../pages/course-details/CourseDetails";
import ProductDetails from "../pages/product-details/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:name",
        element: <ProductDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/our-events",
        element: <AllEvents />,
      },
      {
        path: "/our-instructors",
        element: <OurInstructors />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/our-events/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/event/${params.id}`);
        },
        element: <EventDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:name",
        element: <BlogDetails />,
      },
      {
        path: "/course/:name",
        element: <CourseDetails />,
      },
    ],
  },
]);

export default router;