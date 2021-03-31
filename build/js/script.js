// Popup
$(document).ready(function(){
	$('.button').click(function(){
		$('.index-page').addClass('index-page--popup-open'); return false;
	});
});

$(document).ready(function(){
	$('.button').click(function(){
		$('.popup').toggleClass('popup--active'); return false;
	});
});

$(document).ready(function(){
	$('.popup__close').click(function(){
		$('.popup--active').removeClass('popup--active'); return false;
	});
});

$(document).ready(function(){
	$('.popup__button').click(function(){
		$('.index-page--popup-open').removeClass('index-page--popup-open'); return false;
	});
});

$(document).ready(function(){
	$('.popup__close').click(function(){
		$('.index-page--popup-open').removeClass('index-page--popup-open'); return false;
	});
});

// FAQ open
$(document).ready(function(){
	$('.faq__question--1').click(function(){
		$('.faq__open--1').toggleClass('faq__open-1--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--2').click(function(){
		$('.faq__open--2').toggleClass('faq__open-2--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--3').click(function(){
		$('.faq__open--3').toggleClass('faq__open-3--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--4').click(function(){
		$('.faq__open--4').toggleClass('faq__open-4--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--5').click(function(){
		$('.faq__open--5').toggleClass('faq__open-5--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--6').click(function(){
		$('.faq__open--6').toggleClass('faq__open-6--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--7').click(function(){
		$('.faq__open--7').toggleClass('faq__open-7--active'); return false;
	});
});





// FAQ answer
$(document).ready(function(){
	$('.faq__question--1').click(function(){
		$('.faq__answer--1').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--2').click(function(){
		$('.faq__answer--2').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--3').click(function(){
		$('.faq__answer--3').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--4').click(function(){
		$('.faq__answer--4').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--5').click(function(){
		$('.faq__answer--5').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--6').click(function(){
		$('.faq__answer--6').toggleClass('faq__answer--active'); return false;
	});
});

$(document).ready(function(){
	$('.faq__question--7').click(function(){
		$('.faq__answer--7').toggleClass('faq__answer--active'); return false;
	});
});
