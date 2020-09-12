import React from 'react';

import { Container } from './style';

function Navbar() {
  return <Container>
    <div className="logo">
        <a href="/">CGF</a>
    </div>
    <div className="navbar-links">
        <a href="/">WORK</a>
        <a href="/">ABOUT</a>
        <a href="/">CONTACT</a>
    </div>
    <div className="fr">
        <p>FR</p>
    </div>
  </Container>;
}

export default Navbar;