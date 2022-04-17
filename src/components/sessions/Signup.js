import React, {useState} from 'react';
import {baseURL} from '../../Globals';
import { useNavigate} from 'react-router-dom'

function Signup({loginUser}){
  
  const [username, setUsername] = useState("")
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    fetch(baseURL + '/users', {
      method: "POST",
      headers: 
      {"Accept": "application/json",
      "Content-Type": "application/json"},
      body: JSON.stringify({ username })
    })
    .then(resp => resp.json())
    .then(data => 
      {loginUser(data);
      navigate('/books')
    })
  }
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
          type="text" 
          name="username" 
          id="username" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          ></input>
        </div>
        
        <input type="submit" value="Create Account"></input>
      </form>
    </div>
  )

}

export default Signup;