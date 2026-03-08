import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import {ListStudent} from '../pages/ListStudent'

export const routes = createBrowserRouter([
  {
    id: 'home',
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/home',
        Component: Home,
      },
    ],
  },
  {
    id: 'public',
    Component: Layout,
    children: [
      {
        path: '/dashboard',
        Component: Dashboard,
      },
          {
        path: '/ListStudent',
        Component:ListStudent,
      },
    ],
  },
]);
