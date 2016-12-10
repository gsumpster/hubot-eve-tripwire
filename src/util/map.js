// Modules
import Graph from "node-dijkstra";

// Modules (Local)
// import {array_diff} from "./util.js";

// Files
import map_data from "./data/jumps.json";

var neweden_map = new Graph(map_data);

// Array of wormhole connection nodes.
// e.g: [{'30002813': {'30001376': 1}}]
//      [{'wormhole': {'k-space': 1}}]
var wormhole_map = [];

/**
* Finds a path between two solar systems.
* @param {String} start - the starting solar system
* @param {String} dest - the destination solar system
* @return {Array} path
*/
export function path(start, dest) {
	return neweden_map.path(start, dest);
}

/**
* Updates the wormhole connections with data from Tripwire.
* @param {Array} connections - wormhole connections
* @return {Object} new and deleted connections
*/
export function update_wormholes(connections){
	var new_connections = connections.filter(function(x) { return wormhole_map.indexOf(x) < 0; });
	var deleted_connections = wormhole_map.filter(function(x) { return connections.indexOf(x) < 0; });

	// Redefining entire graph is faster & less hassle than attempting to remove nodes
	// by hand, deleted_connections is left over, but still useful for reporting
	// what changed.
	neweden_map = new Graph(map_data);

	for (let i = 0; i < connections.length; i++) {
		let system = Object.keys(connections[i])[0];
		neweden_map.addNode(system, connections[i][system]);
	}

	wormhole_map = connections;
	return {"deleted_connections": deleted_connections, "new_connections": new_connections};
}
