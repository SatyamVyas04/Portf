import { motion } from "framer-motion";
import LeetCode from "./LeetCode";

const Descriptions = [
	{
		title: "My Work at CSI-S.P.I.T",
		description: (
			<div className="smallsubtext flex flex-col gap-4 pb-8">
				<p>
					I work at the Computer Society of India, S.P.I.T, where I've
					undertaken a diverse array of responsibilities. From
					handling the intricate process of{" "}
					<span className="text-primary">
						certificate creation to automating ID generation using
						Python scripts
					</span>
					, my role has been dynamic and challenging.
				</p>
				<p>
					One of my significant contributions was towards the{" "}
					<span className="text-primary">
						development of the college hackathon website
					</span>
					, tailored specifically for the S.P.I.T Hackathon held in
					February. Collaborating closely with a talented team, I
					ensured the smooth functioning and user experience of the
					website, which served as a cornerstone for the successful
					execution of the event.{" "}
					<span className="text-primary">
						My journey at CSI S.P.I.T has been a profound learning
						experience, enriching me both professionally and
						personally.
					</span>
				</p>

				<a
					href="https://hackathon.spit.ac.in"
					target="_blank"
					className="flex flex-row items-center justify-center bg-primary rounded-full p-2 px-4 gap-4 mt-2 text-[#222]"
				>
					<h1 className="">Visit the Website</h1>
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
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
				</a>
			</div>
		),
	},
	{
		title: "Me :)",
		description: (
			<div className="smallsubtext flex flex-col gap-4 pb-8">
				<p>
					I hail from the city of{" "}
					<span className="text-primary">Mumbai</span>, often dubbed
					the "city of dreams." It's here amidst the bustling streets
					and vibrant culture that I've embarked on my educational
					journey, from the early days of grade school to the
					challenges of high school. Now, as I navigate the corridors
					of higher education, I find myself{" "}
					<span className="text-primary">
						pursuing my Bachelor's degree at the esteemed Sardar
						Patel Institute of Technology, Mumbai
					</span>
					. This city has been more than just a backdrop; it's been a
					constant source of inspiration and growth, shaping my
					aspirations and molding my character. I approach each day
					with enthusiasm, curiosity, and a steadfast determination to
					make a positive impact on the world around me.
				</p>
				<a
					href="https://www.instagram.com/vyasatyam/"
					target="_blank"
					className="flex flex-row items-center justify-center bg-primary rounded-full p-2 px-4 gap-4 mt-2 text-[#222]"
				>
					<h1 className="">Visit my InstaGram</h1>
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
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
				</a>
			</div>
		),
	},
	{
		title: "My Tech Stack",
		description: (
			<div className="smallsubtext flex flex-col gap-4 pb-8">
				<motion.h4
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
				>
					Languages
				</motion.h4>
				<motion.p
					className="flex flex-row flex-wrap items-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 0.4 }}
				>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/python-FFDD54?style=for-the-badge&logo=python&logoColor=3670A0"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"
					/>
				</motion.p>

				<motion.h4
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 0.6 }}
				>
					Frameworks, Libraries and Databases
				</motion.h4>
				<motion.p
					className="flex flex-row flex-wrap items-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 0.8 }}
				>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&logo=greensock&logoColor=black"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
					/>
				</motion.p>

				<motion.h4
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 1 }}
				>
					Hosting/SaaS
				</motion.h4>
				<motion.p
					className="flex flex-row flex-wrap items-center gap-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeOut", duration: 0.2, delay: 1.2 }}
				>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/pythonanywhere-%232F9FD7.svg?style=for-the-badge&logo=pythonanywhere&logoColor=black"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=black"
					/>
					<img
						className="rounded-xl"
						src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
					/>
				</motion.p>
			</div>
		),
	},
	{
		title: "Competitive Programming on CodeChef",
		description: (
			<div className="smallsubtext flex flex-col gap-4 pb-8">
				<p>
					My journey on the Codechef platform has been a rewarding
					adventure marked by continuous learning and problem-solving.
					Currently rated at{" "}
					<span className="text-primary">1623</span> and holding the
					esteemed <span className="text-primary">3 Stars badge</span>
					, With a tally of{" "}
					<span className="text-primary">
						89 practice problems conquered
					</span>{" "}
					and <span className="text-primary">57 contests</span>, I've
					navigated through an array of algorithms and data
					structures, refining my problem-solving abilities.
				</p>
				<a
					href="https://www.codechef.com/users/satyam_vyas_04"
					target="_blank"
					className="flex flex-row items-center justify-center bg-primary rounded-full p-2 px-4 gap-4 mt-2 text-[#222]"
				>
					<h1 className="">Visit my Profile</h1>
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
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
				</a>
			</div>
		),
	},
	{
		title: "LeetCode Statistics",
		description: <LeetCode />,
	},
	{
		title: "My Journey on GitHub",
		description: (
			<div className="smallsubtext flex flex-col gap-4 pb-8">
				<figure className="border-2 border-primary rounded-xl bg-primary">
					<img
						src="https://holopin.me/satyamvyas04"
						alt="Image of All Badges and Stickers Earned in Hacktoberfest 2023"
						className="rounded-t-xl"
					/>
					<figcaption className="bg-primary p-2 rounded-b-xl text-[#222]">
						All Badges and Stickers earned during Hacktoberfest
						2023, GitHub
					</figcaption>
				</figure>
				<p>
					Working within the vibrant ecosystem of open source on
					GitHub has been an immensely enriching journey for me. With
					a fervent passion for collaboration and innovation, I've
					dedicated myself to contributing to notable repositories
					such as <span className="text-primary">Conda</span>, among
					others. The exhilarating buzz of
					<span className="text-primary"> Hacktoberfest '23</span> saw
					me not only making significant contributions but also
					earning several badges, a testament to my commitment and
					involvement. My journey on GitHub reflects my unwavering
					dedication, evident in my prolific activity:{" "}
					<span className="text-primary">
						crafting 496 contributions in 2024 alone, building upon
						the 781 contributions in 2023 and 172 in 2022
					</span>
					. These numbers, however, only scratch the surface of my
					involvement; I've poured my heart and soul into coding,
					culminating in a staggering{" "}
					<span className="text-primary">
						1.4 million lines of code written as per WakaTime
						Statistics
					</span>
					. Each line a testament to my belief in the power of open
					collaboration and the boundless potential of the open-source
					community.
				</p>
				<a
					href="https://github.com/SatyamVyas04"
					target="_blank"
					className="flex flex-row items-center justify-center bg-primary rounded-full p-2 px-4 gap-4 mt-2 text-[#222]"
				>
					<h1 className="">Visit my GitHub Profile</h1>
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
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
				</a>
			</div>
		),
	},
];

export default Descriptions;
