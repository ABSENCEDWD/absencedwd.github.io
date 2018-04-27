var main = function(){

  $('.dropdown').hide();
  $('main').fadeIn('slow');

  $(window).resize(function() {

    let $width = $(window).width()

    if ($width <= 760) {
      $('.nav-item').hide();
      $('.dropdown').show();
    }
    else {
      $('.nav-item').show();
      $('.dropdown').hide();
    }

  });

  $(document).scroll(function(event) {
    $pageScroll = $(this).scrollTop();
    //console.log($pageScroll);
  });
}

$(document).ready(main);
