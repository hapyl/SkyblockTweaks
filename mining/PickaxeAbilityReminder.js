const ABILITY_SUFFIX = "is now available!";

register("chat", (message) => {
    if (!shouldCheck() || !message.includes(ABILITY_SUFFIX)) {
        return;
    }

    let index = message.indexOf(ABILITY_SUFFIX);

    if (index === -1) {
        return;
    }

    let abilityName = message.substring(0, index);
    playAbilityRefreshFx(abilityName);
}).setCriteria("${message}");

function shouldCheck() {
    let effects = Player.getActivePotionEffects();
    let hasEffect = false;

    effects.forEach((effect) => {
        if (hasEffect || effect.getID() === 4) {
            hasEffect = true;
            return;
        }
    });

    return hasEffect;
}

function playAbilityRefreshFx(abilityName) {
    Client.showTitle("&a&lAbility Refreshed!", "&6" + abilityName, 2, 20, 5);

    World.playSound("note.pling", 1, 0.25);
    World.playSound("note.bass", 1, 0.75);
    World.playSound("note.bassattack", 1, 0.25);
}

register("command", () => {
    playAbilityRefreshFx("Ability Name");
}).setName("testAbilityRefreshFx");
