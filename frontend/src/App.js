import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Courses from './components/Courses';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';

const App = () => {
    return (
        <div className='bg-white max-w-screen min-h-screen dark:bg-slate-800'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/courses",
                element: <Courses />
            },
        ],
    },
    {
        path: "/register",
        element: <Register />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);