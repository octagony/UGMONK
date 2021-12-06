jQuery(document).ready(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".shop__btn").on("click", function () {
    $(".shop__carousel__list").toggleClass("shop__carousel__list--active");
  });

  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top - 50;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1000
    );
    return false;
  });

  $(function () {
    var wi = $(document).width();
    if (wi > 1200) {
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 187) {
          $(".header__title").addClass("sticky slide-in-top");
        } else {
          $(".header__title").removeClass("sticky slide-in-top");
        }
      });
    }
  });
});
