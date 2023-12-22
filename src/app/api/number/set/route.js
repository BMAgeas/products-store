import FileSys from "fs"

/*
	QueryStrings:	[newValue]
	Returns:		[RequestWasSuccessful], [ErrorText]
*/
export const GET = async (request) => {
	
	const responseJSON = { RequestWasSuccessful : true, ErrorText : null }

	try {

		const newNumber = (new URL(request.url)).searchParams.get("newValue") || (() => {throw new Error("Missing ?newValue")})()
		const numberJSON = { Current : newNumber }
		FileSys.writeFileSync(`${process.cwd()}\\data\\number.json`, JSON.stringify(numberJSON))
		
	} catch (err) {
		responseJSON.RequestWasSuccessful = false
		responseJSON.ErrorText = err.toString()
	}
	
	return new Response(JSON.stringify(responseJSON))

}