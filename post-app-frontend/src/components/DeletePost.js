import React from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DeletePost() {
    let {getPostId} = useParams();
    let navigate = useNavigate();
    console.log(getPostId);
    let deletePost = async()=>{
             fetch(`https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/Posts/delete-post/${getPostId}`,{
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        });
    }

    let clickHandler = ()=>{
        deletePost();
        navigate("/allPostsPage");

    }
    
  return (
    <div>
    <br/>
    <br/>
        <h4>Post {getPostId} will be deleted!</h4>
        <h4>Click button below to confirm and go back !</h4>
        <button onClick={clickHandler} className="btn btn-outline-danger">Confirm and Back</button>
    </div>
  )
  }

export default DeletePost
