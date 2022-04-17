import React, {useState, useEffect} from 'react'
import { baseURL } from '../../Globals'
import {useNavigate} from 'react-router-dom'

function Login({loginUser}){
  
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  const [error, setError] = useState(false)

  const navigate = useNavigate(0);


  const handleChange = e => {
    setUsername(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    if(user){
    loginUser(user)
    navigate("/")
  } else {
    setError(true)
  }
  }

  useEffect(() => {
    fetch(baseURL + '/users')
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1> Login </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"> {!error ? "Username:" : "No username associated. Try again:" }</label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            onChange={handleChange} 
            value={username}
          />
        </div>
        <input type="submit" value="login" />
      </form>
    </div>
  )

}

export default Login;