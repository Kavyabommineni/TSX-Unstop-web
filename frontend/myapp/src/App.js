import React from "react";
import "./App.css";

const projects = [
  {
    title: "Slot-Based Online LPG Booking",
    description: "Developed a web application that allows users to book LPG cylinders based on available time slots.",
    link: "https://github.com/Kavyabommineni"
  },
  {
    title: "Early Detection of Alzheimer’s Disease",
    description: "This project involved creating a deep learning model for the early detection of Alzheimer’s disease using brain imaging data.",
    link: "https://github.com/Kavyabommineni"
  },
  {
    title: "Instant Review Analyzer",
    description: "The Instant Review Analyzer is a web application that uses natural language processing (NLP) and sentiment analysis to evaluate online reviews.",
    link: "https://github.com/Kavyabommineni"
  }
];


export default function App() {
  return (
    <div className="App">
      {/* Navigation Dashboard */}
      <nav className="navbar" style={{ backgroundColor: '#4A148C', color: '#fff', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="nav-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</div>
        <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0 }}>
          <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#intro" style={{ color: '#fff', textDecoration: 'none' }}>About Me</a></li>
          <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#resume" style={{ color: '#fff', textDecoration: 'none' }}>Resume</a></li>
        </ul>
        <div className="profile-pic">
          <img src="https://via.placeholder.com/40" alt="Kavya" style={{ borderRadius: '50%' }} />
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero" style={{ backgroundColor: '#E1BEE7', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to My Portfolio</h1>
        <button className="download-btn" onClick={() => window.open("/kavya_resume2.pdf", "_blank")} style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', backgroundColor: '#8E24AA', color: '#fff', border: 'none', borderRadius: '5px' }}>Download Resume</button>
      </section>

      {/* Intro Section */}
      <section id="intro" className="intro-section" style={{ padding: '2rem', backgroundColor: '#F3E5F5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>I am Kavya Bommineni, a passionate Frontend Developer with a strong interest in Artificial Intelligence. I enjoy creating clean, efficient, and scalable solutions. My background in full-stack development and machine learning empowers me to work on a wide range of projects—from intuitive web interfaces to AI-powered applications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section" style={{ padding: '2rem', backgroundColor: '#EDE7F6' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Projects</h2>
        <div className="projects-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                width: '300px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ marginBottom: '0.5rem' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#6A1B9A', textDecoration: 'none' }}>GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section" style={{ padding: '2rem', backgroundColor: '#F3E5F5' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Upload a New Resume</h2>
        <form action="http://localhost:5000/upload" method="POST" encType="multipart/form-data" style={{ textAlign: 'center' }}>
          <input type="file" name="resume" style={{ marginBottom: '1rem' }} />
          <br />
          <button type="submit" className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '1rem', backgroundColor: '#8E24AA', color: '#fff', border: 'none', borderRadius: '5px' }}>Upload Resume</button>
        </form>
      </section>
    </div>
  );
}
