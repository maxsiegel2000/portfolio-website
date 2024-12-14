import { TechIcon } from "@/components/TechIcon";
import { toolboxItems } from "@/lib/data";
import { twMerge } from "tailwind-merge";

export const ToolboxItems = ({className, itemsWrapperClassName}:{
	className?: string
	itemsWrapperClassName?: string
}) => {
	return(
		<div className={twMerge("", className)}>
			<div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
				{toolboxItems.map(item => (
					<div 
					key={item.title} 
					className="inline-flex items-center rounded-xl gap-4 py-2 px-3 outline outline-2 dark:outline-white/10 outline-black/10 dark:hover:outline-white hover:outline-black">
						<TechIcon component={item.iconType}/>
						<span className="font-semibold">{item.title}</span>
					</div>
				))}
			</div>
        </div>
	)
}