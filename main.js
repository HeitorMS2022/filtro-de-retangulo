function preload(){
}
function setup(){
    var canvas = createCanvas(640, 480);
    canvas.position(400, 250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    fill(0,128,0);
    rect(20, 20, 100, 25);
}
function tirarfoto(){
    save("foto_com_filtro.png");
}