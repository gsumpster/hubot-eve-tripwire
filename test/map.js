/*eslint-env mocha */

var assert = require("assert");
var map = require("../build/util/map.js");

describe("Map", function() {
	describe("#path()", function() {
		it("should return an array of systems when given two arguements", function() {
			var JitatoAmarr = ["30002187","30003491","30003503","30003504","30002789","30002788","30002791","30000139","30000144","30000142"];
			assert.deepEqual(JitatoAmarr, map.path("30002187", "30000142"));
		});
	});
});
