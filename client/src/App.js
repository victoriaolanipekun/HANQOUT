import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [hanqouts, setHanqouts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('api/hanqout/') 
      setHanqouts(data)
      console.log(data)
    }
    getData()
  })

  return (
    <>
      {hanqouts.map(hanqout => <h1 key={hanqout._id}>{hanqout.title}</h1>)}
    </>
  )
}

export default App
