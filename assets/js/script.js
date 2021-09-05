// jquery strat from here 
$(function(){

    $('.myNav .nav-item .nav-link').click(function(){
        $('.active').removeClass('active')
        $(this).toggleClass('active')
    })

})

// jquery start from here 
$(document).ready(function(){
  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<span class='priv-arrow'><i class='fas fa-angle-left'></i></span>",
    nextArrow: "<span class='next-arrow'><i class='fas fa-angle-right'></i></span>",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});


// venobox 
$(function(){
    $('.venobox').venobox();
})

// counter up 
$(function(){

  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

})

// mixitup 
$(function(){

    var containerEl = document.querySelector('.mixitupItem');
    var mixer = mixitup(containerEl);

    $('.portfolio-btn ul li').click(function(){
      $('.active').removeClass('active')
      $(this).toggleClass('active')
  })

})

// accordion 

var accordion = document.querySelectorAll('.accordionHeader');
for(var i =0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){

        this.classList.toggle('active');
        var accItem = this.nextElementSibling;
        if(this.classList.contains('active')){
            accItem.style.maxHeight = accItem.scrollHeight +'px';
        }else{
            accItem.style.maxHeight = '0';
        }

    })
}

// aos 
AOS.init();



	// for backToTop effect start 
$(function(){

  $(window).scroll(function(){
		var scroll = $(this).scrollTop();

		if(scroll > 180 ){
			$('.back-to-top').addClass('back-to-top-animate');
		}else{
			$('.back-to-top').removeClass('back-to-top-animate');
		}
	});
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop:0}, 2000)
	})

})

	// for backToTop effect end 

