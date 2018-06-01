import React from 'react';
import { Link } from 'react-scroll'

const Navigation = () => {
return(
<nav className="db dt-l w-100 border-box pa3 ph5-l helvetica shadow-1 fixed z-5" id="bgoverall">
  <Link activeClass="active" className="f3 b f2-l db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l pointer" to="home" spy={true} smooth={true} duration={500}>Waldemar Wender</Link>
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <Link activeClass="active" className="f4 dim dark-gray f3-l dib mr3 mr4-l link pointer" to="projekte" spy={true} smooth={true} duration={600}>Projekte</Link>
    <Link activeClass="active" className="f4 dim dark-gray f3-l dib mr3 mr4-l link pointer" to="AboutMeHeader" spy={true} smooth={true} duration={600}>Über mich</Link>
    <Link activeClass="active" className="f4 dim dark-gray f3-l dib mr3 mr4-l link pointer" to="kontaktId" spy={true} smooth={true} duration={600}>Kontakt</Link>

  </div>
</nav>
)
}

export default Navigation;
