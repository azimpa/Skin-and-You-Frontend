import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Modal from './Modal';

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <h1>Skin<span>&</span>You</h1>
          <p>CLINIC</p>
        </div>
        <nav>
          <ul>
            <li><Link to="/" className="active">HOME</Link></li>
            <li><Link to="/">TREATMENTS</Link></li>
            <li><Link to="/">TREATMENT BY CONCERN</Link></li>
            <li><Link to="/">MEDIA</Link></li>
            <li><Link to="/">ABOUT</Link></li>
            <li><Link to="/">CONTACT</Link></li>
          </ul>
        </nav>
        <div className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
      </header>
      <main className="main-content">
        <div className="hero-text">
          <h2>Look Better<br /><span>Feel Better</span></h2>
          <p>Instantly Smooth Away Wrinkles and Scars<br />for a Fresh, Youthful Glow</p>
          <div className="cta-buttons">
            <button className="call-now">Call Now</button>
            <button className="book-now" onClick={openModal}>Book Now</button>
          </div>
        </div>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Home;