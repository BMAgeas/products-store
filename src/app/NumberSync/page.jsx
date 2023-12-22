"use client"
import {StyledMain, StyledSection} from "./page.styles.jsx"
import React from "react"

export default function NumberSync() {

	const [currentNumber, setCurrentNumber] = React.useState(0)
	const [enteredValue, setEnteredValue] = React.useState("")
	
	const setNumberToEnteredValue = () => {
		fetch(`/api/number/set?newValue=${enteredValue}`)
		setEnteredValue("")
	}

	const getLatestNumber = () => {
		console.log("fetching for currentNumber: " + currentNumber)
		fetch(`/api/number/get?currentValue=${currentNumber}`)
			.then(response => response.json())
			.then(
				response => {
					if (response.LongPollingTimeout) {
						
						/* The request timed-out; send another one */
						getLatestNumber()
					
					} else {

						/* The request didn't time-out; we should have received CurrentNumber */
						setCurrentNumber(response.CurrentNumber)
						//getLatestNumber()

					}
				}
			)
	}

	getLatestNumber()
	// React.useEffect(getLatestNumber, [])

	return (
		<StyledMain>
			
			<h1>Number Sync</h1>

			<StyledSection>
				Current Number: <b>{currentNumber}</b>
			</StyledSection>

			<StyledSection>
				Set new Number:&nbsp;
				<input type="text" size="4" value={enteredValue} onChange={e => setEnteredValue(e.target.value)} />&nbsp;
				<button onClick={setNumberToEnteredValue}>Set</button>
			</StyledSection>

			<a href="#" style={{ fontSize : "0.5rem" }}>Upgrade to NumberSync Pro</a>

		</StyledMain>
	)

}