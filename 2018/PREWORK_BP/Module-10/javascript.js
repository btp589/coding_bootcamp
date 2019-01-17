//increases box height and width
document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px", box.style.width = "250px";

});

//changes box color to blue
document.getElementById("blueBtn").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";

});

//changes opacity of the box so that it looks fade out
document.getElementById("fadeBtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.5";
});

//resets all attributes of the box back to its original definition
document.getElementById("resetBtn").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px", box.style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1.0";

});
