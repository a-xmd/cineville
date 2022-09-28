import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import { CrossIcon } from 'common/components'
import styles from './modal.module.scss'

const Modal = ({ children, isOpen, cancelCallback, title = '' }) => {
  const router = useRouter()
  const dialogRef = useRef()

  const [initialPath] = useState(router.pathname)

  useEffect(() => {
    const dialog = dialogRef.current

    dialog.showModal()

    // prevent scrolling outside of modal
    document.body.classList.add('has-modal')

    function handleCancel(e) {
      cancelCallback?.()
    }

    dialog.addEventListener('cancel', handleCancel)

    return () => {
      dialog.removeEventListener('close', handleCancel)
      dialog.close()
      document.body.classList.remove('has-modal')
    }
  }, [cancelCallback, isOpen])

  useEffect(() => {
    if (router.pathname !== initialPath) {
      cancelCallback?.()
    }
  }, [router.pathname, initialPath, cancelCallback])

  return createPortal(
    <dialog ref={dialogRef} className={classnames(styles.modal)}>
      <div className={classnames(styles.header)}>
        <div className={styles.title}>{title}</div>
        <button onClick={() => cancelCallback?.()}>
          <CrossIcon />
        </button>
      </div>

      <div className={styles.content}>{children}</div>
    </dialog>,
    document.querySelector('[data-fullscreen-modal-root]')
  )
}

export default Modal
