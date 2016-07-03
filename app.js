function slider(){
    $(".container #1").show("fade", "swing", 500);
    $(".container #1").delay(5500).hide("slide", {direction:'left'}, 500);
    
    
    //gets count of number of img tags in container
    var sliderCount = $(".container img").length;
    
    var count = 2;
    
    setInterval(function(){
       $(".container #" + count).show("slide", {direction:'right'}, 500);
       $(".container #" + count).delay(5500).hide("slide", {direction:'left'}, 500);
       
       if(count == sliderCount){
           
           count = 1;
           
       }
       else{
           
           count = count + 1;
           
       }
        
    }, 6500);
    
    
}



