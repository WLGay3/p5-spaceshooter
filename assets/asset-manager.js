class AssetManager {

    preload() {
        this.playerImg = loadImage("assets\\images\\player_ship.png");
        this.bulletImg = loadImage('assets\\images\\bullet.png');
        this.starImg = loadImage('assets\\images\\star.png');

        this.enemyImg = [...Array.keys()].map(a => (`assets/images/enemies/${a + 1}.png`));
    }
}