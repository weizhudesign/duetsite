    // Back to top button
    var mybutton = document.getElementById("top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } 
    
      else {
     mybutton.style.display = "none";
        }
     }
   // When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 

//change menu backgound color while scrolling

     $(document).ready(function(){
      $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if (scroll > 100) {
           $(".header").css("background" , "#99fcef");
         }
    
         else{
            $(".header").css("background" , "transparent");  	
         }
      })
    })

