import React from 'react';
import Home from './Home';
import DoctorProfile from './DoctorProfile';
import ServiceCards from './ServiceCards';
import InstagramPosts from './InstagramPosts';
import Footer from './Footer';

export default function SPA() {
    return (
        <div>
            <Home />
            <DoctorProfile />
            <ServiceCards />
            <InstagramPosts />
            <Footer />
        </div>
    );
}
