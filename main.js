img = "";
status = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas( 640 , 420) ;
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded(){
    console.log("model Loaded!")
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult( error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image( img , 0 , 0 , 640 , 420 );
    fill("#FF0000");
    text( "dog" , 45 , 75);
    noFill();
    stroke("#FF0000");
    rect( 30 , 60 , 450 , 350 );

    fill("#e5de00");
    text( "cat" , 320 , 120);
    noFill();
    stroke("#e5de00");
    rect( 295 , 75 , 270 , 340 );
}