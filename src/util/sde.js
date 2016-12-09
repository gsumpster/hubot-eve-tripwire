// Files
import systems from "./data/systems.json"; // EVE SDE mapSolarSystems.sql as JSON

/**
* Returns information about a system given it's ID
* @param {Number} id - the solar system ID
* @return {Object} system
*/
export function getSystem(id){
	return systems[id];
}
