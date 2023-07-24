import { debug } from "../utils/Chat";

const TIME_SPAWN = "7:00pm";
const TIME_DESPAWN = "6:00am";

register("command", () => {
    let sidebar = Scoreboard.getSidebar();
    debug(sidebar);
}).setName("testScoreboard");
