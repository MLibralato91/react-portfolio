import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faLaravel,
  faPhp,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
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
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos,
          non minus tenetur impedit perspiciatis reprehenderit? Alias incidunt
          dolor eveniet, consequatur dolore accusamus quos. Quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos,
          non minus tenetur impedit perspiciatis reprehenderit? Alias incidunt
          dolor eveniet, consequatur dolore accusamus quos. Quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos,
          non minus tenetur impedit perspiciatis reprehenderit? Alias incidunt
          dolor eveniet, consequatur dolore accusamus quos. Quos?
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faVuejs} color="#41b883" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPhp} color="#6181b6" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faLaravel} color="#ef533f" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
