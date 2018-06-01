import React from 'react';
import logoWeb from "./logo-web.png";
import logoKreative from "./logo-kreative.png";
import profilbild from "./Profilbild.png";


const Header = () => {
  return(
    <div className="vh-100 dt w-100 tc" id="home">
      <div className="dtc v-mid">
        <section className="w-100 pv3 mt5 bg-near-white shadow-1">
          <h1 className="f1-ns f2-m fw1">Waldemar Wender - Web Development</h1>
        </section>
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">

            <section className="fl w-100 w-third-ns pa2 ">
              <article className="pv4-ns">
                <img className="w-60-ns w-40 w-80-m" src={logoWeb} alt="Logo-web"/>
                <p className="f2-ns f3 mb1-ns f4-m">Webentwicklung</p>
              </article>
            </section>

            <section className="fl w-100 w-third-ns pa2  ">
              <article className="pv4-ns ">
                <img className="w-80-ns w-60  w-100-m" src={profilbild} alt="Logo-web"/>
                <p className="f1-ns f2 f4-m">Portfolio</p>
              </article>
            </section>

            <section className="fl w-100 w-third-ns pa2  ">
              <article className="pv4-ns">
                <img className="w-60-ns w-40  w-80-m" src={logoKreative} alt="Logo-web"/>
                <p className="f2-ns f3 f4-m mb1-ns">Kreative Lösungen</p>
              </article>
            </section>

          </div>
        </div>

      </div>
    </div>

  )
}

export default Header;
