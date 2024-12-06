import { TechIcon } from "@/components/TechIcon";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import CSS3Icon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import FigmaIcon from "@/assets/icons/figma.svg"
import NextJSIcon from "@/assets/icons/nextjs-icon.svg"
import SwiftIcon from "@/assets/icons/swift.svg"
import { twMerge } from "tailwind-merge";

const toolboxItems = [
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
export const ToolboxItems = ({className, itemsWrapperClassName}:{
	className?: string
	itemsWrapperClassName?: string
}) => {
	return(
		<div className={twMerge("mask2", className)}>
			<div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
				{toolboxItems.map(item => (
				<div 
					key={item.title} 
					className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
					<TechIcon component={item.iconType}/>
					<span className="font-semibold">{item.title}</span>
				</div>
				))}
			</div>
        </div>
	)
}