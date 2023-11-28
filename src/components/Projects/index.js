import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const example = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  useEffect(() => {
    example()
  })

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="projects-list">
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://business-site-vuejs.netlify.app">
                    business web-site
                  </a>
                </h2>
                Single-Page realizzata con VueJs. Riproduzione di un sito web
                formato desktop. Il sito è strutturato attraverso l'uso dei
                componenti e quindi facilmente adattabile ad ogni esigenza del
                cliente. Lo stile è stato supportato dall'utilizzo del framework
                Bootstrap.
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://dropbox-web-html-css.netlify.app/">
                    dropbox
                  </a>
                </h2>
                Single-Page realizzata in HTML e CSS. Riproduzione della pagina
                principale del sito web Dropbox formato desktop.
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://vite-dc-comics.netlify.app/">dc-comics</a>
                </h2>
                Single-Page realizata con VueJs. Riproduzione del sito web della
                Dc-Comics formato desktop. Il sito è strutturato utilizzando
                componenti che recuperano i dati da un file data.js
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://discord-html-css.netlify.app/">discord</a>
                </h2>
                Single-Page realizzata con HTML e CSS. Riproduzione del sito web
                discord formato desktop.
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://spotify-desktop-html-css.netlify.app/">
                    spotify web
                  </a>
                </h2>
                Single-Page realizzata con HTML e CSS. Riproduzione di
                spotify-web formato desktop.
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://whatsapp-web-js.netlify.app/">
                    whatsapp web
                  </a>
                </h2>
                Web-App realizzata con HTML, CSS e Js. Riproduzione di
                whatsapp-web formato desktop. Il sito è strutturato attraverso i
                componenti di Vuejs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
