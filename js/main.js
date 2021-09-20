"use strict";

// WOW
new WOW().init(); // IE 11 closest to work

(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;

    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype); // Slider with arrows


var sliderWithCounter = function sliderWithCounter(classlist, name) {
  var $slider = $(classlist);

  if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.querySelector("".concat(classlist, "-counter"));

    var updateSliderCounter = function updateSliderCounter(slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).html("\n                <div class=\"slide-counter__current ".concat(name, "-counter__current\">").concat(currentSlide, "</div>\n                <div class=\"slide-counter__line ").concat(name, "-counter__line\"></div>\n                <div class=\"slide-counter__total ").concat(name, "-counter__total\">").concat(slidesCount, "</div>\n            "));
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });
    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
    $slider.slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 1
    });
  }
};
"use strict";

$(document).ready(function () {
  $(".blog-slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 1300,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
"use strict";

$(document).ready(function () {
  $(".calculate-slider").slick({
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    centerMode: true
  });
});
var accomodation = document.querySelectorAll(".calculate-item-accomodation");
var service = document.querySelectorAll(".calculate-item-service");

function changeCalculateItem(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      for (var _i = 0; _i < items.length; _i++) {
        items[_i].classList.remove("active");
      }

      this.classList.add("active");
    });
  }
}

changeCalculateItem(accomodation);
changeCalculateItem(service);
"use strict";

$(document).ready(function () {
  sliderWithCounter(".comments-slider", "comments-slider");
});
"use strict";

// Get browser
var userAgent = navigator.userAgent.toLowerCase();
var InternetExplorer = false;
if (/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent) || /msie/.test(userAgent)) InternetExplorer = true; // Telephone mask

if (!InternetExplorer) {
  var inputTelSelector = document.querySelectorAll("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(inputTelSelector);
} // Form validation


var validateForms = function validateForms(selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form) {
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("form sended");
          }
        }
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      form.reset();
    }
  });
};

validateForms(".contact__form", {
  firstname: {
    required: true,
    minLength: 2
  },
  email: {
    required: true,
    email: true
  },
  message: {
    required: true,
    minLength: 2
  },
  tel: {
    required: true
  }
});
"use strict";

$(".faq-item__top").click(function () {
  $(this).toggleClass("active").next().slideToggle(300);
});
"use strict";

var validateForms = function validateForms(selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function submitHandler(form) {
      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("form sended");
          }
        }
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData); // modal show

      form.reset();
    }
  });
};
"use strict";

window.onscroll = function showHeader() {
  var header = document.querySelector(".header");

  if (window.pageYOffset > 200) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
};
"use strict";

var header = document.querySelector(".header");
var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".menu");
burger.addEventListener("click", function () {
  this.classList.toggle("header__burger_active");
  header.classList.toggle("dark");
  menu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});
$(".menu-item__title").click(function () {
  if (window.innerWidth <= 768) {
    $(this).toggleClass("active").next().slideToggle(300);
  }
});
"use strict";

var language = function language() {
  var languageHeader = document.querySelectorAll(".language-change__header");
  var languageItem = document.querySelectorAll(".language-change__item");

  for (var i = 0; i < languageHeader.length; i++) {
    languageHeader[i].addEventListener("click", languageToggle);
  }

  for (var _i = 0; _i < languageItem.length; _i++) {
    languageItem[_i].addEventListener("click", languageChoose);
  }

  function languageToggle() {
    this.parentElement.classList.toggle("active");
  }

  function languageChoose() {
    var text = this.innerText;
    var language = this.closest(".language-change");
    var currentText = this.closest(".language-change").querySelector(".language-change__current");
    currentText.innerText = text;
    language.classList.remove("active");
  }
};

language();
"use strict";

$(document).ready(function () {
  $(".stock-slider").slick({
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1
  });
});
"use strict";

$(document).ready(function () {
  sliderWithCounter(".youtube-slider", "youtube-slider");
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
