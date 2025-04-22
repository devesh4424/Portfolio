import React from 'react';
import { MoveUpRight } from "lucide-react";
import SaturoAnime from "../../Assets/SaturoAnime.jpg";
import { Link } from 'react-router-dom';    

const AnimeCard = () => {
  return (
    <Link to="/anime">
      <div className="h-72 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
        <img
          className="absolute object-cover inset-0 w-full h-full -z-40 rounded-lg brightness-75 dark:brightness-50"
          src={SaturoAnime}
          alt="Background"
        />
        <p className="font-bold -rotate-90 absolute top-10 bottom-16 md:left-80 text-white w-40">
            アニメ一覧
        </p>
        <MoveUpRight  className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
      </div>
    </Link>
  );
};

export default AnimeCard;
