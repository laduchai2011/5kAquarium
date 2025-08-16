import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from '@src/screen/Signin';
import Home from '@src/screen/Home';
import NotFoundPage from '@src/screen/NotFoundPage';
import Product from '@src/screen/Product';
import MyOrder from '@src/screen/MyOrder';
import Profile from '@src/screen/Profile';

const router = createBrowserRouter(
    [
        { path: '/signin', element: <Signin /> },
        { path: '/', element: <Home /> },
        { path: '/product', element: <Product /> },
        { path: '/myOrder', element: <MyOrder /> },
        { path: '/profile', element: <Profile /> },
        { path: '*', element: <NotFoundPage /> }, // Trang 404
    ],
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        future: { v7_startTransition: true } as any,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
