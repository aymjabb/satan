module.exports = function (input) {
	const force = false;

	const Users = require("../models/Users")(input);
	const Threads = require("../models/Threads")(input);
	const Currencies = require("../models/Currencies")(input);

	// مزامنة الجداول مع قاعدة البيانات
	Users.sync({ force });
	Threads.sync({ force });
	Currencies.sync({ force });

	return {
		model: {
			Users,
			Threads,
			Currencies,
		},
		use: function (modelName) {
			return this.model[`${modelName}`];
		}
	}
}
