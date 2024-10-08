import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const AppointmentModal = ({ isOpen, onClose }) => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({ name: '', email: '', query: '', phone: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, query, message } = formData;

        if (!name || !email || !phone || !query || !message) {
            return alert('Please fill in all fields');
        }

        try {
            const response = await axios.post(`${API_URL}/api/appointments`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    query: '',
                    phone: '',
                    message: '',
                });
                onClose();
            } else {
                alert('Error booking appointment');
            }
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('An error occurred while booking the appointment');
            }
        }
    };

    if (!isOpen) return null;


    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Book Appointment</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input
                            type="text"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            placeholder="Your Query"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit" className="submit-button">MAKE AN APPOINTMENT</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;
