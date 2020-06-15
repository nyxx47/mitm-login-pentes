import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  const endpoint = "https://reqres.in/api/login"
  // eve.holt@reqres.in
  // cityslicka
  const payload = {
    "email": username,
    "password": password
}
  const handleLogin = () => {
    axios.post(endpoint, payload).then(res => {
      
      setData(res.data.token)
    })
  }
  
  return(
    <div>
      <input type="text" value={username} onChange={event => setUsername(event.target.value)}/>
      <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
      <button onClick={() => handleLogin()}>Login</button>
      <p>Data: {data}</p>
    </div>
  )
}

export default App