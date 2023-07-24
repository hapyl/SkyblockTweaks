import { debug } from "../utils/Chat";
import * as Rarity from "../Rarity";

const UPDATE_RATE = 1000;
const INVENTORY_NAME = "Trophy Fishing";
const SKULL_ID = 397;

const CAUGHT_FISH = {
    FLYFISH: {
        name: "Flyfish",
        rarity: Rarity.UNCOMMON,
        caught: [false, true, false, false],
        count: [0, 1, 2, 3],
    },
};

const LIST = [
    {
        name: "test",
    },
];

register("command", (name, t) => {
    let data = getFishByName(name);
    let tier = getTierByName(t);

    // TODO
    LIST.find((i) => i.name === "test");

    debug(data);
}).setName("debugFish");

function getFishByName(name) {
    for (const [key, fish] of Object.entries(CAUGHT_FISH)) {
        if (fish.name === name) {
            return fish;
        }
    }

    return null;
}

function getTierByName(name) {
    switch (name) {
        case "bronze":
            return 0;
        case "silver":
            return 1;
        case "gold":
            return 2;
        case "diamond":
            return 3;
    }
}

let lastUpdate = 0;

register("renderSlot", (event) => {
    let inventory = event.getInventory();
    let inventoryName = inventory.getName();
    let now = Date.now();

    if (now - lastUpdate < UPDATE_RATE) {
        return;
    }

    lastUpdate = now;

    if (inventoryName !== INVENTORY_NAME) {
        return;
    }

    let items = inventory.getItems();

    if (items == null) {
        return;
    }

    items.forEach((item) => {
        let itemId = item.getID();

        if (itemId !== SKULL_ID) {
            return;
        }
    });
});
