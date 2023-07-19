export class Rarity {
    constructor(name, ordinal) {
        this.name = name;
        this.ordinal = ordinal;
    }

    static COMMON = new Rarity("&fCOMMON", 1);
    static UNCOMMON = new Rarity("&aUNCOMMON", 2);
    static RARE = new Rarity("&9RARE", 3);
    static EPIC = new Rarity("&5EPIC", 4);
    static LEGENDARY = new Rarity("&6LEGENDARY", 5);
}

export class SeaCreature {
    constructor(name, message, rarity) {
        this.name = name;
        this.message = message;
        this.rarity = rarity;
    }

    static Rarity = Rarity;

    static SQUID = new SeaCreature("Squid", "A Squid appeared.", Rarity.COMMON);
    static SEA_WALKER = new SeaCreature("Sea Walker", "You caught a Sea Walker.", Rarity.COMMON)
}