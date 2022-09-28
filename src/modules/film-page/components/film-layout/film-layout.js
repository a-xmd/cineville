import classnames from 'classnames'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './film-layout.module.scss'

export default function FilmLayout({
  children,
  title,
  identifier,
  descriptionContent,
}) {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={(descriptionContent = 'Experiment: social Cineville app')}
        />
      </Head>
      <div className={classnames(styles['film-header'])}>
        <h1>{title}</h1>
        <nav>
          <Link href={{ pathname: 'dashboard', query: { id: identifier } }}>
            <a
              aria-current={
                pathname === '/films/[id]/dashboard' ? 'page' : null
              }
              className={classnames({
                [styles.active]: pathname === '/films/[id]/dashboard',
              })}
            >
              dashboard
            </a>
          </Link>
          <Link href={{ pathname: 'comments', query: { id: identifier } }}>
            <a
              aria-current={pathname === '/films/[id]/comments' ? 'page' : null}
              className={classnames({
                [styles.active]: pathname === '/films/[id]/comments',
              })}
            >
              comments
            </a>
          </Link>
        </nav>
        {children}
      </div>
    </>
  )
}
