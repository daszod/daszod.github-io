import React from 'react';
import "./Projekte.css";
import Projektsheet from './Projektsheet';

const Projekte = () => {

  return(
    <main className="pt5 w-100 " id="projekte">
      <header className="w-100 shadow-4 " id="headerbackground">
        <article className="w-60-l  ml6-l ml4">
          <h2 className="pl5 pt3-l f-subheadline-l f1 fw2 near-white pl">Projekte</h2>
        </article>
      </header>
      <div className="mb5 tc w-100">
        <p className="f1">Skillset</p>
        <img className="mw3 circle mh3" alt="html logo" src={require('./skills/html5.png')}/>
        <img className="mw3 circle mh3" alt="css3 logo" src={require('./skills/css3.png')}/>
        <img className="mw3 circle mh3" alt="javascript logo" src={require('./skills/javascript.png')}/>
        <img className="mw3 circle mh3" alt="react logo" src={require('./skills/react.png')}/>
        <img className="mw3 circle mh3" alt="npm logo" src={require('./skills/npm-logo.png')}/>

        <img className="mw3 circle mh3" alt="Adobe Photoshop logo" src={require('./skills/Adobe-Photoshop.png')}/>
        <img className="mw3 circle mh3" alt="Adobe Illustrator logo" src={require('./skills/Adobe-Illustrator.png')}/>
        <img className="mw3 circle mh3" alt="Adobe InDesign logo"  src={require('./skills/Adobe-InDesign.png')}/>
        <img className="mw3 circle mh3" alt="Adobe Premiere logo" src={require('./skills/Adobe-Premiere.png')}/>
        <img className="mw3 circle mh3" alt="Adobe After Effects logo" src={require('./skills/Adobe-After-Effects.png')}/>

      </div>

      {/* continental Clothing Company */}
      <Projektsheet
        ueberschrift="Continental Clothing Company GmbH"
        beschreibung="Für das weltweit agierende Unternehmen Continental Clothing habe ich den neuen Webauftritt für die deutsche Seite geschaffen.
        Dazu gehörte die Konzeption, Gestaltung und Umsetzung der Webseite basierend auf Wordpress.
        Weitere Aufgaben umfassten unter anderem die Aktualisierung und Druckvorbereitung des Katalogs 2018 und die Erstellung von Werbematerialien wie Newsletter und Flyer."
        webseite="https://www.continentalclothing.de"
        images = {[
          {
                original: require('./CCC/CCC-Logo.png'),
                description: "Logo: Continental Clothing Company",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Home-conti.jpg'),
                description: "Screenshot: Startseite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Home-EP.jpg'),
                description: "Screenshot: Startseite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Home-Salvage.jpg'),
                description: "Screenshot: Startseite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Home-Fairshare.jpg'),
                description: "Screenshot: Startseite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Infobereich-neu.jpg'),
                description: "Screenshot: Startseite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Sonderanfertigung-1.jpg'),
                description: "Screenshot: Sonderanfertigung",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/About-CCC-1.jpg'),
                description: "Screenshot: About Continental Clothing Company",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Fairshare-3.jpg'),
                description: "Screenshot: FairShare Seite",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Continental-Damen.jpg'),
                description: "Screenshot: Continental Produkte Damen",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/half_half.jpg'),
                description: "Salvage: 60% Recycled Org.Cott/40% Recycled Poly",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Screenshots/Salvage-SA41P.jpg'),
                description: "Flyer: Salvage SA41P",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Flyer-EP65-BU.jpg'),
                description: "Flyer: EarthPositive EP65",
                originalClass: "imgSliderfit"
          },
          {
                  original: require('./CCC/SA41.jpg'),
                  description:"Flyer: Salvage SA41",
                  originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Flyer-2018Mai-N09N18x1000.jpg'),
                description: "Flyer: Continental N09 & N18",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/EP16x1000.jpg'),
                description: "Flyer: EarthPositive EP16",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/2018April-Flyer-EP100.jpg'),
                description: "Flyer: EarthPositive EP100",
                originalClass: "imgSliderfit"
          },
          {
                  original: require('./CCC/Flyer-2018-N50Px1000.jpg'),
                  description: "Flyer: Continental N50P",
                  originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/EP17-Flyerx1000.jpg'),
                description: "Flyer: Betriebsferien",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./CCC/Flyer-Sonderanfertigung.jpg'),
                description: "Flyer: Sonderanfertigung",
                originalClass: "imgSliderfit"
          }

        ]}
      />

      {/* Beatrix Bernd Heilpraxis */}
      <Projektsheet
        ueberschrift="Beatrix Bernd Heilpraxis"
        beschreibung="Für die Naturheilpraxis Beatrix Berndt entwarf ich während des Studiums ein neues Logo und Kommunikationsmaterial wie Flyer und Visitenkarten."

        images = {[
          {
                original: require('./Heilpraxis/Naturheilpraxis-Logo.png'),
                description: "Logo: Naturheilpraxis Beatrix Berndt",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./Heilpraxis/Naturheilpraxis-visitenkarte-vorne.png'),
                description: "Visitenkarte vorn",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./Heilpraxis/Naturheilpraxis-visitenkarte-hinten.png'),
                description: "Visitenkarte hinten",
                originalClass: "imgSliderfit"
          },
          {
                original: require('./Heilpraxis/Naturheilpraxis-Banner.png'),
                description: "Banner: Vorlage",
                originalClass: "imgSliderfit"
          },
          ]}
      />

      {/* Kriegertraining*/}
      <Projektsheet
        ueberschrift="Kriegertraining"
        beschreibung="Für den ehemaligen Weltmeister im Kumite Karate, Maximilian Mathes, entwickelte ich ein Logo für den Webauftritt."

        images = {[
          {
                original: require('./Karatemax/KriegerTrainingx1500.png'),
                description: "Logo: Kriegertraining",
                originalClass: "imgSliderfit"
          },
          ]}
      />
    </main>
  )
}

export default Projekte;
