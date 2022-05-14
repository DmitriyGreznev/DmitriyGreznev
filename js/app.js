$(function() {
  /* Main Slider */

  $('#workSlider').slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
});

  $("#slickPrevious").on("click", function(event) {
  event.preventDefault();

  let currentSlider = $(this).parents('.portfolio__inner').find('[data-slider="workSlider"]');

  currentSlider.slick("slickPrev");
  });

  $("#slickNext").on("click", function(event) {
  event.preventDefault();

  let currentSlider = $(this).parents('.portfolio__inner').find('[data-slider="workSlider"]');

  currentSlider.slick("slickNext");
  });


  /* Modal */

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event){
      event.preventDefault();
      let $this = $(this);
      let modalId = $this.data('modal')

      $(modalId).addClass('show');
      $("body").addClass('no-scroll');

      setTimeout(function() {
          $(modalId).find('.modal__inner').css({
              transform: "rotateX(0)"
          });
      }, 200);
  });


  modalClose.on("click", function(event){
      event.preventDefault();
      let $this = $(this);
      let modalParent = $this.parents('.modal');
      modalParent.find(".modal__inner").css({
          transform: "rotateX(90deg)"
      })

      setTimeout(function(){
          modalParent.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

  $(".modal").on("click", function(event){
      let $this = $(this);
          $this.find('.modal__inner').css({
          transform: "rotateX(90deg)"
      });

      setTimeout(function() {
          $this.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

      $(".modal__inner").on("click", function(event){
          event.stopPropagation();
      });
});