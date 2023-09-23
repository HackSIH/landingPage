import React from 'react';
import './About.css';
function About() {
  const img={
    "url1":"https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "url2":"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "url3":"https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "url4":"https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
  }
  return (
    <div className="about">
      <h2 className="start1">ABOUT US</h2>
      <br/>
      <div className="card-container">
        <div className="card">
          <img src={img.url1} alt="Card 1" />
          <h3>DESIGN</h3>
          <p>Offer intuitive tools and templates for curriculum design.</p>
        </div>
        <div className="card">
          <img src={img.url2} alt="Card 2" />
          <h3>RESOURCES</h3>
          <p>A repository of educational resources, such as textbooks, articles, videos.</p>
        </div>
        <div className="card">
          <img src={img.url3} alt="Card 3" />
          <h3>ANALYSE</h3>
          <p>Provide analytics and reporting features to track and analyze the effectiveness of curriculum designs.</p>
        </div>
        <div className="card">
          <img src={img.url4} alt="Card 4" />
          <h3>COLLABORATE</h3>
          <p>Allows users to invite others to review and provide feedback on their curriculum designs.</p>
      
        </div>
      </div>
    </div>
  );
}

export default About;
