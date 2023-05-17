import { Suspense, lazy } from 'react';
import Loader from '../components/UI/Loader';
import { RouteObject, useRoutes } from 'react-router-dom';
import App from '../App';
import { AccountStatusValidator } from '../HOCS/AccountStatusValidator';
import { ROUTES } from '../shared/routeConstants';

const SingInPage = lazy(() => import('../pages/SingIn'));
const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const EditorPage = lazy(() => import('../pages/EditorPage'));
const NeverPage = lazy(() => import('../pages/NeverPage'));

const suspense = (page: React.ReactNode, fallback = <Loader />) => (
  <Suspense fallback={fallback}>{page}</Suspense>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: suspense(<WelcomePage />),
      },
      {
        path: 'registration',
        element: (
          <AccountStatusValidator
            protectedPage={suspense(<SingInPage />)}
            isRegistration
            fallBackRoute={ROUTES.editorPage}
          />
        ),
      },
      {
        path: 'editor',
        element: (
          <AccountStatusValidator
            protectedPage={suspense(<EditorPage />)}
            fallBackRoute={ROUTES.singInPage}
          />
        ),
      },
      { path: '*', element: suspense(<NeverPage />) },
    ],
  },
];

export const AppRouter = () => useRoutes(routes);
