var cher = document.getElementById("cher");
var block = document.getElementById("block");
function jump(){
    
    
    if(cher.classList != "animat"){
        
        cher.classList.add("animat");
    }
    
    setTimeout(function(){
        cher.classList.remove("animat");
    },500);
}

var checkdead = setInterval(function(){
   var blockLeft  =  parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    
    if(blockLeft<20 && blockLeft>0  && cherTop>=130 ){
        block.style.animation = "none";
        block.style.display = "none";
        
        alert("loser");
    }
    
},10);