$(document).ready(function() {

  $("#popup-box").hide();
    $('.thirtythree').hover(function() {
      var $this = $(this);
      var target = $this.data('target');
      $({ countNum: $this.text() }).animate({
        countNum: target + '%'
      }, {
        duration: 5000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(parseFloat(this.countNum)) + '%');
        },
        complete: function() {
          $this.text(target + '%');
        }
      });
    }, function() {
      var $this = $(this);
      var target = $this.data('target');
      $this.text('0%');
    });

      $('.latte').mouseenter(function() {
        $(this).attr('src', 'media/images/latte broke.png'); 
      }).mouseleave(function() {
        $(this).attr('src', 'media/images/latte full.png'); 
      });

      $('.guam').mouseenter(function() {
        $(this).attr('src', 'media/images/guam broke.png'); 
      }).mouseleave(function() {
        $(this).attr('src', 'media/images/guam full.png');
      });

      $("#pic-box").hover(function(){
        $("#popup-box").slideToggle(1000);
    });

  });

  