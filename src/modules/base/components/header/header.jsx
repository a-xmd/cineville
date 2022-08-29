import classnames from 'classnames'
import { useUser } from 'common/contexts'
import styles from './header.module.scss'

const Header = ({}) => {
  return <header className={classnames(styles.header)}>header</header>
}

export default Header

/*
      <select value={lang} onChange={(e) => setLang(e.currentTarget.value)}>
        <option value="en">engels</option>
        <option value="nl">nederlands</option>
      </select>

*/
