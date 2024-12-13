import { twMerge } from "tailwind-merge"
import { ComponentPropsWithoutRef} from "react"

export const Card = ({className, children, ...other}: ComponentPropsWithoutRef<'div'>) => {
	return(
		<div 
			className={twMerge("dark:bg-slate-800 bg-slate-200 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl dark:after:outline-white/20 after:outline-black/20 after:pointer-events-none", className)} {...other}>
			{children}
		</div>
	)
}