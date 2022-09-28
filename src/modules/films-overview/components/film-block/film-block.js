import { useEffect, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { Image, Modal, Rater, CommentIcon } from 'common/components'
import styles from './film-block.module.scss'

const getImagePath = (filmName) =>
  `/static/images/films/${filmName}/${filmName}`

const FilmBlock = ({ film, lang }) => {
  const dateSeen = new Date(film.seen).toLocaleDateString('nl', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <article className={styles['film-block']}>
      {modalIsOpen && (
        <Modal title={film.title} cancelCallback={() => setModalIsOpen(false)}>
          <section>content</section>
        </Modal>
      )}
      <div className={styles['film-block__image']}>
        <Image
          imageName={getImagePath(film.identifier)}
          alt={film.image.description[lang]}
          width={film.image.size.width}
          height={film.image.size.height}
        />
      </div>
      <div className={classnames(styles['film-block__content'])}>
        <h3>
          <Link href={`/films/${film.identifier}/dashboard`}>{film.title}</Link>
        </h3>
        {film.alternativeTitle && <div>{film.alternativeTitle}</div>}

        <div className={classnames(styles['date-seen'])}>
          gezien op {dateSeen}
        </div>
        <div className={classnames(styles['rating-and-comments'])}>
          <div className={classnames(styles['rating-block'])}>
            <Rater score={film.rating.cineville} maxScore={5} />
          </div>
          <div className={classnames(styles.icons)}>
            <Link href={`/films/${film.identifier}/comments`}>
              <a className={classnames(styles['comment-icon'])}>
                <CommentIcon />
                <span>100+</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FilmBlock
