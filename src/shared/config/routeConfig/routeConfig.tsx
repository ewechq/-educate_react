import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN='main',
    ABOUT='about',
    NOT_FOUND='not_found',
}
export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    // последний маршрут для редиректа
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeCogfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    // последний маршрут для редиректа
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
