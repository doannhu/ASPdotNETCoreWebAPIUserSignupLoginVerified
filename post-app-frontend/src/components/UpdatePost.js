import React from 'react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
const axios = require('axios');

function UpdatePost() {
    let {getPostId} = useParams();
    let [post, setPost] = useState({issueId: getPostId, project:"", issueType:"", reportDate:"", summary:"", description:"", reportedBy:"", assignedTo:"", status:""});

    // const updatePost = async ()=>{
    //     let response = await fetch(`https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/Posts/update-post`,{
    //         method: 'PUT',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(post),
    //     });
    //     return response.json();
    // }
        const updatePost = async(e) =>{
            e.preventDefault();
            await axios.post('https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/Posts/update-post', post).then(function (response) {
              console.log(response);
              window.alert("Success!");
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
        setPost({...post,[event.target.name]: event.target.value});
        console.log(post);
    }
  
    return (
    <div>
    <form class="row g-3">
        <label className='h4 form-label'>Update Post {getPostId}</label><Link to={`/allPostsPage`}><button class="btn btn-info">Back</button></Link><br/>
            <div class="col-md-6">
                <label class="form-label">Project: </label>
                    <input name="project" type="text" class="form-control" placeholder="Project name" onChange={eventHandler} />
                        </div>
                            <div class="col-md-6">
                                <label class="form-label">Issue Type: </label>
                                    <input name="issueType" type="text" class="form-control" placeholder="Minor/Major" onChange={eventHandler} />
                                        </div>
                                    <div class="col-md-6">
                                <label class="form-label">Report Date: </label>
                            <input name="reportDate" type="text" class="form-control" placeholder="dd-mm-yyyy" onChange={eventHandler} />
                        </div>
                    <div class="col-12">
                <label class="form-label">Summary: </label>
            <input name="summary" type="text" class="form-control" placeholder="About the bug" onChange={eventHandler} />
                </div>
                    <div class="col-12">
                        <label class="form-label">Description: </label>
                            <textarea name="description" class="form-control" type="text" rows="3" placeholder="More details" onChange={eventHandler} ></textarea>
                                </div>
                                    <div class="col-md-4">
                                        <label class="form-label">Reporter: </label>
                                    <input name="reportedBy" type="text" class="form-control" placeholder="Name" onChange={eventHandler} />
                                </div>
                            <div class="col-md-4">
                        <label class="form-label">Assignee: </label>
                    <input name="assignedTo" type="text" class="form-control" placeholder="Name" onChange={eventHandler} />
                </div>
            <div class="col-md-4">
                <label class="form-label">Status: </label>
                    <input name="status" type="text" class="form-control" placeholder="Done/Ongoing" onChange={eventHandler} />
                        </div>
                        <div class="col-12">
                            <button type="button" onClick={updatePost} class="btn btn-warning">Update</button>
                                </div>
                                    </form>
    </div>
  )
}

export default UpdatePost
