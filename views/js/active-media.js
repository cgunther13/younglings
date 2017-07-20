var main = function() {
  $(".tablinks").click(function(){
    $(".tablinks.active").removeClass("active");
    $(this).addClass("active");
  });
}

$(document).ready(main);
