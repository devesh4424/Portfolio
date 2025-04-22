import { SiLeetcode } from "react-icons/si"; // Added LeetCode icon
import { CalendarDays, Linkedin } from "lucide-react";

export const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href="https://www.linkedin.com/in/deveshzinzuwadia/"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
      >
        <Linkedin />
        <p className="text-[12px] text-white/90 -rotate-3">
          (serious stuff 😤)
        </p>
      </a>
      <a
        href="https://leetcode.com/devesh_Z100/" // Replace with your actual LeetCode URL
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#FFA116] w-full"
      >
        <SiLeetcode className="text-2xl" />
        <p className="text-[12px] text-white/90">(DSA grind 🧠)</p>
      </a>
    </div>
  );
};

export default LinksCard;
