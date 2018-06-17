import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./Projekte.css";
import "./image-gallery.css";
// Firmenname, Beschreibung, Webseite, Bilder


const Projektsheet = ({ueberschrift, beschreibung, webseite, images}) =>{

  if(webseite){
  return (
    <article className="bt bb b--black-10 shadow-4 pv2 mb5">
          <div className="flex flex-column flex-row-ns flex-column-m ph3-ns">
            <div className="pr3-l mb4 mb0-l w-100 w-50-l ml5-l ">
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
              <h1 className="f3 fw1 mt0 lh-title">{ueberschrift}</h1>
              <p className="f5 lh-copy">
                {beschreibung}
              </p>
              <button type="button" className="f6 br3 bn dim grow pv2 ph3  link pointer bg-black-70"><a className="link white" href={webseite} target="_blank"  rel="noopener noreferrer" > Zur Webseite</a></button>
            </div>
          </div>
      </article>

  )
}
else {
  return (
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
              <h1 className="f3 fw1 mt0 lh-title">{ueberschrift}</h1>
              <p className="f5 lh-copy">
                {beschreibung}
              </p>
            </div>
          </div>
      </article>

  )
}
}

export default Projektsheet;
