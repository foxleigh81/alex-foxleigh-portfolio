import React from 'react';
import moment from 'moment';
/* Import Stylesheet */
import styles from './styles.module.scss';
/* Import Components */
import { Button } from '../button';
const contactMe = () => console.log('This will go to the contact page or email me');
const downloadCV = () => console.log('This will download my cv');
/* Render component */
export const Status = ({ status, date }) => {
    const prettyDate = date ? moment(date, 'DD/MM/YY').format('Do MMMM, YYYY') : null;
    let inner;
    switch (status) {
        default:
        case 'available':
            inner = React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    "I am currently ",
                    React.createElement("strong", null, "available for work.")),
                React.createElement("p", null, "For more information, click below:"),
                React.createElement("div", { className: styles.buttons },
                    React.createElement(Button, { classes: "welcome-button add-shadow", action: contactMe }, "Get in touch"),
                    React.createElement(Button, { classes: "add-shadow", action: downloadCV }, "Download CV")));
            break;
        case 'unavailable':
            inner = React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    "I'm currently ",
                    React.createElement("strong", null, "fully-booked."),
                    " ",
                    React.createElement("br", null),
                    " ",
                    date && React.createElement(React.Fragment, null,
                        "I should be available from: ",
                        React.createElement("br", null),
                        " ",
                        React.createElement("span", { className: styles.date }, prettyDate))),
                React.createElement("div", { className: styles.buttons },
                    React.createElement(Button, { action: downloadCV }, "Download CV")));
            break;
        case 'holiday':
            inner = React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    "I'm currently taking a well-deserved break. ",
                    date && React.createElement(React.Fragment, null,
                        "I should be available again on ",
                        prettyDate)));
            break;
    }
    return React.createElement("div", { className: styles.status }, inner);
};
export default Status;
//# sourceMappingURL=index.js.map