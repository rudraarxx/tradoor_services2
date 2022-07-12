var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
      },
      loop: true,
      loopedSlides: 4,
      effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -800],
                rotate: [180, 0, 0],
              },
              next: {
                shadow: true,
                translate: [0, 0, -800],
                rotate: [-180, 0, 0],
              },
        },
      autoplay:{
        delay: 2000,
        disableOnInteraction: false,
      },
  });
  var mySwiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
	  loop: true,
	  loopedSlides: 4
  });
    swiper.controller.control = mySwiper;
    mySwiper.controller.control = swiper;

var secondpgSwiper=new Swiper('.secondpgSwiper', {
         effect: "coverflow",
         grabCursor: true,
         centeredSlides: true,
         slidesPerView: "auto",
         loop: true,
         autoplay:{
            delay: 2000,
            disableOnInteraction: false,
          },
         coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
    
  });
  var menu = ['Concept', 'Plan', 'Design','Build', 'Launch'];
  var thirdpgSwiper = new Swiper('.thirdpgSwiper', {
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay:{
       delay: 2000,
       disableOnInteraction: false,
     },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          }, 
      },
  });