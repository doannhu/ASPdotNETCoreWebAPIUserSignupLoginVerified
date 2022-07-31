import './App.css';
import React from 'react';
import DisplayAllPosts from './pages/DisplayAllPosts';
import CreatePost from './components/CreatePost';
import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';
import {ReactComponent as BugIcon} from './assests/bug-fill.svg'
import ReportPage from './pages/ReportPage';
import RegisterUsers from './users/RegisterUsers';
import LoginUser from './users/LoginUser';


function App() {
  return (
  <BrowserRouter>
    <div className="container"> 
      <div className='row min-vh-100'>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>
            Bug Tracker
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
            </h1> 

            <br/>
              <p class="h3">An app for <mark> every </mark>software development team.</p>
                <div>
                  <br/><br/>
                
              <Link to={`/allPostsPage`}><button className="btn btn-info btn-lg w-100">Get all <span><BugIcon /></span> posts</button></Link><br /><br />
                <Link to={`/createPost`}><button className="btn btn-warning btn-lg w-100">Create new <span><BugIcon /></span> post</button></Link>
                  </div>

                  <div>
                <Routes>
              <Route path="/allPostsPage" element={<DisplayAllPosts />} />
            <Route path="/createPost" element={<CreatePost />} />
          <Route path="/updatePost/:getPostId" element={<UpdatePost />} />
        <Route path="/deletePost/:getPostId" element={<DeletePost />} />
      <Route path="/report" element={<ReportPage />} />
    <Route path="/register" element={<RegisterUsers />} />
    <Route path="/login" element={<LoginUser />} />
      </Routes>
        </div>
          </div>
            </div>
              </div>
                </BrowserRouter>
  );
}

export default App;
