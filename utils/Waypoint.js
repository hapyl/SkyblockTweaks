import { debug } from "./Chat";

export class Waypoint {
    constructor(x, y, z, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
    }

    toString() {
        return `{name=${this.name}, x=${this.x}, y=${this.y}, z=${this.z}}`;
    }

    render() {
        let x = this.x - Player.getX();
        let y = this.y - Player.getY();
        let z = this.z - Player.getZ();
        let distanceToPlayer = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

        Tessellator.drawString(this.name, this.x, this.y + 1, this.z, 2, true, 1, true);
        Tessellator.drawString(
            distanceToPlayer.toFixed(1) + "m",
            this.x,
            this.y - 1,
            this.z,
            2,
            true,
            1,
            true
        );
    }
}
