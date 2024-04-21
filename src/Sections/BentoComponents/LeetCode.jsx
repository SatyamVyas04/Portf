import React from "react";
import LCB from "../../assets/LeetCodeBadges.png";

class LeetCode extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		fetch("https://leetcode-stats-api.herokuapp.com/user0872ue")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					data: json,
					isLoaded: true,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const { isLoaded, data } = this.state;

		if (!isLoaded) return <div className="smallsubtext">Loading...</div>;

		return (
			<div className="smallsubtext flex flex-col justify-start gap-4 pb-8">
				<div>
					<p className="text-purple-400 mt-4">
						Total Solved: {data.totalSolved}
					</p>
					<ol>
						<li className="text-green-400 ml-4 list-disc">
							Easy Questions Solved: {data.easySolved}
						</li>
						<li className="text-yellow-400 ml-4 list-disc">
							Medium Questions Solved: {data.mediumSolved}
						</li>
						<li className="text-red-400 ml-4 list-disc">
							Hard Questions Solved: {data.hardSolved}
						</li>
					</ol>
					<p className="text-zinc-400">
						Acceptance Rate: {data.acceptanceRate}%
					</p>
					<p className="text-zinc-400">Ranking: {data.ranking}</p>
				</div>
				<img src={LCB} alt="LeetCode Badges" className="w-full rounded-xl" />
				
				<a
					href="https://leetcode.com/user0872ue/"
					target="_blank"
					className="flex flex-row items-center justify-center bg-primary rounded-full p-2 px-4 gap-4 mt-2 text-[#222]"
				>
					<h1 className="">Visit my LeetCode Profile</h1>
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
		);
	}
}

export default LeetCode;
