var imageFiles = ['./images_folder/image_name_1.jpeg', './images_folder/image_name_2.jpeg', './images_folder/image_name_3.jpeg' ];
//Add image file names and their directories here to add them to the slide
var i = 0, fadeEffect;

function bgSlide(){
    document.getElementById('bgImg').style.opacity = 1;
    fBlack = setInterval(fadeToBlack, 30);
}
function transitionImages(){
    if((i+1) == imageFiles.length){
        i = 0;
    }else{
        i++;
    }
    document.getElementById('bgImg').style.backgroundImage = "url(" + imageFiles[i] + ")";
}
function fadeToBlack(){
    var doc = document.getElementById('bgImg').style;
    var val = doc.opacity;
    val -= 0.03;
    //^set this number higher to make a faster fade effect or lower to make a slower fade effect
    doc.opacity = val;
    if(val <= 0){
        clearInterval(fBlack);
        transitionImages();
        doc.opacity = 0;
        fShow = setInterval(fadeToImage, 30);
    }
}
function fadeToImage(){
    var doc = document.getElementById('bgImg').style;
    var val = parseFloat(doc.opacity);
    val += 0.03;
    //^set this number higher to make a faster fade effect or lower to make a slower fade effect
    doc.opacity = val;
    if(val >= 1){
        clearInterval(fShow);
        window.setTimeout(function() {
            fBlack = setInterval(fadeToBlack, 30);
        }, 2000);   
        //edit^ this number to set the number of milliseconds before fading into next picture
    }
}