import React from 'react';
import ImageGallery from 'react-image-gallery';
import "../Projekte.css";
import "../image-gallery.css";

const images =[
  {
        original: require('./CCC-Logo.png'),
        description: "Logo: Continental Clothing Company",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Home-conti.jpg'),
        description: "Screenshot: Startseite",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Home-EP.jpg'),
        description: "Screenshot: Startseite",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Home-Salvage.jpg'),
        description: "Screenshot: Startseite",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Home-Fairshare.jpg'),
        description: "Screenshot: Startseite",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/About-CCC-1.jpg'),
        description: "Screenshot: About Continental Clothing Company",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Fairshare-3.jpg'),
        description: "Screenshot: FairShare Seite",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Continental-Damen.jpg'),
        description: "Screenshot: Continental Produkte Damen",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./Screenshots/Salvage-SA41P.jpg'),
        description: "Screenshot:",
        originalClass: "imgSliderfit"
  },
  {
          original: require('./EP18.jpg'),
          description: "Flyer: EarthPositive EP18",
          originalClass: "imgSliderfit"
  },
  {
        original: require('./Flyer-EP65-BU.jpg'),
        description: "Flyer: EarthPositive EP65",
        originalClass: "imgSliderfit"
  },
  {
          original: require('./SA41.jpg'),
          description:"Flyer: Salvage SA41",
          originalClass: "imgSliderfit"
  },
  {
        original: require('./Weihnachten-Silvester.jpg'),
        description: "Flyer: Betriebsferien",
        originalClass: "imgSliderfit"
  },
  {
        original: require('./half_half.jpg'),
        description: "Salvage: 60% Recycled Org.Cott/40% Recycled Poly",
        originalClass: "imgSliderfit"
  },
]



const projektccc = () => {
  return(

      <article className="bt bb b--black-10 shadow-4 pv2 mb5">
            <div className="flex flex-column flex-row-ns flex-column-m ph3-ns">
              <div className="pr3-l mb4 mb0-l w-100 w-50-l ml5-l">
                <ImageGallery
                  items={images}
                  showIndex= {true}
                  slideOnThumbnailHover= {true}
                  showBullets= {true}
                  infinite= {true}
                  showThumbnails={false}
                  showFullscreenButton= {false}
                  showGalleryFullscreenButton= {false}
                  showPlayButton= {false}
                  showGalleryPlayButton= {false}
                  showNav= {true}
                  />
              </div>
              <div className="w-100 w-50-l pr5-l center pv5-l h-50 pa1 tj">
                <h1 className="f3 fw1 mt0 lh-title">Continental Clothing Company GmbH</h1>
                <p className="f5 lh-copy">
                  Für das weltweit agierende Unternehmen Continental Clothing Company, habe ich einen neuen Webauftritt für die deutsche Seite geschaffen.
                  Dazu gehörte die Konzeption, Gestaltung und Umsetzung der neuen Webseite mithilfe von Wordpress.
                  Weitere Aufgabe waren: die Aktualisierung und Druckvorbereitung für den Katalog 2018, Erstellung von Newsletter
                </p>
                <button type="button" className="f6 br2 dim grow ba pv2 ph3 b--solid link pointer bg-light-silver"><a className="link white" href="https://www.continentalclothing.de" target="_blank"  rel="noopener noreferrer" > Zur Webseite</a></button>
              </div>
            </div>
        </article>

  )
}

export default projektccc;
