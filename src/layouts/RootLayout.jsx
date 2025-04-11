import { Outlet } from 'react-router'
import { Header } from '../components/Header'

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
