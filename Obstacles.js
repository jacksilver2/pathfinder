
function drawObstacle(ctx, centerX, centerY, xPts, yPts) {
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(centerX + xPts['0'], centerY + yPts['0']);
    for (var i = 1; i < xPts.length; i++) {
        ctx.lineTo(centerX + xPts[i], centerY + yPts[i]);
    }
    ctx.closePath();
    ctx.fill();

}

function addObstacle(cx, cy, xPts, yPts, width, height, id) {
    gObstaclesList[id] = {
        x: cx,
        y: cy,
        xPts: xPts,
        yPts: yPts,
        width: width,
        height: height,
        id: id
    };
}

function makeSomeObstacles() {
    for (var i = 0; i < 10; ++i) {
        addObstacle(i * 30, 2, [1, 2, 3], [4, 5, 6], 200, 100, String(i))
    }
    for (i = 0; i < 10; ++i) {
        console.log(String(gObstaclesList[String(i)].x))
    }
}

function drawObstacle(ob) {
    console.log(ob.xPts);
    drawObstacle(ctx, ob.x, ob.y, ob.xPts, ob.yPts)
}

function drawAllObstacles() {
    for (var e in gObstaclesList) {
        drawObstacle(e);
    }
}

function printHello()
{
    console.log("hello");
}