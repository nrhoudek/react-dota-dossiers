import { Link, useRouteError } from 'react-router'
import '../styles/errorPage.css'

export function ErrorPage() {
  const error = useRouteError()

  return (
    <main className='error-page'>
      <h1>"I won't lie, that was unexpected." - Dark Willow</h1>
      <Link
        to='/heroes'
        className='back-to-home'
      >
        Back to Homepage
      </Link>
      {import.meta.env.MODE !== 'production' && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </main>
  )
}
