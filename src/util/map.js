// Modules
import Graph from "node-dijkstra";

// Files
import map_data from "./data/jumps.json";

var neweden_map = new Graph(map_data);

// Array of wormhole connection nodes.
// e.g: [{'30002813': '30001376': 1}]
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
* @return {Array} deleted_connections
*/
export function update_wormholes(connections){
	let new_connections = connections.keys.filter(x => wormhole_map.keys.indexOf(x) == -1);
	let deleted_connections = wormhole_map.keys.filter(x => connections.keys.indexOf(x) == -1);

	// Remove closed connections from the New Eden map
	for (let i = 0; i < deleted_connections.length; i++) {
		neweden_map.removeNode(deleted_connections[i]);
	}

	// Add new connections to the New Eden map
	for (let i = 0; i < new_connections.length; i++) {
		neweden_map.addNode(new_connections[i], connections[new_connections[i]]);
	}

	return deleted_connections;
}
