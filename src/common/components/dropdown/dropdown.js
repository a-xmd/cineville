import classnames from 'classnames'
import styles from './dropdown.module.scss'

const DropDown = ({ children, value, handleChange, id }) => {
  return (
    <select
      id={id}
      value={value}
      className={classnames(styles.dropdown)}
      onChange={(e) => handleChange(e)}
    >
      {children}
    </select>
  )
}

export default DropDown
