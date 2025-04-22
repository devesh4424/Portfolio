import React from "react";
import { Link } from "react-router-dom";


const AnimeImageCard = ({
  title,
  href,
  imgName,
  altTitle,
  starred,
}) => {
  const altTitleElement = altTitle ? (
    <div className="text-xs text-gray-900 dark:text-gray-200 italic font-semibold opacity-75">
      ({altTitle})
    </div>
  ) : null;
    console.log(imgName);
  return (
    
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="relative h-40 md:h-36 focus:outline-none transition duration-300 ease-in-out bg-black transform hover:scale-102.5 flex flex-col sm:flex-row text-center sm:text-left shadow-lg max-w-xl group"
    > 
      {/* <div
        className=""
        style={{ backgroundImage: `url("../Assets/AnimeImage/${imgName}.webp")` }}
      ></div> */}

      <img className="transition duration-300 md:object-cover ease-in-out  object-top  rounded-md bg-cover absolute w-full h-full group-hover:opacity-40" src={imgName} alt={altTitle} />


      {/* <img src="" alt="" /> */}
      <div className="transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 ml-0 sm:ml-4 z-40 text-2xl my-auto font-bold">
        <div className="text-white">{title}</div> {altTitleElement}
      </div>
    </a>
  );
};

export default AnimeImageCard;
