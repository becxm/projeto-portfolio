$d(document).ready(function() {
$('#mobile_btn').on('click', function () {
     $('navbar').toggleclass('active')
     $('#mobile_btn'). find('i'). toggleclass('fa-x')
});
});