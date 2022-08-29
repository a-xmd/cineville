import classnames from 'classnames'
import { Image } from 'common/components'
import styles from './film-block.module.scss'

const getImagePath = (filmName) =>
  `/static/images/films/${filmName}/${filmName}`

const FilmBlock = ({ film }) => {
  return (
    <article className={styles['film-block']}>
      <div className={styles['film-block__image']}>
        <Image imageName={getImagePath(film.identifier)} alt="yo yo yo" />
      </div>
      <div className={classnames(styles['film-block__content'])}>
        <h3>{film.title}</h3>
      </div>
    </article>
  )
}

export default FilmBlock
