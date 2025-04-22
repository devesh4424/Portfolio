import Project1Image from '../Assets/notion avatar.png';
import SurakshaImage from '../Assets/suraksha.png';
import DeployhubImage from '../Assets/Deployhub.png';
import ChatAppImage from '../Assets/ChatApp.png';
import VolumeCImage from "../Assets/VolumeC.png";

const projectData = [
  {
    "id": 1,
    "name": "Polling Application (MERN)",
    "description": `• Creating functionality to vote and store the votes for each option and DB display.
    • The result of the pool is shown in graphical format with the help of React Chart doughnut.`,
    "imageURL": "https://user-images.githubusercontent.com/56782318/174740494-fbe87032-ab63-445b-a385-bf4010a663d9.png",
    "techStack": ["React", "Node.js","ExpressJS", "MongoDB"],
    "githubLink": "https://github.com/bhavesh-03/Polling-System-MERN-/blob/main/README.md?plain=1",
    "liveDemoLink": "https://example.com/project1-demo"
  },
  {
    "id": 2,
    "name": "Suraksha – (SIH 2023)",
    "description": `• A Rescue Agency to Agency communication Application for resource allocation at the time calamity.
    • Map functionality, Security, and Alert response are implemented according to problem statement requirements.`,
    "imageURL": SurakshaImage,
    "techStack": ["React Native", "Express,js", "NodeJS", "MongoDB", "Google Maps API"],
    "githubLink": "https://github.com/bhavesh-03/Suraksha-Frontend-SIH-2023",
    "liveDemoLink": "https://example.com/project2-demo"
  },
  {
    "id": 3,
    "name": "Deployhub ‐ (Deployment Application)",
    "description": `• Implemented Docker automation to clone, build, and push app builds to AWS S3, boosting deployment reliability and scalability.
• Orchestrated reverse proxy configurations to efficiently route subdomains and domains to corresponding S3 bucket static assets, optimizing resource utilization and accessibility.`,
    "imageURL": DeployhubImage,
    "techStack": ["ReactJs", "NodeJS", "Redis", "AWS","Dcoker"],
    "githubLink": "https://github.com/bhavesh-03/Deployhub-Your-Deployment-Companion",
    "liveDemoLink": "https://example.com/project3-demo"
  },
  {
    "id": 4,
    "name": "Chat-application-using-C ",
    "description": `• Created robust server‐side logic to manage multiple client connections concurrently, utilizing POSIX threads for efficient handling. 
    • Implemented client‐side functionality to establish connections with the server, send/receive messages, and gracefully handle disconnections.`,
    "imageURL":ChatAppImage,
    "techStack": ["C Programming Language",
"POSIX Sockets (Socket Programming)", "POSIX Threads (Multi‐threading)"],
    "githubLink": "https://github.com/bhavesh-03/Chat-application-using-C",
    "liveDemoLink": "https://example.com/project3-demo"
  },
  {
    "id": 5,
    "name": "Volume controller using hand gestures",
    "description": "Controlling device volume with hand gesture made using Python medipipe and pycaw library which divides hands into a number of points for tracing.",
    "imageURL": VolumeCImage,
    "techStack": ["Python Programming Language", "Mediapipe", "NumPy", "Pycaw"],
    "githubLink": "https://github.com/bhavesh-03/Hand-gesture-for-volume-control",
    "liveDemoLink": "https://example.com/project3-demo"
  }
]


export default projectData;
