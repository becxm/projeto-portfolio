$(document).ready(function() {
     $("#mobile_btn").click(function() {
         $("#mobile_menu").toggleClass("active");
         $("#mobile_btn").find('i').toggleClass("fa-x");
     });
 });
 