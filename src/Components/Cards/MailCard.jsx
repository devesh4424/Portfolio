import React from "react";
import { Mail } from "lucide-react";
import mailimage from "../../Assets/@.png";
const MailCard = () => {
  return (
    <a
      href="mailto:deveshzinzuwadia1234@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-36 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
        <img
          className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg brightness-75 dark:brightness-50"
          src={mailimage}
          alt="Background"
        />
        <p className="font-bold -rotate-90 absolute top-10 bottom-16 text-white w-40">
          Mail Me
        </p>

        <Mail className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
      </div>
    </a>
  );
};

export default MailCard;
