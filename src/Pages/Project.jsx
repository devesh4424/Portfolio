import React from 'react';
import projectData from '../Utils/ProjectData';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Project = () => {
  return (
    
    <div className=" bg-[#000000] min-h-screen">
      <Navbar />
      <div className="container mx-auto min-h-screen py-6 px-3 ">
        <ProjectList projects={projectData} />
      </div>
      <Footer />
    </div>
  );
};

export default Project;
