import classnames from 'classnames'
import { useTranslation } from 'next-export-i18n'
import FilmBlock from '../film-block/film-block'
import { useUser } from 'common/contexts'
import styles from './films-overview.module.scss'

const FilmsOverview = ({ films }) => {
  const { lang } = useUser()
  const { t } = useTranslation()
  return (
    <>
      <h2>{t('home.h2')}</h2>
      <ul className={classnames(styles['films-overview'])}>
        {films.map((film) => (
          <li key={`${film.identifier}`}>
            <FilmBlock film={film} lang={lang} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default FilmsOverview
