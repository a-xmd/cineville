import classnames from 'classnames'
import { Image, Rater } from 'common/components'
import styles from './film-block.module.scss'

const getImagePath = (filmName) =>
  `/static/images/films/${filmName}/${filmName}`

const FilmBlock = ({ film, lang }) => {
  const dateSeen = new Date(film.seen).toLocaleDateString('nl', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className={styles['film-block']}>
      <div className={styles['film-block__image']}>
        <Image
          imageName={getImagePath(film.identifier)}
          alt={film.imageDescription[lang]}
        />
      </div>
      <div className={classnames(styles['film-block__content'])}>
        <h3>{film.title}</h3>
        {film.alternativeTitle && <div>{film.alternativeTitle}</div>}

        <div className={classnames(styles['date-seen'])}>
          gezien op {dateSeen}
        </div>
        <div className={classnames(styles['rating-block'])}>
          <Rater score={film.rating.cineville} maxScore={5} />
        </div>
      </div>
    </article>
  )
}

export default FilmBlock

/*
          <div>Cineville waardering</div>
            <Rater score={film.rating.cineville} maxScore={5} />
          
*/
