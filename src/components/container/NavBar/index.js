import React from 'react';
import NavItem from '../../presentational/NavItem'

const NavBar = props => {
  const {primary_nav, social_networks} = props
    return (
        <nav>
          <ul className="primary">
            { primary_nav && <NavItem items={primary_nav}/> }
          </ul>
          <ul className="social">
            {social_networks && <NavItem items={social_networks}/> }
          </ul>
        </nav>
    )
  }

export default NavBar