var playerX = 10, playerY = 10;
var blockH = 30, blockW = 30;

var fab = new fabric.Canvas("myCanvas")

var playerOBJ = "", blockOBJ = "";

function addPlayer() {
    fabric.Image.fromURL('player.png', function (Img) {
        playerOBJ = Img;
        playerOBJ.scaleToWidth(150)
        playerOBJ.scaleToHeight(140)
        playerOBJ.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerOBJ)
    })
}


canvas.addEventlistener('keypress', mykeypress)

function mykeypress(e) {
    keypressed = e.keyCode;
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '39') {
        right();
    }
    if (keypressed == '40') {
        down();
    }
}