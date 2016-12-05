export const LOGIN_OPTIONS = {
	// Check if there is a defined TRIPWIRE_URL, if not use default URL.
	url: (process.env.TRIPWIRE_URL || "tripwire.eve-apps.com") + "/login.php",
	form: {
		"mode": "login",
		"username": process.env.TRIPWIRE_USER, // REQUIRED
		"password": process.env.TRIPWIRE_PASS // REQUIRED
	},
	headers: {
		"User-Agent": "Trippy v1 by John Hexis"
	},
	method: "POST",
	json: true,
	resolveWithFullResponse: true
};

export var CONNECTION_OPTIONS = {
	// Check if there is a defined TRIPWIRE_URL, if not use default URL.
	url: (process.env.TRIPWIRE_URL || "tripwire.eve-apps.com") + "/login.php",
	qs: {
		"mode": "init",
		"systemID": process.env.HOME_SYSTEM // REQUIRED
	},
	headers: {
		"User-Agent": "Trippy v1 by John Hexis"
	},
	method: "POST",
	json: true,
};
