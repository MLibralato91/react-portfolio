import './index.scss'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const example = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  useEffect(() => {
    example()
  })
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'your_service_id',
        'your_template_id',
        form.current,
        'your_public_key'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Mi piace mettermi in gioco e imparare cose nuove, continuamente.
            Sono sempre alla ricerca di nuove esperienze e persone. Se le mie
            capacità e la mia personalità compaciano con ciò che cercate potete
            contattarmi senza problemi.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className="contact-form__top">
                <li>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Michele Libralato
          <br />
          Italia,
          <br />
          Latina LT, 04100 <br />
          <span>michele.libralato.ml@gmail.com</span>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
