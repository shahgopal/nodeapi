// Payment Utilities
const payment = {
	checksum: require('../paytm/checksum.js'),
	config: require('../paytm/config.js')
}

// Model
const model = require('./model.js');

// Middlware
const middleware = require("./middleware.js");

module.exports = (app) => {
	// Authenticate API Requests Middleware
	app.use(middleware.auth);


	app.post('/api/create', middleware.urlencodedParser, (req, res) => {
		const data = req.body;
		// model.saveCampaign(data);
		res.type('json').send(data);
	});

}