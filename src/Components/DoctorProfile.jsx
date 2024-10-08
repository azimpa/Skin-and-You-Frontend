import React, { useState } from 'react';
import './DoctorProfile.css'
import DP from '../assets/Images/DP.png';
import Modal from './Modal';

const DoctorProfile = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="profile-container">
            <h2 className="about-us">About Us</h2>
            <div className="profile-content">
                <div className="image-container">
                    <img
                        src={DP}
                        alt="Dr. Geeta Mehra Fazalbhoy"
                        className="profile-image"
                    />
                </div>
                <div className="profile-text">
                    <h1>DR. GEETA MEHRA<br /><span className="last-name">FAZALBHOY</span></h1>
                    <p>
                        Dr. Geeta Mehra Fazalbhoy, MD & Founder of Skin & You Clinic, Mumbai, is a globally
                        recognized expert in dermatology and aesthetic medicine. With advanced
                        international training and certifications, she specializes in cutting-edge, pain-free
                        treatments for skin tightening, pigmentation, and body contouring. Her clinic is ranked
                        among the top in India, attracting patients worldwide.
                    </p>
                    <div className="profile-buttons">
                        <button className="btn know-more">KNOW MORE</button>
                        <a href="https://www.instagram.com/drgeetafazalbhoy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                            <button className="btn instagram">INSTAGRAM</button>
                        </a>
                    </div>
                </div>
            </div>
            <button className="book-appointment" onClick={openModal}>Book Appointment</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default DoctorProfile;