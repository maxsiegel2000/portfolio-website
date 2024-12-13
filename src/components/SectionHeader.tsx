export const SectionHeader = ({
	title,
	eyebrow,
	description
}: {
	title: string,
	eyebrow: string,
	description: string
}) => {
	return(
		<>
			<div className="flex justify-center">
          		<p className="uppercase font-semibold tracking-widest gradient1 text-transparent bg-clip-text">
            		{eyebrow}
          		</p>
        	</div>
        	<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
				{title}
			</h2>
        	<p className="text-center md:text-lg lg:text-xl dark:text-white/60 text-black/60 mt-4 max-w-md mx-auto">
				{description}
			</p>
		</>
	)
}