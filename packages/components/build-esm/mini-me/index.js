import React from 'react';
import cx from 'classnames';
/* import SVGs */
import { ReactComponent as Phone } from './images/phone.svg';
import { ReactComponent as AtDesk } from './images/at-desk.svg';
import { ReactComponent as Available } from './images/available.svg';
import { ReactComponent as Blushing } from './images/blushing.svg';
import { ReactComponent as Skills } from './images/skills.svg';
import { ReactComponent as Smile } from './images/smile.svg';
import { ReactComponent as Beach } from './images/beach.svg';
/* import styles */
import styles from './styles.module.scss';
/* Render component */
export const MiniMe = ({ name, width, position, classes }) => {
    const selectMiniMe = (name) => {
        switch (name) {
            case 'available':
                return React.createElement(Available, null);
            case 'at-desk':
                return React.createElement(AtDesk, null);
            case 'blushing':
                return React.createElement(Blushing, null);
            case 'skills':
                return React.createElement(Skills, null);
            case 'phone':
                return React.createElement(Phone, null);
            case 'beach':
                return React.createElement(Beach, null);
            case 'smile':
            default:
                return React.createElement(Smile, null);
        }
    };
    return React.createElement("div", { className: cx(styles['mini-me'], styles[`w-${width}`], classes) }, selectMiniMe(name));
};
export default MiniMe;
//# sourceMappingURL=index.js.map