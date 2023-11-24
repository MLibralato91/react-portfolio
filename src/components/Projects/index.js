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
                Web App realizzata con VueJs. Riproduzione di un sito web
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quos, non minus tenetur impedit perspiciatis reprehenderit?
                Alias incidunt dolor eveniet, consequatur dolore accusamus quos.
                Quos?
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://vite-dc-comics.netlify.app/">dc-comics</a>
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quos, non minus tenetur impedit perspiciatis reprehenderit?
                Alias incidunt dolor eveniet, consequatur dolore accusamus quos.
                Quos?
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://discord-html-css.netlify.app/">discord</a>
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quos, non minus tenetur impedit perspiciatis reprehenderit?
                Alias incidunt dolor eveniet, consequatur dolore accusamus quos.
                Quos?
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://spotify-desktop-html-css.netlify.app/">
                    spotify web
                  </a>
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quos, non minus tenetur impedit perspiciatis reprehenderit?
                Alias incidunt dolor eveniet, consequatur dolore accusamus quos.
                Quos?
              </p>
            </div>
            <div className="single-project">
              <p>
                <h2>
                  <a href="https://whatsapp-web-js.netlify.app/">
                    whatsapp web
                  </a>
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                quos, non minus tenetur impedit perspiciatis reprehenderit?
                Alias incidunt dolor eveniet, consequatur dolore accusamus quos.
                Quos?
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
