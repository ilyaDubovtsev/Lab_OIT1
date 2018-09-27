
  $(document).ready(function() {
    $(window).scroll(function() {
      if($(window).width() > 1024){
        if($(this).scrollTop() >= ($(window).height() / 3)) {
          $('.toTop').fadeIn();
        }
        else {
          $('.toTop').fadeOut();
        }
      }
      else{
        $('.toTop').hide();
      }
    });
    $('.toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);

    });
  });

  function TileClose(id) {
    $("#"+id).hide();
  };

  function TileOpen(id) {
    $("#"+id).show();
  };
