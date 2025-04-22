import React from "react";
import { Emoji } from "../Utils/Emoji";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="">
      <div class="font-medium w-full max-w-screen-full flex flex-row mx-auto p-4  border-t-2 border-zinc-800 justify-evenly">
        <p className="text-white">
          <span>
            <Emoji />
          </span>{" "}
          {new Date().getFullYear()}
          <span className="text-zinc-300 dark:text-zinc-600">—</span> he{" "}
          <span className="text-zinc-300 dark:text-zinc-600">/</span>him
        </p>

        <a
          href="https://github.com/devesh4424"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center link text-zinc-200 underline "
        >
          <FaGithub class="mr-2" />
          Devesh Zinzuwadia
        </a>
      </div>
    </footer>
  );
};

export default Footer;
