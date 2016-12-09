var path = require("path");

module.exports = (robot) => {
	let scriptsPath = path.resolve(__dirname, "build");
	robot.loadFile(scriptsPath, "trippy-script.js");
};
