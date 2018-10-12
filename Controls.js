
function updateTrackerPosition(new_x, new_y, t) {
    t.x = new_x;
    t.y = new_y;
}

function updateMarkerPosition(new_x, new_y, m) {
    m.x = new_x;
    m.y = new_y;

}

function drawTracker(ctx) {

    ctx.fillStyle = '#555';
    ctx.strokeWidth = 4;
    ctx.strokeStyle = '#555';
    ctx.strokeOpacity = 1.0;
    ctx.strokeRect(mouseX - 5, mouseY - 5, 10, 10);
    ctx.fill();
}

function drawMarker(ctx) {
    ctx.strokeStyle = '#0F0';
    ctx.strokeOpacity = 1.0;
    ctx.strokeRect(last_down_x - 20, last_down_y - 20, 40, 40);

}

function drawLogger(ctx) {
    var theLog = String
    (
        mouseX + ":" + mouseY + "\t" +
        last_down_x + ":" + last_down_y + "\n"
        // pathFinder.dir
    );
    ctx.fillText(theLog, 10, 40, 500);

}
