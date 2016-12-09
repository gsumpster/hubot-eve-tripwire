
// Modules (Local)
import sde from "./sde.js";

/**
* Finds a path between two solar systems.
* @param {Number} start - the starting solar system
* @param {Number} dest - the destination solar system
* @return {Array} path
*/
export function new_connections(robot, connections){
	for (var i = 0; i < connections.length; i++) {
		var connection = connections[i].keys[0];
		var system = sde.getSystem(connection);

		// TODO: finish new_connection notifier
	}
}
