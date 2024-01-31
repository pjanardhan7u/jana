import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "Blog",
    hash: "/blog",
  },
  {
    name: "About",
    hash: "/#about",
  },

  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Gallary",
    hash: "/#gallary",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const projectsData = [
  {
    title: "DevOverflow",
    description:
      "DevOverflow is similar to StackOverflow but with some extra features like AI answers and more. It is still ongoing project. ",
    tags: ["Next.Js", "TypeScript", "MongoDB", "TailwindCSS", "Clerk"],
    imageUrl: "/images/devoverflow.png",
    gitHubLink: "https://github.com/pjanardhan7u/devoverflow",
    link: "https://github.com/pjanardhan7u/devoverflow",
  },
  {
    title: "Portfolio+blog",
    description:
      "This is my portfolio+blog.I build it for my personal use. Soon I will integrate authentation in this website.",
    tags: ["Next.js", "Tailwind", "TypeScript", "MongoDB", "sanity"],
    imageUrl: "/images/portfolio.png",
    gitHubLink: "https://github.com/pjanardhan7u/portfolio",
    link: "https://janaa.me",
  },
  {
    title: "Escape Jungle Game",
    description:
      "This is my first projectwork that I built as a animated game. I build this from scratch with my own idea",
    tags: ["HTML", "Sass", "JavaScript"],
    imageUrl: "/images/escapeJungle.png",
    gitHubLink: "https://github.com/pjanardhan7u/Escape_Jungle",
    link: "https://pjanardhan7u.github.io/Escape_Jungle/",
  },

  {
    title: "NewsPulse",
    description:
      "NewsPulse is a news aggregator and weather app. It shows the latest news and weather of any city in the world.",
    tags: ["html", "Sass", "JavaScript", "API"],
    imageUrl: "/images/newspulse.png",
    gitHubLink: "https://github.com/pjanardhan7u/NewsPulse",
    link: "https://pjanardhan7u.github.io/NewsPulse/index.html",
  },
] as const;

export const skillsData = [
  "c++",
  "Java",
  "Python",
  "HTML",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "bootstrap",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "Filmora-13",
  "MSOffice",
  "Vercel",
] as const;

export const nonTectSkillsData = [
  "Multilingual",
  "Cooking",
  "Public Speaking",
  "Piano",
  "Speed Learner",
  "Smart Worker",
] as const;

export const SocialMediaData = [
  {
    name: "GitHub",
    imgURL: "/images/socialMedia/github.svg",
    link: "https://github.com/pjanardhan7u",
  },
  {
    name: "LinkedIn",
    imgURL: "/images/socialMedia/linkedin.svg",
    link: "https://www.linkedin.com/in/pjanardhan7u/",
  },
  {
    name: "Instagram",
    imgURL: "/images/socialMedia/instagram.svg",
    link: "https://www.instagram.com/pjanardhan7u/",
  },
  {
    name: "Twitter",
    imgURL: "/images/socialMedia/twitter.svg",
    link: "https://twitter.com/pjanardhan7u",
  },
  {
    name: "Facebook",
    imgURL: "/images/socialMedia/facebook.svg",
    link: "https://www.facebook.com/pjanardhan7u/",
  },
  {
    name: "YouTube",
    imgURL: "/images/socialMedia/youtube.svg",
    link: "https://www.youtube.com/@JanasOdyssey",
  },
] as const;

export const imgGalaryData = [
  {
    imgURL: "/images/galary/img1.jpg",
    alt: "img1",
  },
  {
    imgURL: "/images/galary/img2.jpg",
    alt: "img2",
  },
  {
    imgURL: "/images/galary/img3.jpg",
    alt: "img3",
  },
  {
    imgURL: "/images/galary/img4.jpg",
    alt: "img4",
  },
  {
    imgURL: "/images/galary/img5.png",
    alt: "img5e",
  },
  {
    imgURL: "/images/galary/img6.jpg",
    alt: "img6",
  },
  {
    imgURL: "/images/galary/img7.jpg",
    alt: "img7",
  },
] as const;
