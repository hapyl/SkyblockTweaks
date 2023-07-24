import * as Chat from "../utils/Chat";

const LOBBY_WARP = {
    DWARVEN_MINES: "mines",
    HUB: "hub",
    DUNGEON_HUB: "dh",
    THE_FARMING_ISLANDS: "desert",
    THE_PARK: "park",
    GOLD_MINE: "gold",
    DEEP_CAVERNS: "deep",
    CRYSTAL_HOLLOWS: "cn", // Imagine not having nucleus tp smh shake my head
    SPIDERS_DEN: "spider",
    THE_END: "end",
    CRIMSON_ISLE: "nether",
};

var nextWarp = null;

register("command", (destination) => {
    if (destination === undefined) {
        destination = readZoneFromTabList();
    }

    let warp = LOBBY_WARP[destination];

    if (warp === undefined) {
        Chat.error(`Could not find warp for ${destination}`);
        return;
    }

    Chat.success(`Requeueing ${destination}...`);

    ChatLib.command("warp home");
    nextWarp = warp;
})
    .setName("requeue")
    .setAliases("rq");

register("command", () => {
    Chat.success("Current zone:");
    ChatLib.chat("&a" + readZoneFromTabList());
}).setName("debugZone");

register("worldLoad", () => {
    if (nextWarp == null) {
        return;
    }

    Client.scheduleTask(20, () => {
        ChatLib.command("warp " + nextWarp);
        nextWarp = null;
    });
});

function readZoneFromTabList() {
    let names = TabList.getNames();
    var zone = "null";

    names.forEach((name) => {
        let unformattedName = ChatLib.removeFormatting(name);

        if (unformattedName.includes("Area: ")) {
            let slice = unformattedName.slice(6, unformattedName.length);
            zone = slice.toUpperCase().replace(/[']/g, "").replace(/ /g, "_");
            return;
        }
    });

    return zone;
}
