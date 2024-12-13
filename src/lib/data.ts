import { GraduationCap } from "lucide-react"
import { School, Hospital,Computer,Forklift } from "lucide-react"
import React from "react"
import powerUpImage from "@/assets/images/PowerUpProject.png";
import NextAuthImage from "@/assets/images/NextAuth.png";
import PortfolioWebsite from "@/assets/images/PortfolioWebsite.png";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSS3Icon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import FigmaIcon from "@/assets/icons/figma.svg"
import NextJSIcon from "@/assets/icons/nextjs-icon.svg"
import SwiftIcon from "@/assets/icons/swift.svg"

export const links = [
	{
		name: "Home",
		hash: "#home"
	},
	{
		name: "Projects",
		hash: "#projects"
	},
	{
		name: "About",
		hash: "#about"
	},
	{
		name: "Education",
		hash: "#education"
	},
	{
		name: "Contact",
		hash: "#contact"
	},
]as const

export const experiencesDataEnglish = [
	{
		title: "Graduation",
		location: "Germany, Berlin",
		description: "I graduated from high school with a grade of 2.7.",
		icon: React.createElement(GraduationCap),
		date: "june 2019"
	},
	{
		title: "Study Industrial Engineering",
		location: "Germany, TH-Wildau",
		description: "I dropped out of college after two semesters because it didn't suit me.",
		icon: React.createElement(School),
		date: "october 2019 - june 2020"
	},
	{
		title: "Voluntary Social Year",
		location: "Germany, Charité",
		description: "I wanted to work in a completely new area, so I gained experience in the hospital.",
		icon: React.createElement(Hospital),
		date: "september 2020 - august 2021"
	},
	{
		title: "Forklift Driver",
		location: "Germany, IKEA-Berlin",
		description: "As a student I have a well-paid job with very good working hours.",
		icon: React.createElement(Forklift),
		date: "october 2021 - present"
	},
	{
		title: "Stuy Business Software Engenieering",
		location: "Germany, TU-Berlin",
		description: "I have always been interested in computer science and economics.",
		icon: React.createElement(Computer),
		date: "october 2021 - present"
	}
]
export const footerLinks = [
	{
	  title: "LinkedIn",
	  href: "https://www.linkedin.com/in/max-siegel-97b676304/"
	},
	{
	  title: "GitHub",
	  href: "https://github.com/maxsiegel2000"
	},
]
export const portfolioProjects = [
	{
	  company: "IPhone App",
	  year: "2022",
	  title: "PowerUp",
	  results: [
		{ title: "Figma Design System" },
		{ title: "Complete Login with Firebase" },
		{ title: "Frontend in SWIFT with custom Animations" },
	  ],
	  link: "",
	  image: powerUpImage,
	},
	{
	  company: "Private Project",
	  year: "2024",
	  title: "NextAuth",
	  results: [
		{ title: "Complete integration from NextAuth.js" },
		{ title: "Prisma ORM for MySQL Database" },
		{ title: "Connection to a Node.js server" },
	  ],
	  link: "https://github.com/maxsiegel2000/NextAuth",
	  image: NextAuthImage,
	},
	{
	  company: "Private Project",
	  year: "2024",
	  title: "Portfolio Website",
	  results: [
		{ title: "Full responsive NextJs website" },
		{ title: "Custome animation with little details!" },
		{ title: "Code divided into reusable components" },
	  ],
	  link: "https://github.com/maxsiegel2000/portfolio-website",
	  image: PortfolioWebsite,
	},
];

export const hobbies = [
	{
	  title: 'Fitness',
	  emoji: '🏋',
	  left: '5%',
	  top: '5%'
	},
	{
	  title: 'Swimming',
	  emoji: '🏊‍♂️',
	  left: '50%',
	  top: '5%'
	},
	{
	  title: 'Riding',
	  emoji: '🚴',
	  left: '35%',
	  top: '35%'
	},
	{
	  title: 'Jogging',
	  emoji: '🏃',
	  left: '45%',
	  top: '70%'
	},
	{
	  title: 'Gaming',
	  emoji: '🎮',
	  left: '70%',
	  top: '45%'
	},
	{
	  title: 'Music',
	  emoji: '🎵',
	  left: '-5%',
	  top: '50%'
	}
  ]
export const values:any = [
	"Reliability",
	"Teamwork",
	"Proactiveness",
	"Willingness to Learn",
	"Problem-Solving",
	"Integrity"
  ]
  export const toolboxItems = [
	{
	  title: 'JavaScript',
	  iconType: JavascriptIcon
	},
	{
	  title: 'HTML5',
	  iconType: HTMLIcon
	},
	{
	  title: 'CSS3',
	  iconType: CSS3Icon
	},
	{
	  title: 'React',
	  iconType: ReactIcon
	},
	{
	  title: 'Github',
	  iconType: GithubIcon 
	},
	{
	  title: 'Figma',
	  iconType: FigmaIcon
	},
	{
	  title: 'NextJS',
	  iconType: NextJSIcon
	},
	{
	  title: 'Swift',
	  iconType: SwiftIcon
	}
  ]