import HomePage from '@/pages//HomePage';
import LandingPage from '@/pages//LandingPage';
import NotFoundPage from '@/pages//NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/home',
            element: <HomePage />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ],
    { basename: '/issue-table' }
);

export default router;
