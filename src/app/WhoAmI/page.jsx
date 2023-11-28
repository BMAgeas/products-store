"use client";

import PSFooter from "@/components/PSFooter/PSFooter";
import PSHeader from "@/components/PSHeader/PSHeader";

export default function WhoAmI() {

	const getAgeFromName = async () => {
		
		const name = document.querySelector("#nameInput").value;
		const response = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
		const responseJSON = await response.json();
		document.querySelector("#apiOutput").innerText = `${name} is ${responseJSON.age} years old`;

			// .then(response => document.querySelector("#apiOutput").innerText = JSON.parse(response).age)
			//.catch(error => document.querySelector("#apiOutput").innerText = error);
	};

	return (
		<>
			<PSHeader/>
			<main style={{ minHeight : "80vh", padding : "2%" }}>

				Name: <input type="text" id="nameInput" />
				<button onClick={getAgeFromName}>Get Age</button>
				<hr/>
				<p id="apiOutput">(No output)</p>

			</main>
			<PSFooter/>
		</>
	);

}