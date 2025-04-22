import React from 'react';
import { FaCode } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const ProjectList = ({ projects }) => {
  return (
    <div className=" font-Inter flex flex-wrap gap-4 md:gap-8 justify-center">
      {projects.map((project) => (
        <div
          className='bg-[#1F2121] text-wh rounded-xl shadow-sm overflow-hidden w-full md:w-96' 
          key={project.id}
          style={{ marginBottom: '2rem' }}
        >
          <div className="relative">
            <img
              src={project.imageURL} 
              alt={project.name}
              className=" w-full p-[2rem] h-auto hover:scale-110 transition-transform duration-300"
            />
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
            {project.description.split('\n').map((line, index) => (
                <p key={index} className="mb-3 font-semibold text-[#DCDFE4]">{line}</p>
            ))}
            <div className="mb-3">
              <strong className='text-teal-400 text-lg'>Tech Stack:</strong> 
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-[#4A5568] text-white font-semibold px-2 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-2 mb-2 flex justify-center items-center">
            {/* <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-[#4BCE97] hover:scale-105 border border-neutral-200 rounded-lg font-bold  transition-colors duration-300 "
              
            >
              GitHub Repo
            </a> */}
            <Link to={project.githubLink}>
              <Button colorScheme='blue' borderRadius='22px' leftIcon={<FaCode />}>Github</Button>
            </Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
