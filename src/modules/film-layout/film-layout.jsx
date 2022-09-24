import classnames from 'classnames'
import Head from 'next/head'
import styles from './film-layout.module.scss'

export default function FilmLayout({ children, title, descriptionContent }) {
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
        <div>film header</div>
        {children}
      </div>
    </>
  )
}
