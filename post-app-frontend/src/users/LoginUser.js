import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const axios = require('axios');

function LoginUser() {
    let [user,setUser] = useState({email:'', password:''});

    const logIn = async(e) =>{
        e.preventDefault();
        await axios.post('https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/User/login', user).then(function (response) {
          console.log(response);
          window.alert("Successful login!");
        }).catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
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
                    <input name="email" type="email" class="form-control" onChange={eventHandler} />
                        </div>
                            <div class="col-md-6">
                                <label class="form-label">Password: </label>
                                    <input name="password" type="password" class="form-control" onChange={eventHandler} />
                                        </div>
            <Link to={`/allPostsPage`}><button class="btn btn-outline-warning">Back to List page</button></Link>
            <button onClick={logIn} class="btn btn-primary"> Login!</button>
            </form>
    </div>
  )
}

export default LoginUser
