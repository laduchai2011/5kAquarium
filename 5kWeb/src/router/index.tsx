import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from '@src/screen/Signin';
import Home from '@src/screen/Home';
import Order from '@src/screen/Order';
// import NotFoundPage from '@src/screen/NotFoundPage';

const router = createBrowserRouter(
    [
        { path: '/signin', element: <Signin /> },
        { path: '/', element: <Home /> },
        { path: '/order', element: <Order /> },
        // { path: '*', element: <NotFoundPage /> }, // Trang 404
    ],
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        future: { v7_startTransition: true } as any,
    }
);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
