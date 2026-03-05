import React from 'react';
import Navbar from '../components/Shared/Navbar';
import AboutMednix from '../components/Home/AboutMednix';
import OurDepartment from '../components/Home/OurDepartment';
import OurBenefits from '../components/Home/OurBenefits';
import MedicalProfessionals from '../components/Home/MedicalProfessionals';
import Footer from '../components/Shared/Footer';
import Latest from '../components/Home/Latest';
import Feedback from '../components/Home/Feedback';
import BookAppointment from '../components/Home/BookAppointment';
import Herosection from '../components/Home/Herosection';

const HomePage = () => {
    return (
        <div>
           <Navbar/>
           <Herosection/>
           <AboutMednix/>
           <OurDepartment/>
           <OurBenefits/>
           <MedicalProfessionals/>
           <Feedback/>
           <BookAppointment/>

           <Latest/>
           <Footer/>
        </div>
    );
};

export default HomePage;