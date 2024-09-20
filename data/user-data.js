import TiktokSquare from "@/public/svgs/TiktokSquare";
import { BsLinkedin } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

export const userData = {
  githubUser: "realg701",
  devUsername: "realg701",
  socials: [
    {
      title: "https://github.com/realg701",
      icon: <FaGithubSquare size={32} />,
    },
    {
      title: "https://www.linkedin.com/in/abdul-haseeb-qadir-6283a9275/",
      icon: <BsLinkedin size={28} />,
    },
    {
      title: "https://twitter.com/realg701/",
      icon: <FaTwitterSquare size={32} />,
    },
    {
      title: "https://youtube.com/@realg701",
      icon: <FaYoutubeSquare size={32} />,
    },
    {
      title: "https://instagram.com/en_ediut",
      icon: <FaInstagramSquare size={32} />,
    },
    {
      title: "https://www.facebook.com/realg701/",
      icon: <FaFacebookSquare size={32} />,
    },
    { title: "https://tiktok.com/@en_ediut", icon: <TiktokSquare size={28} /> },
  ],
  resume:
    "https://docs.google.com/document/d/1DjFNn43OjHRhX17MuwYo_ZIfnx6F3yECZZyK5fEe5eQ/edit?usp=sharing",
  frameworks: ["ReactJS", "NextJS"],
  libraries: [, "TailwindCSS", "Bootstrap", "MUI"],
  technologies: ["NextJS", "ReactJS", "ExpressJS"],
  languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
  databases: ["MongoDB", "Firebase"],
  timezone: "+5",
};
