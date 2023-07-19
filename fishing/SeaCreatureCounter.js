import { info, success, error, debug } from "../Utils";

var RARITY = {
    1: "&f&lCOMMON",
    2: "&a&lUNCOMMON",
    3: "&9&lRARE",
    4: "&5&lEPIC",
    5: "&6&lLEGENDARY",
    6: "&d&lMYTHIC",
    7: "&d&lDIVINE",
    8: "&c&lSPECIAL",
    9: "&c&lVERY SPECIAL",
    10: "&4&lADMIN",
};

var SEA_CREATURES = {
    // Regular
    SQUID: {
        name: "Squid",
        message: "A Squid appeared.",
        rarity: 1,
    },
    SEA_WALKER: {
        name: "Sea Walker",
        message: "You caught a Sea Walker.",
        rarity: 1,
    },
    NIGHT_SQUID: {
        name: "Night Squid",
        message: "Pitch darkness reveals a Night Squid.",
        rarity: 1,
    },
    SEA_GUARDIAN: {
        name: "Sea Guardian",
        message: "You stumbled upon a Sea Guardian.",
        rarity: 1,
    },
    SEA_WITCH: {
        name: "Sea Witch",
        message: "It looks like you've disrupted the Sea Witch's brewing session. Watch out, she's furious!",
        rarity: 2,
    },
    SEA_ARCHER: {
        name: "Sea Archer",
        message: "You reeled in a Sea Archer.",
        rarity: 2,
    },
    RIDER_OF_THE_DEEP: {
        name: "Rider Of The Deep",
        message: "The Rider of the Deep has emerged.",
        rarity: 2,
    },
    CATFISH: {
        name: "Catfish",
        message: "Huh? A Catfish!",
        rarity: 3,
    },
    CARROT_KING: {
        name: "Carrot King",
        message: "Is this even a fish? It's the Carrot King!",
        rarity: 3,
    },
    SEA_LEECH: {
        name: "Sea Leech",
        message: "Gross! A Sea Leech",
        rarity: 3,
    },
    GUARDIAN_DEFENDER: {
        name: "Guardian Defender",
        message: "You've discovered a Guardian Defender of the sea.",
        rarity: 4,
    },
    DEEP_SEA_PROTECTOR: {
        name: "Deep Sea Protector",
        message: "You have awoken the Deep Sea Protector, prepare for a battle!",
        rarity: 4,
    },
    WATER_HYDRA: {
        name: "Water Hydra",
        message: "The Water Hydra has come to test your strength",
        rarity: 5,
    },
    THE_SEA_EMPEROR: {
        name: "The Sea Emperor",
        message: "Sea Emperor arises from the depths.",
        rarity: 5,
    },
    AGARIMOO: {
        name: "Agarimoo",
        message: "Your Chumcap Bucket trembles, it's an Agarimoo.",
        rarity: 3,
    },
    OASIS_RABBIT: {
        name: "Oasis Rabbit",
        message: "An Oasis Rabbit appears from the water",
        rarity: 2,
    },
    OASIS_SHEEP: {
        name: "Oasis Sheep",
        message: "An Oasis Sheep appears from the water",
        rarity: 2,
    },
    // Crystal Hollows
    WATER_WORM: {
        name: "Water Worm",
        message: "A Water Worm surfaces!",
        rarity: 3,
    },
    POISONED_WATER_WORM: {
        name: "Poisoned Water Worm",
        message: "A Poisoned Water Worm surfaces!",
        rarity: 3,
    },
    ZOMBIE_MINER: {
        name: "Zombie Miner",
        message: "A Zombie miner surfaces!",
        rarity: 5,
    },
    // Spooky
    SCARECROW: {
        name: "Scarecrow",
        message: "Phew! It's only a Scarecrow.",
        rarity: 1,
    },
    NIGHTMARE: {
        name: "Nightmare",
        message: "You hear trotting from beneath the waves, you caught a Nightmare.",
        rarity: 3,
    },
    WEREWOLF: {
        name: "Werewolf",
        message: "It must be a full moon, a Werewolf appears.",
        rarity: 4,
    },
    PHANTOM_FISHERMAN: {
        name: "Phantom Fisherman",
        message: "The spirit of a long lost Phantom Fisherman has come to haunt you.",
        rarity: 5,
    },
    GRIM_REAPER: {
        name: "Grim Reaper",
        message: "This can't be! The manifestation of death himself!",
        rarity: 5,
    },
    // Winter
    FROZEN_STEVE: {
        name: "Frozen Steve",
        message: "Frozen Steve fell into the pond long ago, never to resurface...until now!",
        rarity: 1,
    },
    FROSTY_THE_SNOWMAN: {
        name: "Frosty The Snowman",
        message: "It's a snowman! He looks harmless",
        rarity: 1,
    },
    GRINCH: {
        name: "Grinch",
        message: "The Grinch stole Jerry's Gifts...get them back!",
        rarity: 2,
    },
    YETI: {
        name: "Yeti",
        message: "What is this creature!?",
        rarity: 5,
    },
    NUTCRACKER: {
        name: "Nutcracker",
        message: "You found a forgotten Nutcracker laying beneath the ice.",
        rarity: 3,
    },
    REINDRAKE: {
        name: "Reindrake",
        message: "A Reindrake forms from the depths.",
        rarity: 5,
    },
    // Mammy (Marina)
    NURSE_SHARK: {
        name: "Nurse Shark",
        message: "A tiny fin emerges from the water, you've caught a Nurse Shark.",
        rarity: 6,
    },
    BLUE_SHARK: {
        name: "Blue Shark",
        message: "You spot a fin as blue as the water it came from, it's a Blue Shark.",
        rarity: 6,
    },
    TIGER_SHARK: {
        name: "Tiger Shark",
        message: "A striped beast bounds from the depths, the wild Tiger Shark!",
        rarity: 6,
    },
    GREAT_WHITE_SHARK: {
        name: "Great White Shark",
        message: "Hide no longer, a Great White Shark has tracked your scent and thirsts for your blood!",
        rarity: 6,
    },
    // Crystal Hollows Lava
    FLAMING_WORM: {
        name: "Flaming Worm",
        message: "A flaming worm surfaces from the depths!",
        rarity: 3,
    },
    LAVA_BLAZE: {
        name: "Lava Blaze",
        message: "A Lava Blaze has surfaced from the depths!",
        rarity: 4,
    },
    LAVA_PIGMAN: {
        name: "Lava Pigman",
        message: "A Lava Pigman arose from the depths!",
        rarity: 4,
    },
};

