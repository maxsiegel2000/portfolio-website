"use client"
import { SectionHeader } from "@/components/SectionHeader"
import { VerticalTimeline } from "@/components/vertical-timeline";
import { experiencesDataEnglish } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks"


export const EducationSection = () => {
	const { ref } = useSectionInView("Education", 0.5)
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
					{/* <VerticalTimeline lineColor="#6ee7b7">
					{experiencesDataEnglish.map((item, index) => (
						<VerticalTimelineElement
							visible={true}
							key={index} 
							contentStyle={{
								background: "#1e293b",
								boxShadow: "none",
								border: "2px solid rgb(255 255 255 / 0.2)",
								borderRadius: "1.5rem",
								padding: "1.3rem 2rem"
							}}
							date={item.date}
							icon={item.icon}
							iconStyle={{
								background: "#0f172a"
							}}>
								<h3 className="font-semibold">{item.title}</h3>
								<p className="!mt-0">{item.location}</p>
								<p className="!mt-1 text-white/60">{item.description}</p>
						</VerticalTimelineElement>
						))}
					</VerticalTimeline> */}
				</div>
			</div>
		</section>
	)
}