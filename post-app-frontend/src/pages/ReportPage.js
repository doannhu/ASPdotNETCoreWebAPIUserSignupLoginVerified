import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import {useState, useEffect} from 'react';

function ReportPage() {
    let [posts, setPosts] = useState([]);
    let queryStatusDone = "done";
    let queryStatusOngoing = "ongoing";
    let queryMajorIssue = "major";
    let queryMinorIssue = "minor";

    useEffect(()=>{
        getPosts(); 
    },[]);

    let getPosts = async ()=>{
        let response =  await fetch("https://aspdotnetcorewebapiusersignuploginverified20220729231136.azurewebsites.net/api/Posts/get-all-posts");
            let data = await response.json();
                console.log(data);
                    setPosts(data);
    }   
    let listStatusDone = posts.filter(post=>post.status.toLowerCase().includes(queryStatusDone)).length;
        let listStatusOngoing = posts.filter(post=>post.status.toLowerCase().includes(queryStatusOngoing)).length;
            console.log("list 1 length: "+listStatusDone);
                console.log("list 2 length: "+listStatusOngoing);
    let listMajorIssue = posts.filter(post=>post.issueType.toLowerCase().includes(queryMajorIssue)).length;
        let listMinorIssue = posts.filter(post=>post.issueType.toLowerCase().includes(queryMinorIssue)).length;
                    
  return (
    <div>
    <br />
    <h3>Insight</h3>
        <div class="row g-3">
            <div class="col-md-6">
                <label style={{backgroundColor:'DarkOrchid'}}>Done </label>
                    </div>
                        <div class="col-md-6">
                            <label style={{backgroundColor:'DarkMagenta'}}>Working on it </label>
                                </div>
                                    <div class="col-md-8">
                                    <PieChart
                                        data={[
                                        { title: 'Done', value: listStatusDone, color: 'DarkOrchid', },
                                        { title: 'Ongoing', value: listStatusOngoing, color: 'DarkMagenta', },
                                        ]}
                                        />
                                    </div>
            </div>
            <br/>
            <div class="row g-3">
                <div class="col-md-6">
                    <label style={{backgroundColor:'DodgerBlue'}}>Major issues </label>
                        </div>
                            <div class="col-md-6">
                                <label style={{backgroundColor:'DeepSkyBlue'}}>Minor issues </label>
                                    </div>
                                        <div class="col-md-8">
                                        <PieChart
                                            data={[
                                            { title: 'Major', value: listMajorIssue, color: 'DodgerBlue', },
                                            { title: 'Minor', value: listMinorIssue, color: 'DeepSkyBlue', },
                                            ]}
                                            />
                                        </div>
                </div>
                <br/>

    </div>
  )
}

export default ReportPage
