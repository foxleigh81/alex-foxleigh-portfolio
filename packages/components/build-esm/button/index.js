import React from 'react';
import cx from 'classnames';
/* Import Stylesheet */
import styles from './styles.module.scss';
/* Render component */
export const Button = ({ children, type, classes, action }) => {
    const buttonType = type || 'lozenge';
    if (buttonType === 'lozenge') {
        return React.createElement("button", { className: cx(styles.button, classes), onClick: action }, children);
    }
    else {
        return React.createElement("a", { className: cx(styles['button-link'], classes), onClick: action }, children);
    }
};
export default Button;
//# sourceMappingURL=index.js.map