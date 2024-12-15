"use client"
import { SectionHeader } from "@/components/SectionHeader"
import { VerticalTimeline } from "@/components/vertical-timeline";
import { experiencesDataEnglish } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks"


export const EducationSection = () => {
	const { ref } = useSectionInView("Education", 0.25)
	return(
		<section
			className="py-16 lg:py-28 scroll-mt-10"
			id="education"
			ref={ref}>
			<div className="container">
				<SectionHeader
					eyebrow="My Education"
					title="A Insight Into My Past"
					description="Find out what I have done, what experienced and what i learned so far in my live."/>
				<div className="mt-20">
					<VerticalTimeline items={experiencesDataEnglish} />
				</div>
			</div>
		</section>
	)
}