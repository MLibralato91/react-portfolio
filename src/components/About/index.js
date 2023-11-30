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
import Loader from 'react-loaders'

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
    <>
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
            "Non smettere mai di imparare". Penso che per crescere non bisogna
            mai fermarsi ed è il motivo per cui a 32 anni ho deciso di diventare
            uno sviluppatore web.
          </p>
          <p>
            A gennaio 2023 ho iniziato a studiare HTML, CSS e Js. Superato lo
            scoglio più grande ho iniziato ad applicare i primi framework come
            Bootstrap e VueJs. Nella seconda parte dei miei studi ho imparato ad
            usare PHP con il supporto di uno dei suoi framework, Laravel.
          </p>
          <p>
            Sono una persona semplice e umile, per staccare la spina passo il
            tempo libero in mezzo alla natura oppure praticando qualsiasi sport
            in compagnia. Mi piace cucinare e mi diletto nel fai da te. Amo
            imparare cose nuove e dove posso, insegnarle.
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
      <Loader type="pacman" />
    </>
  )
}

export default About
