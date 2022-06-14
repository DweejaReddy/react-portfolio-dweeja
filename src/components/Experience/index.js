import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import "./index.scss"
import monitor from "../../assets/images/icons8-monitor.gif"
import developer from "../../assets/images/icons8-developer.gif"
import member from "../../assets/images/icons8-people.gif"

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    
    <>
    <div className="container about-page d-lg-block d-none">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n','c','e']}
              idx={15}
            />
          </h1>
          </div>
    <div className="card" style={{width: "30rem", position:"absolute", left:"40%",top:"20%"}}>
      <div className="card-body text-center">
        <img src ={monitor} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Head of Technical Affairs</h3>
        <h4>E-Cell, VNIT Nagpur</h4>
        <br/>
        <p className="card-text mx-auto" style={{color:"rgb(253, 70, 195)"}}>MAY 2022 - PRESENT</p>
      </div>
    </div>

    <div className="card" style={{width: "30rem", position:"absolute", left:"70%",top:"20%"}}>
      <div className="card-body text-center">
      <img src ={developer} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Front-End Developer</h3>
        <h4>ACM Student Chapter, VNIT</h4>
        <br/>
        <p className="card-text mx-auto" style={{color:"rgb(253, 70, 195)"}}>JAN 2022 - PRESENT</p>
      </div>
    </div>

    <div className="card" style={{width: "30rem", position:"absolute", left:"55%",top:"60%"}}>
      <div className="card-body text-center">
      <img src ={member} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Member</h3>
        <h4>IvLabs, VNIT</h4>
        <br/>
        <p className="card-text mx-auto" style={{color:"rgb(253, 70, 195)"}}>OCT 2021 - APRIL 2022</p>
      </div>
    </div>
    </div>



    <div className="container about-page d-lg-none d-block">
        <div className="text-center">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n','c','e']}
              idx={15}
            />
          </h1>
          </div>

    <div className="card mx-auto" style={{width: "30rem", marginTop:"50px"}}>
      <div className="card-body text-center">
        <img src ={monitor} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Head of Technical Affairs</h3>
        <h4>E-Cell, VNIT Nagpur</h4>
        <br/>
        <p className="card-text  mx-auto" style={{color:"rgb(253, 70, 195)"}}>MAY 2022 - PRESENT</p>
      </div>
    </div>

    <div className="card mx-auto" style={{width: "30rem",marginTop:"50px"}}>
      <div className="card-body text-center">
      <img src ={developer} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Front-End Developer</h3>
        <h4>ACM Student Chapter, VNIT</h4>
        <br/>
        <p className="card-text mx-auto" style={{color:"rgb(253, 70, 195)"}}>JAN 2022 - PRESENT</p>
      </div>
    </div>

    <div className="card mx-auto mb-5" style={{width: "30rem",marginTop:"50px"}}>
      <div className="card-body text-center">
      <img src ={member} style={{width:"50px", marginBottom:"20px"}}/>
        <h3 className="card-title">Member</h3>
        <h4>IvLabs, VNIT</h4>
        <br/>
        <p className="card-text mx-auto" style={{color:"rgb(253, 70, 195)"}}>OCT 2021 - APRIL 2022</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Experience