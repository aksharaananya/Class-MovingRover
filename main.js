canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

images=["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg", "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg", "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg", "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg"];
random_number=Math.floor(Math.random()*4);

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=images[random_number];
rover_image="rover.png";

function add(){
     background_imagetag=new Image();
     background_imagetag.onload=uploadbackground;
     background_imagetag.src=background_image;
     
     rover_imagetag=new Image();
     rover_imagetag.onload=uploadrover;
     rover_imagetag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagetag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagetag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
     keypressed=e.keycode;
     if(keypressed=='38'){
         up();
         console.log("up");
     }
     if(keypressed=='40'){
         down();
         console.log("down");
     }
     if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}
