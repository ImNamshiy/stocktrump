
			
            
            $(document).ready(function () {
				screenCheck();

				$('.scroll-control .one').click(function () {
					$.scrollify.move('#s-one');
				});
				$('.scroll-control .two').click(function () {
					$.scrollify.move('#s-two');
				});
				$('.scroll-control .three').click(function () {
					$.scrollify.move('#s-three');
				});
                $('.scroll-control .four').click(function () {
					$.scrollify.move('#s-four');
				});
                $('.scroll-control .five').click(function () {
					$.scrollify.move('#s-five');
				});
			});

			$(window).on('resize', function () {
				screenCheck();
			});

			function applyScroll() {
				$.scrollify({
					section: '.scroll',
					sectionName: 'section-name',
					//standardScrollElements: 'section',
					easing: 'easeOutExpo',
					scrollSpeed: 600,
					offset: 0,
					scrollbars: true,
					setHeights: true,
					overflowScroll: true,
					updateHash: false,
					touchScroll: true,
				});
			}

			function screenCheck() {
				var deviceAgent = navigator.userAgent.toLowerCase();
				var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
				if (agentID || $(window).width() <= 980) {
					// its mobile screen
					$('section').addClass('scroll');
					applyScroll();
					$.scrollify.enable();
				} else {
					// its desktop
					$('section').addClass('scroll');
					applyScroll();
					$.scrollify.enable();
				}
			}
 // Humburger---------------------------
 $(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

var humburgerButton = document.getElementById('nav-icon1');
var mobileNav = document.getElementById('menu_section');

	humburgerButton.addEventListener('click', function(){	
	mobileNav.classList.toggle('show');
})


/*--------------ENTRY ANIMATION----------------*/



/*--------------TESTIMONIAL----------------*/



// coding with nick
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}
// coding with nick




  /*--------------ETESTIMONIAL END----------------*/

  $(document).ready(function() {
	$("#contact-form").submit(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		Email.send({
			Host: "smtp.gmail.com",
			Username: "namshiy@gmail.com",
			Password: "mynameisnamshiy",
			To: 'namshiy@mail.com',
			From: email,
			Subject: "New message from Stock Trump",
			Body: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
		}).then(
			message => {
				alert("Your message was sent successfully");
				$("#contact-form")[0].reset();
			}
		);
	});
});

 