/*eslint-env mocha */

var assert = require("assert");
var map = require("../build/util/map.js");

describe("Map", function() {
	describe("#path()", function() {
		it("should return an array of systems when given two arguments", function() {
			var JitatoAmarr = ["30002187","30003491","30003503","30003504","30002789","30002788","30002791","30000139","30000144","30000142"];
			assert.deepEqual(JitatoAmarr, map.path("30002187", "30000142"));
		});
	});

	describe("#update_wormholes", function() {
		it("should return no deleted connections when given new connections", function() {
			assert.deepEqual({"deleted_connections": [], "new_connections": [{"31001386": {"30002187":1}}, {"31001386": {"30000142":1}}, {"30000142": {"31001386":1}}, {"30002187": {"31001386":1}}]}, map.update_wormholes([{"31001386": {"30002187":1}}, {"31001386": {"30000142":1}}, {"30000142": {"31001386":1}}, {"30002187": {"31001386":1}}]));
		});

		it("should return shortest path using wormhole connections", function(){
			assert.deepEqual(["30002187","31001386","30000142"], map.path("30002187", "30000142"));
		});

		it("should return four deleted connections when given no connections", function(){
			assert.deepEqual({"deleted_connections": [{"31001386": {"30002187":1}}, {"31001386": {"30000142":1}}, {"30000142": {"31001386":1}}, {"30002187": {"31001386":1}}], "new_connections": []}, map.update_wormholes([]));
		});

		it("should return shortest path without wormhole connections", function() {
			var JitatoAmarr = ["30002187","30003491","30003503","30003504","30002789","30002788","30002791","30000139","30000144","30000142"];
			assert.deepEqual(JitatoAmarr, map.path("30002187", "30000142"));
		});
	});
});
