import {
	animate,
	motion,
	useMotionValue,
	useMotionTemplate,
} from "framer-motion";
import { useEffect } from "react";

function HeroSection() {
	const tags = [
		"Web Developer",
		"UI/UX Designer",
		"Competitive Programmer",
		"Computer Science Student",
	];

	const COLORS = ["#7580F0", "#9966CC", "#8A2BE2", "#5A4FCF"];
	const color = useMotionValue(COLORS[0]);
	const backgroundImage = useMotionTemplate`radial-gradient(90% 600px at top center, ${color}, #222222)`;

	useEffect(() => {
		animate(color, COLORS, {
			ease: "easeInOut",
			duration: 2,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);

	return (
		<div className="py-32 px-16 w-full sm:h-dvh flex flex-col sm:justify-end gap-6 overflow-hidden">
			<motion.span
				className="absolute -z-10 h-dvh w-[100%] top-0 right-0"
				style={{
					backgroundImage: backgroundImage,
					maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					zIndex: -10,
				}}
			></motion.span>
			<motion.h1
				className="heading mt-6 sm:mt-0 text-center sm:text-start underline decoration-primary underline-offset-4 sm:underline-offset-6 md:underline-offset-8 lg:underline-offset-[10px]"
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.2, ease: "easeOut"}}
				viewport={{ once: true }}
			>
				Satyam Vyas
			</motion.h1>
			<motion.h1 className="text-[#222] my-4 gap-4 flex flex-wrap sm:justify-start justify-center items-center">
				{tags.map((item, idx) => (
					<motion.p
						variants={{
							hidden: {
								opacity: 0,
								x: -20,
							},
							visible: {
								opacity: 1,
								x: 0,
							},
						}}
						initial="hidden"
						whileInView="visible"
						transition={{ delay: 0.4 * idx, ease: "easeOut"}}
						viewport={{ once: true }}
						key={`tag${idx}`}
						className="bg-accent py-2 flex items-center justify-center font-SpaceBase px-2 rounded-lg text-sm text-center"
					>
						{item}
					</motion.p>
				))}
			</motion.h1>
			<motion.h1
				className="smallsubtext text-center sm:text-start"
				variants={{
					hidden: {
						opacity: 0,
						x: -20,
					},
					visible: {
						opacity: 1,
						x: 0,
					},
				}}
				initial="hidden"
				whileInView="visible"
				transition={{ delay: 0.4, ease: "easeOut"}}
				viewport={{ once: true }}
			>
				A Creative Mind from Mumbai, India
			</motion.h1>
		</div>
	);
}

export default HeroSection;
