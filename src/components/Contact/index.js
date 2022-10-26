import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import axios from 'axios';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  // const sendResponses = () => {
    
  //   const scriptURL = 'https://script.google.com/macros/s/AKfycbzyR5-Xt2dzPvd78ruiYxiAcXvDTCzysw2AwZMxeumbRsbhQGLKUMWlAmtONaBAgVPB/exec'
  //   const form = document.forms['portfolio-responses']
  
  //   form.addEventListener('submit', e => {
  //     e.preventDefault()
  //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //       .then(response => alert("Thanks for Contacting..! I will get back to you soon..."))
  //       .catch(error => console.error('Error!', error.message))
  //   })
  // }

  const handleFormResponses = (e) =>{
    e.preventDefault();
    // console.log(name,email,subject,message);
    const data = {
      Name:name,
      Email:email,
      Subject:subject,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/1e25de2e-22f9-402c-809b-fcfef4b6d6df',data).then((response)=>{
      // console.log(response);
      alert('Thanks for Contacting me!! I will reach out to you soon...');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
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
            <form name="portfolio-responses" onSubmit={handleFormResponses}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    onChange={(e)=>setSubject(e.target.value)} value={subject}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    onChange={(e)=>setMessage(e.target.value)} value={message}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" name="submit" className="flat-button" value="SEND" />
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
            <form name="portfolio-responses" onSubmit={handleFormResponses}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" onChange={(e)=>setName(e.target.value)} value={name} required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)} value={email}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    onChange={(e)=>setSubject(e.target.value)} value={subject}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    onChange={(e)=>setMessage(e.target.value)} value={message}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" name="submit" className="flat-button" value="SEND" />
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