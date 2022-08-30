import { cloneElement } from 'react'
import classnames from 'classnames'
import styles from './radio.module.scss'

export default function RadioGroup({
  children,
  name,
  legend,
  value,
  onChange,
}) {
  return (
    <fieldset className={classnames(styles['radio-group'])}>
      <legend>{legend}</legend>
      <div className={styles['radio-buttons-container']}>
        {children.map((child, index) =>
          cloneElement(child, {
            name,
            key: `radio-button-${index}`,
            selectedValue: value,
            onChange,
          })
        )}
      </div>
    </fieldset>
  )
}
