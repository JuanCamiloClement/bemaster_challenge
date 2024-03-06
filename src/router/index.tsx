import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout'
import Login from '../components/Login';
import Home from '../components/Home';
import ContentCategory from '../components/contentCategory';
import ContentDetails from '../components/contentDetails';
import PrivateRoute from '../components/PrivateRoute';
import IfNotLogged from '../components/IfNotLogged';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element:
          <IfNotLogged>
            <Login />
          </IfNotLogged>
      },
      {
        path: "/home",
        element:
          <PrivateRoute>
            <Home />
          </PrivateRoute>
      },
      {
        path: "/content/:category",
        element:
          <PrivateRoute>
            <ContentCategory />
          </PrivateRoute>
      },
      {
        path: "/content/:category/:filename",
        element:
          <PrivateRoute>
            <ContentDetails />
          </PrivateRoute>
      }
    ]
  }
]);

export default router;