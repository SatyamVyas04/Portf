import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Project = () => {
	return (
		<div className="sm:mt-16" id="Projects">
			<HorizontalScrollCarousel />
		</div>
	);
};

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section
			ref={targetRef}
			className="relative h-[300vh] bg-gradient-to-b from-base to-primary"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-4">
					{cards.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }) => {
	return (
		<div
			key={card.id}
			className="group relative sm:h-[400px] h-[300px] sm:w-[400px] w-[300px] overflow-hidden bg-base hover:shadow-[0px_0px_24px_#7580F0] transition-all mx-4 rounded-xl"
		>
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
			></div>
			<div className="absolute w-full h-full z-10 grid place-content-center group bg-transparent group-hover:bg-black/50 group transition-all">
				<a
					href={card.link}
					target="_blank"
					className="flex flex-col items-center"
				>
					<h1 className="cursor-pointer smallsubtext flex flex-row gap-2 items-center justify-center !text-[#222] p-4 bg-white rounded-full opacity-100 group-hover:opacity-0 transition-opacity absolute">
						{card.title}
					</h1>
					<div className="cursor-pointer smallsubtext flex flex-row gap-2 items-center justify-center !text-[#222] p-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
						<h1>Explore Now</h1>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
							/>
						</svg>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Project;

const cards = [
	{
		url: "/ProjectImages/Hackathon.png",
		title: "SPIT Hackathon 2024",
		link: "https://hackathon.spit.ac.in/",
		id: 1,
	},
	{
		url: "/ProjectImages/AgeCalculator.png",
		title: "Age Calculator",
		link: "https://satyamvyas04-agecalculator.vercel.app/",
		id: 2,
	},
	{
		url: "/ProjectImages/NewsLetter.png",
		title: "NewsLetter Form",
		link: "https://satyamvyas04.github.io/LearningFrontEnd/Projects/NewsLetter/",
		id: 3,
	},
	{
		url: "/ProjectImages/FAQAccordian.png",
		title: "FAQ Accordian",
		link: "https://satyamvyas04.github.io/LearningFrontEnd/Projects/FAQ-Accordion/",
		id: 4,
	},
	{
		url: "/ProjectImages/GSAPLoader.png",
		title: "GSAP Loader",
		link: "https://satyamvyas04.github.io/LearningFrontEnd/Projects/GSAPLoader/",
		id: 5,
	},
	{
		url: "/ProjectImages/CompanyStatsCard.png",
		title: "Statistics Card",
		link: "https://satyamvyas04.github.io/LearningFrontEnd/Projects/CompanyStatsCard/",
		id: 6,
	},
	{
		url: "/ProjectImages/ProductReview.png",
		title: "Product Card",
		link: "https://satyamvyas04.github.io/LearningFrontEnd/Projects/ProductCard/",
		id: 7,
	},
];
