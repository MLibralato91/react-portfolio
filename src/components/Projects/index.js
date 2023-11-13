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
                  <a href="https://github.com/MLibralato91/proj-html-vuejs">
                    business web-site
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
                  <a href="https://github.com/MLibralato91/htmlcss-dropbox">
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
                  <a href="https://github.com/MLibralato91/vite-comics">
                    dc-comics
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
                  <a href="https://github.com/MLibralato91/htmlcss-discord">
                    discord
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
                  <a href="https://github.com/MLibralato91/html-css-spotifyweb">
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
                  <a href="https://github.com/MLibralato91/vue-boolzapp">
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
