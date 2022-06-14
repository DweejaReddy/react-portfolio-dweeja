import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/Logo5.png'
import '../AnimatedLetters/index.scss'
import './index.scss'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['w', 'e', 'e', 'j', 'a', ' ', 'R','e', 'd', 'd', 'y']
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

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="d-none d-lg-block"
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#3c3c3c",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#f794c8",
          },
          links: {
            color: "#f794c8",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <div className="container home-page d-none d-lg-block">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="name"
              style={{ marginTop:"-10px" }}
            />
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
          <h2>Front End Developer / Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>



      <div className="container home-page d-block d-lg-none">
        <div className="text-zone" style={{width:"90%",marginLeft:"-10px"}}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, &nbsp;</span>
            
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <br/>
            <img
              src={LogoTitle}
              alt="name"
              style={{ marginTop:"-10px", marginLeft:"-10px" }}
            />
            <AnimatedLetters
              letterclass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterclass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br/>
          </h1>
          <div className='text-center'>
          <h2 style={{marginTop:"80px"}}>Front End Developer / Student</h2></div>
          <div className='text-center'>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link></div>
        </div>
      </div>
    </>
  )
}

export default Home
