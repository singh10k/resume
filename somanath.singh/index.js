$(document).ready(function(){
    $('#profile-img').mouseover(function(e){
        var imagePath = this.src;
        $("#visionTempleteHoverImage").empty();
        var imagePaths = "<span><img src='" + imagePath + "'></span>";
        $("#visionTempleteHoverImage").show();
        $("#visionTempleteHoverImage").append(imagePaths);
     }).mouseout(function(e) {
        $("#visionTempleteHoverImage").hide();
    });
 })