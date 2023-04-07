import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Products from '../pages/Products';

const MainRoute = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout></Layout>,
            children: [
                {
                    path: "/",
                    element:<Home></Home>
                },
                {
                    path: "/contactus",
                    element:<Contact></Contact>
                },
                {
                    path: "/aboutus",
                    element:<About></About>
                },
                {
                    path: "/products",
                    element:<Products></Products>
                },
            ]
        }
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default MainRoute;