import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/endpoint') // * <-- replace with your endpoint
      const data = await res.json()
      console.log(data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
