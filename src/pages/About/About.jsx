import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

import History from '../../components/About/History'
import Collaboration from "../../components/About/Collaboration"
import './About.css'
import Flower from './flower.png'

const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className="Navbox">
      <img src={Flower} className="FlowerBG" ></img>

      <History className="Hist_and_Vision" />
      <Collaboration />
    </div>
  )
}

export default About