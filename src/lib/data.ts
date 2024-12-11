import { GraduationCap } from "lucide-react"
import { School, Hospital,Computer,Forklift } from "lucide-react"
import React from "react"

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
		description: "I dropped out of college after two semesters because I didn't enjoy it",
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