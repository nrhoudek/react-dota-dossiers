import { createBrowserRouter, Navigate } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { heroListRoute } from './components/HeroList'
import { heroPostRoute } from './components/HeroPost'
import { ErrorPage } from './components/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to='heroes' />,
          },
          {
            path: 'heroes',
            children: [
              { index: true, ...heroListRoute },
              { path: ':heroId', ...heroPostRoute },
            ],
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
])
