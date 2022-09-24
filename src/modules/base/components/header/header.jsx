import { useState } from 'react'
import classnames from 'classnames'
import { Modal, MenuIcon, FilmIcon } from 'common/components'
import MainNavigation from '../navigation/navigation'
import styles from './header.module.scss'

export default function Header({}) {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <header className={classnames(styles['outer'])}>
      <div className={classnames(styles['inner'])}>
        <div className={classnames(styles.left)}>
          <FilmIcon hideFromScreenReader={true} />
          <span className={classnames(styles['logo-text'])}>
            <span>cv</span>
            <span>social</span>
            <span>app</span>
          </span>
        </div>

        <div className={classnames(styles['right'])}>
          <button
            onClick={() => {
              setNavIsOpen(true)
            }}
          >
            <MenuIcon />
          </button>
          {navIsOpen && (
            <Modal
              cancelCallback={() => {
                setNavIsOpen(false)
              }}
            >
              <MainNavigation />
            </Modal>
          )}
          <MainNavigation nonModal />
        </div>
      </div>
    </header>
  )
}
