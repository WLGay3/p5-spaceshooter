let gameManager = new GameManager();

function preload() {
    gameManager.loadAssets();
}

function draw() {
    background(0);
}

function setup() {
    createCanvas(450, window.innerHeight);
    gameManager.init();
}