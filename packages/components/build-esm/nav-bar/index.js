import React from 'react';
import { kebabCase } from 'lodash';
// TODO: Links are hardcoded for now but should be provided via props later
// /* Import Types */
// import Props from './types/props'
/* Import Stylesheet */
import styles from './styles.module.scss';
const navLinks = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'Roadmap',
        url: '/roadmap'
    }
];
const socialLinks = [
    {
        label: 'GitHub',
        url: 'https://github.com/foxleigh81'
    },
    {
        label: 'LinkedIn',
        url: 'https://alexfoxleigh.com'
    },
    {
        label: 'Facebook',
        url: 'https://www.facebook.com/foxleigh81'
    },
    {
        label: 'Behance',
        url: 'https://alexfoxleigh.com'
    },
    {
        label: 'Blog',
        url: 'https://alexfoxleigh.com'
    }
];
/* Render component */
export const NavBar = () => React.createElement("nav", { className: styles['nav-bar'] },
    React.createElement("ul", { className: styles["nav-links"] }, navLinks.map(link => React.createElement("li", null,
        React.createElement("a", { href: link.url }, link.label)))),
    React.createElement("ul", { className: styles["social-links"] }, socialLinks.map(link => React.createElement("li", null,
        React.createElement("a", { className: styles[kebabCase(link.label)], href: link.url, title: link.label },
            React.createElement("span", null, link.label))))));
export default NavBar;
//# sourceMappingURL=index.js.map