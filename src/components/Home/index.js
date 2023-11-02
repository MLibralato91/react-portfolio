import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'c', 'h', 'e', 'l', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  const example = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }
  useEffect(() => {
    example()
  })

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Jr Full Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
