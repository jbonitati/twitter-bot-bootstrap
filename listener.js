var request = require('request');

var last = null;
var interval = setInterval(() => {
	request('https://carillon.clemson.edu/details.json', (error, response, body) => {
		if (response.statusCode !== 200) {
			console.log('error');
			return;
		}

		if (last) {
			if (body['title'] !== last['title'] && body['title'] !== 'None') {
				// tweet
			}
		}

		last = body;
	});
}, 5000);
