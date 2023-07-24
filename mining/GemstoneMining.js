import { Waypoint } from "../utils/Waypoint";
import * as Chat from "../utils/Chat";

const ROUTE = {
    RUBY: {
        name: "Ruby",
        prefix: "&c❤",
        locations: [
            [774, 47, 595],
            [776, 47, 612],
            [775, 47, 621],
            [761, 46, 566],
            [747, 47, 551],
            [777, 44, 573],
            [773, 45, 562],
            // [763, 45, 522],
            [762, 44, 542],
            [777, 45, 629],
            [778, 48, 638],
            [771, 43, 599],
            [770, 41, 583],
            [782, 48, 665],
        ],
    },
};
var WAYPOINTS = [];

register("command", (option, name) => {
    // route show (route)
    // route hide (route)
    // route clear
    if (option.toLowerCase() === "clear") {
        WAYPOINTS = [];
        Chat.success("Cleared!");
        return;
    }

    let route = ROUTE[name.toUpperCase()];

    if (route == undefined) {
        Chat.error(`Could not find route named ${name}`);
        return;
    }

    switch (option.toLowerCase()) {
        case "show": {
            if (hasWaypoints(route)) {
                Chat.error(`Waypoints for ${name} are already showing!`);
                return;
            }

            createWaypoints(route);
            break;
        }
        case "hide": {
            if (!hasWaypoints(route)) {
                Chat.error(`There are not waypoints for ${name}!`);
                return;
            }

            removeWaypoints(route);
            break;
        }
    }
}).setName("route");

register("renderWorld", () => {
    WAYPOINTS.forEach((waypoint) => {
        waypoint.render();
    });
});

function createWaypoints(route) {
    route.locations.forEach((location) => {
        WAYPOINTS.push(
            new Waypoint(
                location[0],
                location[1],
                location[2],
                route.name,
                route.prefix + " " + route.name
            )
        );
    });
}

function removeWaypoints(route) {
    WAYPOINTS = WAYPOINTS.filter((w) => w.name !== route.name);
}

function hasWaypoints(route) {
    return WAYPOINTS.some((w) => w.name === route.name);
}
