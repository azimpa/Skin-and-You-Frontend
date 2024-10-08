import React from 'react';
import './ServiceCards.css';
import Tightening from '../assets/Images/Tightening.ico';
import FatLoss from '../assets/Images/FatLoss.ico';
import HairRemoval from '../assets/Images/HairRemoval.ico';
import TattooRemoval from '../assets/Images/TattooRemoval.ico';
import Botox from '../assets/Images/Botox.ico';

const ServiceCard = ({ icon, title, description, color }) => (
    <div className={`service-card ${color}`}>
        <div className="icon-container">
            <img src={icon} alt={title} className="icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="know-more-btn">Know More</button>
    </div>
);

const ServiceCards = () => {
    const services = [
        {
            icon: HairRemoval,
            title: 'Body & face laser hair removal',
            description: 'Experience smooth, hair-free skin with our...',
            color: 'green'
        },
        {
            icon: TattooRemoval,
            title: 'Tattoo removal',
            description: 'Safely erase unwanted tattoos with precision...',
            color: 'pink'
        },
        {
            icon: FatLoss,
            title: 'Fat Loss & Inch loss',
            description: 'Achieve your body goals with non-invasive,...',
            color: 'yellow'
        },
        {
            icon: Botox,
            title: 'Botox',
            description: 'Effortlessly smooth wrinkles and rejuvenate...',
            color: 'light-pink'
        },
        {
            icon: Tightening,
            title: 'Body and Face Tightening',
            description: 'Lift and tighten sagging skin with our cutting-...',
            color: 'blue'
        }
    ];

    return (
        <div className="service-cards-container">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    );
};

export default ServiceCards;