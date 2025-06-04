import React from "react";
import { Image, Box } from "@chakra-ui/react";
import { FaJava } from "react-icons/fa";
import Navbar from "../Components/NavBar";
import JavaSVG from "../Assets/SkillsIcon/java.svg";
import SpringBootSVG from "../Assets/SkillsIcon/spring-boot.svg";
import TypeScriptSVG from "../Assets/SkillsIcon/typescript.svg";
import CppSVG from "../Assets/SkillsIcon/c.svg";
import PythonSVG from "../Assets/SkillsIcon/python.svg";
import HTMLSVG from "../Assets/SkillsIcon/html.svg";
import CSSSVG from "../Assets/SkillsIcon/css.svg";
import JSSVG from "../Assets/SkillsIcon/javascript.svg";
import ReactSVG from "../Assets/SkillsIcon/react.svg";
import NodeSVG from "../Assets/SkillsIcon/nodejs.svg";
import ExpressSVG from "../Assets/SkillsIcon/express (1).svg";
import MongoDBSVG from "../Assets/SkillsIcon/mongodb.svg";
import MySQLSVG from "../Assets/SkillsIcon/mysql.svg";
import GitSVG from "../Assets/SkillsIcon/git.svg";
import GitHubSVG from "../Assets/SkillsIcon/github.svg";
import DockerSVG from "../Assets/SkillsIcon/docker.svg";
import AWS from "../Assets/SkillsIcon/aws.svg";
import GCSVG from "../Assets/SkillsIcon/google-cloud.svg";
import FirebaseSVG from "../Assets/SkillsIcon/firebase.svg";
import TailwindSVG from "../Assets/SkillsIcon/tailwind-css.svg";
import VercelSVG from "../Assets/SkillsIcon/logo-vercel-svgrepo-com.svg";
import VSCodeSVG from "../Assets/SkillsIcon/visual-studio-code.svg";
import Footer from "../Components/Footer";

const Skills = () => {
  return (
    <div className="bg-[#000000] flex flex-col min-h-screen ">
      <Box className="min-h-screen">
        <Navbar />
        <Box className="px-6 pt-8 mx-auto max-w-screen-lg">
          <div className="heading relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white z-10">
              Skills
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-teal-400 absolute top-6 md:top-8">
              Programming
            </h2>
          </div>
        </Box>

        <Box className="flex flex-row flex-wrap my-3 pb-8 bg-white px-6 pt-8 mt-11 gap-24 max-w-screen-lg md:mx-auto mx-7 items-center justify-evenly rounded-3xl">
          <Image
            src={CppSVG}
            title="C++"
            alt="Cpp Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={PythonSVG}
            title="Python"
            alt="Python Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={JavaSVG}
            title="Java"
            alt="Java Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={SpringBootSVG}
            title="Spring Boot"
            alt="Spring Boot Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={TypeScriptSVG}
            title="TypeScript"
            alt="TypeScript Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={JSSVG}
            title="JavaScript"
            alt="Javascript Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={HTMLSVG}
            title="HTML"
            alt="HTML Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={CSSSVG}
            title="CSS"
            alt="CSS Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={ReactSVG}
            title="React JS"
            alt="React Logo"
            width="70"
            height="70"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={NodeSVG}
            title="Node.js"
            alt="node Logo"
            width="70"
            height="70"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={ExpressSVG}
            title="Express"
            alt="Express Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={MongoDBSVG}
            title="MongoDB"
            alt="MongoDB Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={MySQLSVG}
            title="MySQL"
            alt="MySql Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={GitSVG}
            title="Git"
            alt="Git Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={GitHubSVG}
            title="GitHub"
            alt="Github Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={DockerSVG}
            title="Docker"
            alt="Docker Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={AWS}
            title="AWS"
            alt="AWS Logo"
            width="65"
            height="65"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={GCSVG}
            title="Google Cloud"
            alt="Google Cloud Logo"
            width="65"
            height="65"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={FirebaseSVG}
            title="Firebase"
            alt="Firebase Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={TailwindSVG}
            title="Tailwind CSS"
            alt="Tailwind Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={VercelSVG}
            title="Vercel"
            alt="vercel Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
          <Image
            src={VSCodeSVG}
            title="VS Code"
            alt="VScode Logo"
            width="90"
            height="90"
            className="skill-icon hover:scale-125"
          />
        </Box>
      </Box>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Skills;
