import React, { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment'
import Landscape from './components/Landscape/Landscape'

export default  () => {
  let [period, setPeriod] = useState('')
  let [landscape, setImage] = useState('')
  let [actualHourMoment, setActualHourMoment] = useState('')
  
  const theActualHourAndPeriod = () => {
    let actual = new Date()
    let hour = actual.getHours()
    const morning = hour >= 5 && hour < 13
    const afternoon = hour >= 13 && hour < 18

    if (morning) {
      document.body.style.backgroundColor = 'lightBlue'
      setImage(require('./assets/dia.jpg'))
      setPeriod('Manhã')
    } else if (afternoon) {
      document.body.style.backgroundColor = 'orange'
      setImage(require('./assets/tarde.jpg'))
      setPeriod('Tarde')
    } else {
      document.body.style.backgroundColor = 'black'
      setImage(require('./assets/noite.jpg'))
      setPeriod('Noite')
    }
  }

  const reloadHour = () => {
    setTimeout(() => {
      setActualHourMoment(moment().format('HH:mm:ss'))
      document.title = `${moment().format('HH:mm:ss')} - Hora atual`
      }, 1000)
  }

  useEffect(() => {
    reloadHour()
    theActualHourAndPeriod()
  }, [actualHourMoment])

  return(
    <>
      <div className="App animate__animated animate__fadeIn">
        <span>
            <h2>Hora atual: {actualHourMoment} - Período: {period}</h2>
        </span>
        
          <Landscape image={landscape}/>
      </div>
    </>
  )
}
