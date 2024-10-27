class GameManager {

    constructor() {
        this.assetManager = new AssetManager();

    }

    init() {
        this.player = new Player(
            createVector(width/2, height - 100),
            createVector(0,0),
            this.assetManager.playerImg,
            createVector(75,75),
            100,
            'player'
        );
    }

    loadAssets() {
        this.assetManager.preload();
    }

    update() {
        this.renderPlayer();
    }

    renderPlayer() {
        this.player.pos.x = constrain(mouseX, 37.5, width - 37.5);
        this.player.update();
        this.player.show();
    }
}