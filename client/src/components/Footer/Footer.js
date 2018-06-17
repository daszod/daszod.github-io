import React from 'react';

const Footer = () => {
  return(
    <section class="w-100 bg-black-80 center pv2-ns ">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-50-ns pa3">
          <div class="near-white f5 white">© 2018 Waldemar Wender</div>
        </div>
        <div class="fl w-100 w-50-ns pa2">
          <div class="near-white f5 white tr-ns">
            <a className="link white" href="https://github.com/daszod" target="_blank"  rel="noopener noreferrer"><img className="img" alt="html logo" src={require('./GitHub-Mark-Light-32px.png')}/> GitHub-Profil </a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
