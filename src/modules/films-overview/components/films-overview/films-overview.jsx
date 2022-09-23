import classnames from 'classnames'
import FilmBlock from '../film-block/film-block'
import OptionsBar from '../options-bar/options-bar'
import { useUser } from 'common/contexts'
import { useFilms } from './films-overview.hooks'
import styles from './films-overview.module.scss'

const FilmsOverview = ({ _films }) => {
  const { lang } = useUser()

  const { state, dispatch } = useFilms(_films)
  const { sortBy, isAscending, films } = state

  return (
    <>
      <h2 className={styles.heading}>Bekeken films</h2>
      <OptionsBar
        sortBy={sortBy}
        isAscending={isAscending}
        dispatch={dispatch}
      />
      <div className={styles.container}>
        <section className={styles.left}>
          <ol className={classnames(styles['films-overview'])}>
            {films.map((film) => (
              <li key={`${film.identifier}`}>
                <FilmBlock film={film} lang={lang} />
              </li>
            ))}
          </ol>
        </section>
        <section className={styles.right} data-sidebar></section>
      </div>
    </>
  )
}

export default FilmsOverview
