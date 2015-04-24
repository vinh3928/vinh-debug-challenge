/************************
BUTTONS
************************/

$(".buttons").hide().show("slow");

$(".story").hide();
$(".image").hide();

// Attemtped DRY method; couldn't resize code due to button selection issue; tried transversing children().
$(".background_button").click(function () {
    $(".buttons").css("background-color", "hsla(180, 90%, 40%, 1)");
    $(".story").hide();
    $(".image").hide();
    $(".background_story").show("slow");
    $(this).css("background-color", "hsla(180, 30%, 40%, 1)");
});

$(".interest_button").click(function () {
    $(".buttons").css("background-color", "hsla(180, 90%, 40%, 1)");
    $(".story").hide();
    $(".image").hide();
    $(".interest_story").show("slow");
    $(this).css("background-color", "hsla(180, 30%, 40%, 1)");
});

$(".workschool_button").click(function () {
    $(".buttons").css("background-color", "hsla(180, 90%, 40%, 1)");
    $(".story").hide();
    $(".image").hide();
    $(".workschool_story").show("slow");
    $(this).css("background-color", "hsla(180, 30%, 40%, 1)");
});

$(".photo_album").click(function () {
    $(".buttons").css("background-color", "hsla(180, 90%, 40%, 1)");
    $(".story").hide();
    $(".image").hide();
    $(".image").show("slow");
    $(this).css("background-color", "hsla(180, 30%, 40%, 1)");
});

/************************
PHOTO ALBUM
************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$("#photo_ul a").click(function (event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);
    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});

$overlay.click(function(){
    $overlay.hide();
});