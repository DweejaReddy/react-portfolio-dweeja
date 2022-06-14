import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_YeJhZkgb',
        form.current,
        'your-token'
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
      <div className="container contact-page d-lg-block d-none">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dweeja Reddy,
          <br />
          Warangal Urban,
          <br />
          Telangana, 506001 <br />
          <br />
          <a href="mailto:dweeja54@gmail.com" >dweeja54@gmail.com</a>
        </div>
        <div className="map-wrap">
          <MapContainer center={[18.001576, 79.53892]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.001576, 79.53892]}>
            </Marker>
          </MapContainer>
        </div>
      </div>


      <div className="container contact-page d-block d-lg-none">
        <div className="text-center">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='text-center'>
        <div className="info-map" style={{marginTop:"443px"}}>
          Dweeja Reddy,
          <br />
          Warangal Urban,
          <br />
          Telangana, 506001 <br />
          <br />
          <a href="mailto:dweeja54@gmail.com" >dweeja54@gmail.com</a>
        </div>
        </div>
        <div className="map-wrap text-center" style={{width:"85%", height:"60%", marginTop:"150px"}}>
          <MapContainer center={[18.001576, 79.53892]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[18.001576, 79.53892]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact