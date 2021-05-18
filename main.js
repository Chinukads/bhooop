img= "";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 500);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_bar").innerHTML="status: Detecting Object ";
    
}
function draw(){
    image(img, 0, 0, 640, 500);
    if(status !=""){
        for(i = 0; i<objects.length;i++){
            document.getElementById("status_bar").innerHTML="status_bar";
            fill("#FF0000");
   
    
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15  );
            noFill();
    stroke("#990000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    
        }

    }
    

}

function modelLoaded(){
console.log("MODEL LOADED");
status=true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{

    
    console.log(results);}
    objects=results;
}