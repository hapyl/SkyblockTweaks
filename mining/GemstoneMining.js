import { Waypoint } from "../utils/Waypoint";
import { debug } from "../utils/Chat";

const waypoints = [];

register("command", (x, y, z, name) => {
    waypoints.push(new Waypoint(x, y, z, name));

    debug("Add waypoint");
    waypoints.forEach((w) => {
        debug(w.toString());
    });
}).setName("testWaypoint");

register("renderWorld", () => {
    waypoints.forEach((waypoint) => {
        waypoint.render();
    });
});
