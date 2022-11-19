$(document).ready(function () {
	var controls = {
		video: $("#myvideo"),
		playpause: $("#playpause")
	};

	var video = controls.video[0];

	controls.playpause.click(function () {
		if (video.paused) {
			video.play();
			$(this).text("");
		} else {
			video.pause();
			$(this).text("");
		}


	});
});
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: false,
	slidesPerView: 3,
	centeredSlides: true,
	slideToClickedSlide: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		formatFractionCurrent: addZero,
		formatFractionTotal: addZero,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	breakpoints: {
		320: {
			centeredSlides: false,
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 3,
			centeredSlides: true,
		},
	},

});
function addZero(num) {
	return (num > 9) ? num : '0' + num;
};
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.swiper');

for (let elm of elements) {
	observer.observe(elm);
};
