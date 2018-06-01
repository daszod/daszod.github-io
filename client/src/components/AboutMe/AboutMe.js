import React from 'react';
import "./AboutMe.css";
import Profilbild from "../Header/Profilbild.png";


const AboutMe = () => {
  return(
    <section>
      <header className="w-100 " id="AboutMeHeader">
        <div className="flex items-center">
          <div className="w-50 ml6-l ml5 pa3-ns">
            <h2 className="pt3-l f-subheadline-l f1 fw2 near-white">Warum Ich?</h2>
          </div>

          <div className="w-50 pa3-ns">
            <img className="w-50-ns w-100-m pt5-ns " src={Profilbild} alt="Profilbild"/>
          </div>
        </div>
      </header>
      <p className="w-50-l w-80 ml6-l ml4 f4-ns tj">
        Harmonie zwischen Design und Entwicklung.<br />
        Neue Technologien und neue Wege. <br />
        Funktionierende Systeme.<br />
        Responsive Design. <br />
        Details.<br /><br />
        Meine Kernkompetenz ist die Frontend- Entwicklung, dabei ist es mein Anspruch, mit Weitblick zu arbeiten.
        Javascript, React, HTML, CSS-genaues arbeiten ist meine Prämisse, wobei es mir Freude macht, Projekte zu konzipieren,
        zu programmieren und auch interdisziplinär im Team zu gestalten. Ein Bachelor- Abschluss in der Medieninformatik,
        Berufserfahrung während und nach dem Studium und nicht nachlassendes Interesse sind die Grundlage für beste Ergebnisse.

      </p>
    </section>
  )
}

export default AboutMe;
