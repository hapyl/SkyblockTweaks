import { debug } from "../Utils";
import { Feature } from "../Feature";

// const FEATURE = new Feature("speed_boost_reminder");

register("chat", (ability) => {
    debug("A = " + ability);
}).setCriteria("${ability} is now available!");