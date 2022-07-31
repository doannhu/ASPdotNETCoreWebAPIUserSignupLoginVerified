import React from 'react';
import { useState, useEffect } from 'react';
// import Constants from "../utilities/Constants";
import {Link} from 'react-router-dom';
import {ReactComponent as UpdateIcon} from '../assests/file-earmark-text.svg'
import {ReactComponent as DeleteIcon} from '../assests/trash2.svg'


function DisplayAllPosts() {
    let [posts, setPosts] = useState([]);
    let [query, setQuery] = useState("");
        useEffect(()=>{
            getPosts(); 
        },[]);

    let getPosts = async ()=>{
        let response =  await fetch("https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/Posts/get-all-posts");
            let data = await response.json();
                console.log(data);
                    setPosts(data);
    }   
    let list = posts.filter(post=>post.assignedTo.toLowerCase().includes(query)||
                                    post.description.toLowerCase().includes(query)||
                                    post.issueType.toLowerCase().includes(query)||
                                    post.project.toLowerCase().includes(query)||
                                    post.status.toLowerCase().includes(query)||
                                    post.reportDate.toLowerCase().includes(query)
                                    ).map((post,index)=><ListItem key={index} value={post} />);
        return (
            <div>
            <Link to={`/register`}><button class="btn btn-outline-primary">Join the team !</button></Link>
            <br/>
            <br/>
            <h6 class="text-muted"><mark>{posts.length}</mark> bugs found</h6>
                <div class="row g-3">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="search" onChange={(e)=>setQuery(e.target.value)} /></div>
                </div>
                <br/>
                <Link to={`/report`}><button type="button" class="btn btn-outline-info">Dashboard</button></Link>
            <div className="table-responsive mt-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th class="h5" scope="col"># (primary-key)</th>
                                <th class="h5" scope="col">Project</th>
                                    <th class="h5" scope="col">Issue Type</th>
                                        <th class="h5" scope="col">Report Date</th>
                                            <th class="h5" scope="col">Summary</th>
                                                <th class="h5" scope="col">Description</th>
                                            <th class="h5" scope="col">Reporter</th>
                                        <th class="h5" scope="col">Assignee</th>
                                    <th class="h5" scope="col">Status</th>
                                </tr>
                            </thead>
                        <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    </div>    
  )
}

function ListItem(props) {
    return (
            <tr>
                <th scope="row">{props.value.issueId}</th>
                        <td>{props.value.project}</td>
                            <td>{props.value.issueType}</td> 
                                <td>{props.value.reportDate}</td>
                                    <td>{props.value.summary}</td>
                                        <td>{props.value.description}</td>
                                            <td>{props.value.reportedBy}</td>
                                        <td>{props.value.assignedTo}</td> 
                                    <td>{props.value.status}</td>
                                <td>
                            <Link to={`/UpdatePost/${props.value.issueId}`}><UpdateIcon /></Link>
                        <Link to={`/DeletePost/${props.value.issueId}`}><DeleteIcon /></Link> 
                    </td>
                </tr>
            )
        }

export default DisplayAllPosts
