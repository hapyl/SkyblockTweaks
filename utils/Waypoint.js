export class Waypoint {
    constructor(x, y, z, name, displayName = name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
        this.displayName = displayName;
    }

    toString() {
        return `{name=${this.name}, x=${this.x}, y=${this.y}, z=${this.z}}`;
    }

    render() {
        let x = this.x - Player.getX();
        let y = this.y - Player.getY();
        let z = this.z - Player.getZ();
        let distanceToPlayer = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
        let scale = distanceToPlayer / 300;

        Tessellator.drawString(
            `§b${this.displayName.replace("&", "§")} §a${distanceToPlayer.toFixed(1) + "m"}`,
            this.x,
            this.y,
            this.z,
            0,
            true,
            scale,
            false
        );
    }
}
