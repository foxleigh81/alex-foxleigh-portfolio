import React from 'react'
import cx from 'classnames'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const Button: React.FC<PropTypes> = ({ children, classes }) => <button className={cx(styles.button, classes)}>{children}</button>

export default Button
