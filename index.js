var fs = require('fs'),
    path = require('path');

module.exports = (robot, scripts) => {
  scriptsPath = path.resolve(__dirname, 'build');
  robot.loadFile(scriptsPath, "trippy-script.js");
};
