import FileSys from "fs"

/*
	QueryStrings:	[currentValue]
	Returns:		[RequestWasSuccessful], [ErrorText], [LongPollingTimeout], [CurrentNumber]
*/
export const GET = async (request) => {

	/*
		Until [request_MustEndAt is reached]:
			Read the number from the file
			If [numberInFile is different to clientsCurrentNumber]:
				Respond with the new number
			(Else)
				Wait 1 second(s)
				(Loop)

		(If request_MustEndAt is reached before the file's number changes, respond with "LongPollingTimeout = true")

	*/
	
	const responseJSON			= { RequestWasSuccessful : true, ErrorText : null, LongPollingTimeout : false, CurrentNumber : null }
	
	try {

		const request_MustEndAt		= (new Date()).getTime() + (120 * 1000)
		const clientsCurrentNumber	= (new URL(request.url)).searchParams.get("currentValue") || (() => {throw new Error("Missing ?currentValue")})()

		while ( (new Date()).getTime() < request_MustEndAt ) {

			const numberInFile = JSON.parse(FileSys.readFileSync(`${process.cwd()}\\data\\number.json`)).Current

			if ( numberInFile != clientsCurrentNumber ) {
				responseJSON.CurrentNumber = numberInFile
				return new Response(JSON.stringify(responseJSON))
			}

			await (new Promise((resolve) => { setTimeout(resolve, 1000) }))

		}

		responseJSON.LongPollingTimeout = true

	} catch (err) {
		responseJSON.RequestWasSuccessful = false
		responseJSON.ErrorText = err.toString()
	}

	return new Response(JSON.stringify(responseJSON))

}