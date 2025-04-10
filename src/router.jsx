import { createBrowserRouter } from 'react-router'
import { rootLayoutRoute } from './layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    ...rootLayoutRoute,
  },
])
