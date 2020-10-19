import React from 'react';
import cx from 'classnames';
/* import SVGs */
import Phone from './images/phone.svg';
import AtDesk from './images/at-desk.svg';
import Available from './images/available.svg';
import Blushing from './images/blushing.svg';
import Skills from './images/skills.svg';
import Smile from './images/smile.svg';
import Beach from './images/beach.svg';
/* import styles */
import styles from './styles.module.scss';
/* Render component */
export const MiniMe = ({ name, width, position, classes }) => {
    const selectMiniMe = (name) => {
        switch (name) {
            case 'available':
                return React.createElement("img", { src: Available });
            case 'at-desk':
                return React.createElement("img", { src: AtDesk });
            case 'blushing':
                return React.createElement("img", { src: Blushing });
            case 'skills':
                return React.createElement("img", { src: Skills });
            case 'phone':
                return React.createElement("img", { src: Phone });
            case 'beach':
                return React.createElement("img", { src: Beach });
            case 'smile':
            default:
                return React.createElement("img", { src: Smile });
        }
    };
    return React.createElement("div", { className: cx(styles['mini-me'], styles[`w-${width}`], classes) }, selectMiniMe(name));
};
export default MiniMe;
//# sourceMappingURL=index.js.map