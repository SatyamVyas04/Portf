function BentoGrid() {
	return (
		<div>
			<div className="flex flex-col items-center sm:grid sm:grid-cols-4 sm:grid-rows-3 gap-4 subtext p-16">
				<div className="card">1</div>
				<div className="card">2</div>
				<div className="card col-span-2">3</div>
				<div className="card row-start-2">4</div>
				<div className="card col-span-2 row-start-2">5</div>
				<div className="card col-start-4 row-start-2">6</div>
				<div className="card col-span-2 row-start-3">7</div>
				<div className="card col-start-3 row-start-3">8</div>
				<div className="card col-start-4 row-start-3">9</div>
			</div>
		</div>
	);
}

export default BentoGrid;
