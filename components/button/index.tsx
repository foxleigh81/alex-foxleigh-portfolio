import React from 'react'
import cx from 'classnames'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import { Props } from './types/props.d'

/* Render component */
export const Button: React.FC<Props> = ({ children, type, classes, action }) => {
    const buttonType = type || 'lozenge'
    
    if (buttonType === 'lozenge') {
        return <button className={cx(styles.button, classes)} onClick={action}>{children}</button>
    } else {
        return <a className={cx(styles['button-link'], classes)} onClick={action}>{children}</a>
    }
}

export default Button
