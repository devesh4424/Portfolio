import React from "react";
import Books from "../../Assets/books.png";

const BooksCard =  () => {
  return (
    <a
      href="https://literal.club/bhavesh03"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-95 duration-500 transform-gpu"
    >
      <div className="h-20 relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        {/* <LogosVisualStudioCode  /> */}
        <img src={Books}  className="absolute blur-sm text-[60px] top-0 -left-8 brightness-50"/>
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
            Books📚
        </span>
        {/* <span className="text-sm">coding stats</span>
        <span className="text-[10px]">(wakatime)</span> */}
      </div>
    </a>
  );
};


export default BooksCard;