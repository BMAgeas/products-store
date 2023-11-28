"use client";

import PSFooter from "@/components/PSFooter/PSFooter";
import PSHeader from "@/components/PSHeader/PSHeader";

export default function ImBored() {

	const getNewTask = () => {

		fetch(`https://www.boredapi.com/api/activity`)
			.then(response	=> response.json())
			.then(response	=> document.querySelector("#apiOutput").innerText = `You should: ${response.activity}`)
			.catch(error	=> document.querySelector("#apiOutput").innerText = error);

	};

	return (
		<>
			<PSHeader/>
			<main style={{ minHeight : "80vh", padding : "2%" }}>

				<button onClick={getNewTask}>Give me a task!</button>
				<hr/>
				<p id="apiOutput">(No output)</p>

			</main>
			<PSFooter/>
		</>
	);

}