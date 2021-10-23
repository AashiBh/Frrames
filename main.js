function setup(){
    canvas= createCanvas(600,500);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.size(350,200);
    video.hide()
}
function Snappy(){
    save('FeriousFrames.jpg');
}
function draw(){
    strokeWeight(20);
    rect(130,150,380,250)
    image(video, 160, 180, 320, 200);
   }