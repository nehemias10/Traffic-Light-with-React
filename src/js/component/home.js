import React, { useState } from "react";

//create your first component
export function Home() {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	return (
		<div id="app">
			<div
				id="barra"
				className="container abs-center justify-content-center"></div>
			<div id="semaforo p-5 text-center">
				<div
					id="container"
					className="container abs-center justify-content-center">
					<button
						className={`redlight ${red ? "light" : ""}`}
						onClick={() => {
							setRed(!red);
							setYellow(false);
							setGreen(false);
						}}></button>
					<button
						className={`yellowlight ${yellow ? "light" : ""}`}
						onClick={() => {
							setRed(false);
							setYellow(!yellow);
							setGreen(false);
						}}></button>
					<button
						className={`greenlight ${green ? "light" : ""}`}
						onClick={() => {
							setRed(false);
							setYellow(false);
							setGreen(!green);
						}}></button>
				</div>
			</div>
		</div>
	);
}
