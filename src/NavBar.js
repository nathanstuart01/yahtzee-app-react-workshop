import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { fakeAuth, logout } from './Auth';

const authLinks = (history) => {
  if (fakeAuth()) {
    return (
      <li>
        <a
          onClick={ () => {
            logout()
            history.push('/')
          }}
        >
          Logout
        </a>
      </li>
    )
  }
}

const NavBar = ({ history }) => {
  let links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Rules', url: '/rules' },
    { name: 'Scores', url: '/scores' }
  ]

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="right">
          { links.map( (link, i) => {
              return (
                <li key={i}>
                  <NavLink exact activeStyle={styles.active} to={link.url}>{link.name}</NavLink>
                </li>
              )
            })
          }
          {authLinks(history)}
        </ul>
      </div>
    </nav>
  )

}

const styles = {
  active: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }
}

export default withRouter(NavBar);
