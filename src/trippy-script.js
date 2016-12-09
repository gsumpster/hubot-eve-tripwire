import {path, updateWormholes} from "./util/map.js"; // Contains Map & Pathfinding functions
import {get_connections} from "./util/tripwire.js";

export default (robot) => {
	setInterval(() => {
		var connections = get_connections();
		updateWormholes(connections);
	}, 300000);
};
