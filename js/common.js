'use strict'

const activeClass = {
   btn: '.js-active',
   menu: '.js-menu',
   init: function() {
      var t = this;
      $(t.btn).on('click', function (e) {
         e.preventDefault()
         $(t.btn).toggleClass('is-active');
         $(t.menu).toggleClass('is-active');
         console.log('click')
      });

   }
}

const activeBtn = {
   btn: '.js-active-btn button',
   init: function() {
      var t = this;
      $(t.btn).on('click', function (){
         $(t.btn).removeClass('is-active');
         $(this).addClass('is-active');
      })
   }
}

const popup = {
   order: '.js-popup',
   popup: '.popup',
   overlay: '.popup__overlay',
   close: '.popup__close',
   init: function() {
      var t = this;
      $(t.order).on('click', function(e) {
         e.preventDefault();  
         $(t.popup).addClass('popup_show');
         $(t.overlay).addClass('popup__overlay_show');
         $(t.page).addClass('page__popup');
      })
      $(t.close).on('click', function (){
         $(t.popup).removeClass('popup_show');
         $(t.overlay).removeClass('popup__overlay_show');
      })
   }
}

const maskPhone = {
   init: function() {
      $('.js-phone').mask('+7 (999) 999-99-99');
   }
}

const header = {
	el: '.js-header',
	init: function(){
		var t = this;
		$(window).on('scroll', function(){
			t.pageMove();
		})
	},
	pageMove: function(){
		let dy = window.scrollY;
		if(dy>99){
			$(this.el).addClass('is-fixed');
		}else{
			$(this.el).removeClass('is-fixed');
		}
	},
}

const scrollUp = {
   btn: '.button-up',
   init: function() {
      var t = this;
      $(window).scroll (function () {
         if ($(this).scrollTop () > 300) {
            $(t.btn).fadeIn();
         } else {
            $(t.btn).fadeOut();
         }
      })
      $(t.btn).on('click', function() {
         $('body, html').animate({
         scrollTop: 0
         }, 800);
         return false;
      })
   }
}

$(function() {
   activeClass.init(); // add is-active class
   activeBtn.init(); // actibe button size
   popup.init(); //open popup
   maskPhone.init(); //phone mask
   header.init(); // header fix
   scrollUp.init(); // btn scroll
});

new Swiper('.feedback-slider', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 0,
   effect: "flip",
   autoHeight: true,
   loop: true,
   speed: 800,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev'
   },
 })
