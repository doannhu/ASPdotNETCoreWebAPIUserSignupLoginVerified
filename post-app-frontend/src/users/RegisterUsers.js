import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const axios = require('axios');


function RegisterUsers() {
    let [user,setUser] = useState({email:'', password:'', confirmPassword:''});

    // const registerUser = async ()=>{
    //     const response = await fetch("https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/User/register",{
    //         method: 'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user),
    //     });
    //     if(!response.ok) {
    //         throw new Error(`HTTP error: ${response.status}`);
    //     }
    //     return response.json();
    // }

    const registerUser = async(e) =>{
        e.preventDefault();
        await axios.post('https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/User/register', user).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
    }

    const eventHandler=(event) => {
        setUser({...user,[event.target.name]: event.target.value}); //DESTRUCTURING JAVASCRIPT
        console.log(user);
    }
  return (
    <div>
        <h1 className='mt-5'>Join the team</h1>
        <form class="row g-3">
        <div class="col-md-6">
                <label class="form-label">Email: </label>
                    <input name="email" type="email" class="form-control" placeholder="name@email.com" onChange={eventHandler} />
                        </div>
                            <div class="col-md-6">
                                <label class="form-label">Password: </label>
                                    <input name="password" type="password" class="form-control" placeholder="at least 6 characters" onChange={eventHandler} />
                                        </div>
                                    <div class="col-md-6">
                                <label class="form-label">Confirm Password: </label>
                            <input name="confirmPassword" type="password" class="form-control" placeholder="confirm" onChange={eventHandler} />
                        </div>
            <Link to={`/allPostsPage`}><button class="btn btn-outline-warning">Back to List page</button></Link>
            <Link to={`/login`}><button class="btn btn-outline-primary">Login</button></Link>
            <button onClick={registerUser} class="btn btn-primary"> Join !</button>
            </form>
    </div>
  )
}

export default RegisterUsers
