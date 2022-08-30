import classnames from 'classnames'
// import { useId } from 'react'
import styles from './radio.module.scss'

export default function RadioButton({
  children,
  name,
  value,
  selectedValue,
  onChange,
  id,
}) {
  // TODO: use useId()
  // const id = useId()

  return (
    <div className={classnames(styles['radio-button'])}>
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={value === selectedValue}
          onChange={() => onChange(value)}
        />
        {children}
      </label>
    </div>
  )
}
