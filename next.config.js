/** @type {import('next').NextConfig} */

const nextConfig = {
	sassOptions : {
		logger : {
			warn	: function (message) { console.log("SASS WARN: " + message) },
			debug	: function (message) { console.log("SASS DEBUG: " + message) }
		}
	}
};

module.exports = nextConfig;