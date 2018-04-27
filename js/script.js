var window_adjustment = function() {

  let $width = $(window).width()

  if ($width <= 760) {
    $('.nav-item').hide();
    $('.dropdown').show();
  }
  else {
    $('.nav-item').show();
    $('.dropdown').hide();
  }

}

var main = function() {

  window_adjustment();
  $('main').fadeIn('slow');

  $(window).resize(function() {

    window_adjustment();

  });

  $(document).scroll(function(event) {
    $pageScroll = $(this).scrollTop();
    //console.log($pageScroll);
  });

  $('.dropdown').on('click', function() {
    $('.dropdown ul').toggle('fast');
  });
}

$(document).ready(main);
