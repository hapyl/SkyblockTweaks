import * as Config from "Config";

export const PICKAXE_ABILITY_REMINDER = new Feature("pickaxe_ability_reminder");

export class Feature {
    constructor(id) {
        this.id = id;
    }

    isEnabled() {
        return Config.isFeatureEnabled(this.id);
    }
}
