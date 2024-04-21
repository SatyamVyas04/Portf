import Logo from "../assets/Logo.svg";
import GitHub from "../assets/GitHubLogo.svg";
import LinkedIn from "../assets/LinkedInLogo.svg";

const Footer = () => {
	return (
		<footer
			id="ContactMe"
			className="flex flex-col sm:flex-row items-center justify-center sm:p-16 p-12 gap-2 sm:gap-16"
		>
			<div className="bg-secondary w-full rounded-sm flex items-center justify-center pt-4">
				<img
					src={Logo}
					alt="RouteRover"
					className="w-[100%]"
					style={{
						filter: "drop-shadow(0 0 24px #7580F0)",
					}}
				/>
			</div>
			<div className="smallsubtext !text-primary flex gap-16 pb-8 flex-col sm:flex-row sm:items-center justify-evenly text-justify">
				<p>
					Feel free to connect with me via social media or email for
					collaboration, inquiries, or just a chat. Open to exciting
					freelance projects too! Let's work together on something
					great!
				</p>
				<hr className="!m-0 !text-primary" />
				<div className="smallsubtext gap-4 sm:gap-8 flex flex-row sm:flex-col justify-evenly items-center">
					<a
						href="https://www.github.com/SatyamVyas04"
						target="_blank"
					>
						<img
							src={GitHub}
							alt="Github"
							style={{
								filter: "invert(1)",
								height: "48px",
							}}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/satyam-vyas"
						target="_blank"
					>
						<img
							src={LinkedIn}
							alt="LinkedIn"
							style={{
								filter: "invert(1)",
								height: "48px",
							}}
						/>
					</a>
					<a href="mailto:vyas.satyam.04@gmail.com" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-12"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
