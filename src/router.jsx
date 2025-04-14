import { createBrowserRouter, Navigate, useRouteError } from 'react-router'
import { RootLayout } from './layouts/RootLayout'
import { heroListRoute } from './components/HeroList'
import { heroPostRoute } from './components/HeroPost'

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
        ],
      },
    ],
  },
])

function ErrorPage() {
  const error = useRouteError()

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== 'production' && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  )
}
