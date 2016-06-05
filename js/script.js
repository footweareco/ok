$(document).on("ready", function(){
   $(".menudos").hide();
    $(".boton").on("click" ,function(){
       $(".menudos").toggle(); 
    });
    
window.onresize = function() {
    var men = document.getElementById("men");
    if (window.innerWidth > 500) {
      
  men.style.display = 'none';  
    
    }
  
}
});
