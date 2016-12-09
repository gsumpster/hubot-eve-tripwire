/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

// Modules
import request from "request-promise";

// Modules (Local)
import {LOGIN_OPTIONS, CONNECTION_OPTIONS} from "./request_objects.js";

/**
* Retrieves a map of wormhole connections
* @return {Array} connections
*/
export function get_connections(){
	retrieve_connections()
	.then((chain) => {
		return chain.filter((system) => { // filter out thera systems by default
			if(process.env.TRIPWIRE_THERA){
				return system.mask != "273.0";
			}
			return system;
		});
	})
	.then((chain) => {
		return chain.map((system) => {
			var obj = {}; // Create map object, see map.js for object structure
			obj[system.connectionID] = {};
			obj[system.connectionID][system.systemID] = 1;
			return obj;
		});
	});
}

/**
* Retrieves a JSON object of connections from Tripwire.
* @return {Promise} chain
*/
function retrieve_connections(){
	return request(LOGIN_OPTIONS) // Send login request
	.then((res) => {
		// Return the session cookie
		return res.toJSON().headers["set-cookie"][0].split(";")[0].split("=")[1];
	})
	.then((cookie) => {
		// Add the session cookie to the request
		CONNECTION_OPTIONS.headers.Cookie = "PHPSESSID"+cookie;
		return request(CONNECTION_OPTIONS) // Send connections request
		.then((body) => {
			if(body){
				return body.chain.map;
			}
		})
		.catch((err) => {console.error(err);});
	})
	.catch((err) => {console.error(err);});
}
