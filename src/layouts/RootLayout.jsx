import { Form, useLoaderData } from 'react-router'
import { getHeroes } from '../apis/heroes'
import { Header } from '../components/Header'
import { HeroCard } from '../components/HeroCard'
import '../styles/rootLayout.css'

function RootLayout() {
  const { heroes } = useLoaderData()
  return (
    <>
      <Header />
      <main className='root-layout'>
        <div className='root-form'>
          <Form className='inner'>
            <label
              htmlFor='query'
              name='query'
            >
              <input
                id='query'
                type='text'
                placeholder='Search Hero Name'
              ></input>
            </label>
          </Form>
        </div>
        <div className='root-layout-grid'>
          {heroes.map(hero => (
            <HeroCard
              key={hero.id}
              icon={hero.icon}
              name={hero.localized_name}
            />
          ))}
        </div>
      </main>
    </>
  )
}

async function loader({ request: { signal } }) {
  const heroes = await getHeroes(signal)
  return { heroes: await heroes }
}

export const rootLayoutRoute = {
  loader,
  element: <RootLayout />,
}
