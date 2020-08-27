import React from 'react';
import { capitalize } from 'lodash';
import cx from 'classnames';
/* Import Stylesheet */
import styles from './styles.module.scss';
/* Import helpers */
import salutation from './helpers/salutation';
/* Import Components */
import MiniMe from '../mini-me';
import Status from '../status';
/* Render component */
export const Welcome = ({ status, nextDate, miniMeName, miniMeWidth, hour }) => {
    const { segment, lightLevel } = salutation(hour || undefined);
    return React.createElement("div", { className: cx(styles['block'], styles[lightLevel], styles[`status-${status}`]) },
        React.createElement("div", { className: styles.foreground },
            React.createElement(MiniMe, { name: miniMeName, width: miniMeWidth || 'regular', classes: "mini-me" }),
            React.createElement("div", { className: styles["salutation"] },
                React.createElement("h1", null, capitalize(segment)),
                React.createElement("h2", null, "I'm Alex, I like to make things")),
            React.createElement("div", { className: styles['status-container'] },
                React.createElement(Status, { status: status, date: nextDate }))));
};
export default Welcome;
//# sourceMappingURL=index.js.map