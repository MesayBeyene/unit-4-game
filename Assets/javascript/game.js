
var randomResult;
var lost = 0;
var win = 0;
var previous = 0;
var images = [
    '/Users/mesibeyene/Desktop/Assignment4/Assets/images/saphire.png',
    '/Users/mesibeyene/Desktop/Assignment4/Assets/images/aquamarine.png',
    '/Users/mesibeyene/Desktop/Assignment4/Assets/images/emerald.png',
    '/Users/mesibeyene/Desktop/Assignment4/Assets/images/ruby.png'
]


//$(".crystal").attr('class');

// 
var resetAndStart = function(){

    $(".crystals").empty();

 randomResult = Math.floor(Math.random()* 102) + 19;
$("#result").html("Random Result:"+" " + randomResult);
    
   
for (var i=0; i<4; i++){

    var random = Math.floor(Math.random() * 12) + 1;
   
    var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "data-random":random });
          crystal.css({
              "background-image":"url('" + images[i] + "')",
              "background-size": "cover"
          }); 

    $(".crystals").append(crystal);
}

$("#previous").html("Total Score: " + previous);
}

resetAndStart();

$(document).on('click', ".crystal", function(){
    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total Score: " + previous);

    if (previous > randomResult){
        lost ++;
        $("#lost").html("You Lost : " + lost);
        previous = 0;
        resetAndStart();
    }
    else if(previous === randomResult){
        win ++;
        $("#win").html("You Won : " + win);
        previous = 0;
        resetAndStart();
    }
    console.log(previous);
})