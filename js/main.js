const main = () => {
  const menuBtn = document.querySelector(".menu__btn");
  const menuList = document.querySelector(".menu__list");
  const shopBtn = document.querySelector(".shop__btn");
  const shopCarouselList = document.querySelector(".shop__carousel__list");

  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("menu__list--active");
  });

  shopBtn.addEventListener("click", () => {
    shopCarouselList.classList.toggle("shop__carousel__list--active");
  });

  jQuery(document).ready(function () {
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
};

main();
