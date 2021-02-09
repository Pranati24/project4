function preload(){

}
function setup(){
    canvas= createCanvas(640,500);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,0,0,640,400);
    
}
function take_snapshot(){
    save('student_name.png');
}
