import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {RouterProvider, createBrowserRouter, createRouterBrowser} from 'react-router-dom'
import LoginAdmin from './pages/LoginAdmin'
import Layout from './pages/Layout';
import LoginAgent from './pages/LoginAgent'
import ErrorPage from './pages/ErrorPage';
import Admin from './pages/Admin';
import Agent from './pages/Agent';


const router = createBrowserRouter ([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {index: true, element: <LoginAdmin />},
      {path: 'loginagent', element: <LoginAgent />},
      {path: 'admin', element: <Admin />},
      {path: 'agent', element: <Agent />},
    ]
  },
  {
    path: '/admin',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {index: true, element: <Admin />},

    ]
  },
  {
    path: '/agent',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {index: true, element: <Agent />},

    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);