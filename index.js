function setup() {
    createCanvas(400, 200);
    loadJSON(url, gotData);
}

function gotData(data) {
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weathe.main.humidity;
        ellipse(100, 100, temp, temp);
    }
}

setup();
draw();