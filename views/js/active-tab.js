var main = function() {
  $('a').click(function(){
    $('a.active').removeClass('active');
    $(this).addClass('active');
  });
}

$(document).ready(main);
