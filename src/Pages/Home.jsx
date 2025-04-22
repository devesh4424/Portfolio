import React, { useState, useEffect } from "react";

import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Footer from "../Components/Footer";
// import { ageInYears } from '../Utils/lib/AgeInYears';
import { getFormattedTime } from "../Utils/lib/Time";
import GhCard from "../Components/Cards/Ghcard";
import { LinksCard } from "../Components/Cards/LinksCard";
import MailCard from "../Components/Cards/MailCard";
import ResumeCard from "../Components/Cards/ResumeCard";

function App() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentTime(getFormattedTime()),
      1000
    );
    return () => clearInterval(intervalId);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-[#000000]">
      <main className="flex-grow min-h-screen flex flex-col items-center justify-center  p-5 rounded">
        <div className="text-white title font-bold text-4xl md:text-6xl text-center">
          <p>Hi!👋🏻I am</p>
          <span className="text-[#00D587]">Devesh Zinzuwadia</span>
        </div>
        <p className="text-zinc-500 description text-center text-xl md:text-2xl my-4">
          21y/o Developer, India • {currentTime}
        </p>
        <div className="flex p-2 w-max items-end gap-4">
          <Button
            _hover={{ bg: "#CDCDCE" }}
            borderColor="white"
            bgColor={"white"}
            onClick={() => navigate("/project")}
            variant="outline"
          >
            Projects
          </Button>
          <Button
            _hover={{ bg: "#CDCDCE" }}
            borderColor="white"
            bgColor={"white"}
            onClick={() => navigate("/skills")}
            variant="outline"
          >
            Skills
          </Button>
          <Button
            _hover={{ bg: "#CDCDCE" }}
            borderColor="white"
            bgColor={"white"}
            onClick={() => navigate("/blog")}
            variant="outline"
          >
            Blogs
          </Button>
          <Button
            _hover={{ bg: "#CDCDCE" }}
            borderColor="white"
            bgColor={"white"}
            onClick={() => navigate("/about")}
            variant="outline"
          >
            About
          </Button>
        </div>
        <div className="mt-3 w-96">
          <GhCard />
        </div>
        <div className="flex flex-col mt-3 col-span-3">
          <div className="flex gap-3">
            <div className="w-24">
              <MailCard />
            </div>
            <div className="flex flex-col gap-4 w-[17rem] ">
              <LinksCard />
              <ResumeCard />
            </div>
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
