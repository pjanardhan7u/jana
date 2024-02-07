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
    name: "Gallery",
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
    title: "Portfolio+Blog",
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
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "bootstrap",
  "MongoDB",
  "Express",
  "MySQL",
  "Filmora-13",
  "MS Office",
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

export const people = [
  {
    id: 1,
    image: "/images/people/rgv.jpg",
    name: "RGV",
    title:"Philosopher",
    quote:"The sooner you let go of what you heard from your parents, what you learned in school, what you learned from society, the sooner you become intelligent.",
  },
  {
    id: 2,
    image: "/images/people/jana.jpg",
    name: "Jana",
    title:"Explorer",
    quote:
      "Deep within you, there is a captive lion confined within a self-woven cage of your own ties. Day by day, you feed it leaves and grass. It is very tired of eating them. It is dreaming of hunting.Break the shackles once and see its prey beneath the moon and stars.",
  },
  {
    id: 3,
    image: "/images/people/sreenu2.png",
    name: "Sreenu",
    title:"Physics Lecturer",
    quote:
      "A frog in the well thinks that he is the king of the world and knows nothing about the sea.",
  },
  {
    id: 4,
    image: "/images/people/maadhavi.png",
    name: "Maadhavi",
    title:"Maths Lecturer",
    quote:"The future belongs to those who believe in the beauty of their dreams.",
  },
 
  {
    id: 5,
    image: "/images/people/nietzche.jpg",
    name: "Friedrich Nietzsche",
    title:"Philosopher",
    quote: "Faith is not wanting to know what is true.",
  },
  {
    id: 6,
    image: "/images/people/ayand-rand.jpg",
    name: "Ayn Rand",
    title:"Philosopher",
    quote: "We live the life of others when we read their thoughts.",
  },

] as const;
