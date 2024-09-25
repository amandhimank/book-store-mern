import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Courses from './components/Courses';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='bg-white max-w-screen min-h-screen'>
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
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);