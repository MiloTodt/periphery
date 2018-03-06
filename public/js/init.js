(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function guideWindows() {
  document.getElementById("guide").innerHTML = "<br/>Guide for windows <li> Step 1</li><li> Step 2</li><li> Step 3</li>";
} 
function guideOSx() {
  document.getElementById("guide").innerHTML = "<br/>Guide for OSx<li> Step 1</li><li> Step 2</li><li> Step 3</li>";
} 
function guideLinux() {
  document.getElementById("guide").innerHTML = "<br/>Guide for Linux<li> Step 1</li><li> Step 2</li><li> Step 3</li>";
}
Z