var caughtSeaCreatures = new Map();
var firstCatch = 0;

register("chat", (message) => {
    let creature = getSeaCreatureByMessage(message);

    if (creature == null) {
        return;
    }

    if (!isCaughtAnySeaCreatures()) {
        firstCatch = Date.now();
    }

    if (caughtSeaCreatures.has(creature)) {
        caughtSeaCreatures.set(creature, caughtSeaCreatures.get(creature) + 1);
    } else {
        caughtSeaCreatures.set(creature, 1);
    }
}).setCriteria("${message}");

register("command", (arg) => {
    // scc          - Show caught creatures
    // scc clear    - Clear caught creatures
    // scc timer    - Start a 5 minute timer.
    if (arg == undefined) {
        if (!isCaughtAnySeaCreatures()) {
            info("You haven't caught anything yet!");
            return;
        }

        success(`You caught a total of ${countTotalSeaCreatures()} sea creatures!`);

        caughtSeaCreatures.forEach((count, key) => {
            const creature = SEA_CREATURES[key];
            const rarity = getRarity(creature.rarity);

            info(`  ${rarity} &2${creature.name} &8x${count}`);
        });

        return;
    }

    if (arg === "clear") {
        caughtSeaCreatures = new Map();
        firstCatch = 0;
        success("Cleared!");
        return;
    }

    error("Improper usage! /scc [clear, timer]");
})
    .setName("seaCreatureCounter")
    .setAliases("scc");

function getRarity(int) {
    let rarity = RARITY[int];

    if (rarity == undefined || rarity == null) {
        return "&8&lUNKNOWN";
    }

    return rarity;
}

function countTotalSeaCreatures() {
    let caught = 0;
    if (!isCaughtAnySeaCreatures()) {
        return caught;
    }

    caughtSeaCreatures.forEach((count, creature) => {
        caught += count;
    });

    return caught;
}

function isCaughtAnySeaCreatures() {
    return caughtSeaCreatures.size > 0;
}

function getSeaCreatureByMessage(message) {
    for (var creatureKey in SEA_CREATURES) {
        if (SEA_CREATURES.hasOwnProperty(creatureKey)) {
            var creature = SEA_CREATURES[creatureKey];

            if (creature.message === message) {
                return creatureKey;
            }
        }
    }

    return null;
}

function formatFirstCatch() {
    const date = new Date(firstCatch);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${hours}h ${minutes}m ${seconds}s`;
}
