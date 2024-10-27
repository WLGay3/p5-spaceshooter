class Player extends GameObject {

    constructor(pos, vel, img, size, life, tag) {
        super(pos, vel, img, size, life, tag)
        this.fireRate = 10;
        this.damage = 20;
        this.bulletSpeed = 15;
    }
}