import { debug, success } from "./Utils";

const PATH = "hapylsSkyblock";
const NAME = "config.json";

var config = {};

loadConfig();

function loadConfig() {
    let file = FileLib.read(PATH, NAME);

    if (!file) {
        config = {};
    } else {
        config = JSON.parse(file);
    }
}

function saveConfig() {
    FileLib.write(PATH, NAME, JSON.stringify(config));
}

register("command", (args, toRead) => {
    if (args === "read") {
        success(config[toRead === null ? "hello_world" : toRead]);
    } else if (args === "write") {
        config["new_data"] = 69420;
        success("Success!");
    }
}).setName("testConfig");

register("worldUnload", () => {
    saveConfig();
});

register("gameUnload", () => {
    saveConfig();
});

register("step", () => {
    saveConfig();
})
    .setFps(1)
    .setDelay(60 * 10);
