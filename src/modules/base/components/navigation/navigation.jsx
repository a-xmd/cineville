import Link from 'next/link'
import classnames from 'classnames'
import { ChevronRightIcon } from 'common/components'
import styles from './navigation.module.scss'

export default function MainNavigation({ nonModal }) {
  return (
    <nav
      className={classnames(styles.nav, { [styles['non-modal']]: nonModal })}
    >
      <ol>
        <li>
          <ChevronRightIcon hideFromScreenReader />
          <Link href="/">home</Link>
        </li>
        <li>
          <ChevronRightIcon hideFromScreenReader />
          <Link href="/about">about</Link>
        </li>
      </ol>
    </nav>
  )
}
