import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [message, setmessage] = useState('')
  const [webmsg, setwebmsg] = useState('')


  useEffect(()=>{
    fetch('http://localhost:3000/random', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {setmessage(data.msg)});
  },[])

  useEffect(()=>{
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => setwebmsg(data.latitude));
  },[])


  return (
    <div>
      <div>
        <h1>This is from backend</h1>
        <p>{message}</p>
      </div>
      <div>
        <h1>web api weather lantitude</h1>
        <p>{webmsg}</p>
      </div>
    </div>
  )
}

export default App