import React from 'react';
import "./App.css"

const Play = ({ setPage }) => {
  return (
    <div>
      <div className="navbar">
        <img className='Kal' src="https://media.licdn.com/dms/image/C560BAQEmI-b9h9lQ9Q/company-logo_200_200/0/1662977309233/kalvieducation_logo?e=2147483647&v=beta&t=5SHkVfvYHYtAF_5MxcVfP6N9ag2GCzYryCrFm1pxsQ8" alt="" />
        <h1 style={{marginRight:"35vw"}}> Welcome to Konfident Quizz</h1>
       
      </div>
      <button className='button' onClick={()=>{setPage("mainpage")}} style={{marginTop:"20vh"}}>Play</button>
    </div>
  );
};

export default Play;
