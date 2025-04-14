import '../styles/footer.css'

export function Footer() {
  return (
    <footer>
      <div className='inner'>
        <p>&copy; {new Date().getFullYear()} Dota Dossiers</p>
        <p>Created by Nick</p>
        <p>
          Icons provided by{' '}
          <a
            href='https://fontawesome.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Font Awesome
          </a>{' '}
          and{' '}
          <a
            href='https://icons8.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  )
}
