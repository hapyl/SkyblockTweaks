import * as Config from "Config";

export class Feature {
    constructor(id) {
        this.id = id;
    }

    isEnabled() {
        return Config.isFeatureEnabled(this.id);
    }
}
