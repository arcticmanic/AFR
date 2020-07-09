$(document).ready(function () {
  const carouselBaseOptions = {
    infinite: true,
    dots: false,
    prevArrow: $('.carousel-arrow_left'),
    nextArrow: $('.carousel-arrow_right'),
  }

  $(document).on('modal-opens', e => {
    const modal = e.detail.modal

    const carousel = $(modal).find('.carousel')

    if (carousel.length > 0 && !carousel.hasClass('slick-initialized')) {
      carousel.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        ...carouselBaseOptions,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })
    }

    const carouselNav = $(modal).find('.carousel-nav')
    const carouselForNav = $(modal).find('.carousel-for-nav')

    if (
      carouselNav.length > 0 &&
      !carouselNav.hasClass('slick-initialized') &&
      carouselForNav.length > 0 &&
      !carouselForNav.hasClass('slick-initialized')
    ) {
      carouselForNav.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.carousel-nav',
        infinite: true,
        dots: false,
        arrows: false,
      })

      carouselNav.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.carousel-for-nav',
        prevArrow: $('.carousel-arrow_left'),
        nextArrow: $('.carousel-arrow_right'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              vertical: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              vertical: false,
              slidesToShow: 2,
            },
          },
        ],
      })
    }

    if ($(modal).find('.select-here').length > 0) {
      $('.select-here').select2({
        language: 'ru',
        minimumResultsForSearch: Infinity,
      })
    }
  })

  const datepickerDefaultOptions = { autoClose: true }

  $('.datepicker-days').datepicker({
    language: 'ru',
    view: 'days',
    minView: 'days',
    dateFormat: 'd',
    classes: 'datepicker-type-days',
    ...datepickerDefaultOptions,
  })

  $('.datepicker-months').datepicker({
    language: 'ru',
    view: 'months',
    minView: 'months',
    dateFormat: 'MM',
    classes: 'datepicker-type-months',
    ...datepickerDefaultOptions,
  })

  $('.datepicker-years').datepicker({
    language: 'ru',
    view: 'years',
    minView: 'years',
    dateFormat: 'yyyy',
    ...datepickerDefaultOptions,
  })

  $('input[type="tel"]').each(function () {
    IMask(this, {
      mask: '+{7} (000) 000-00-00',
    })
  })

  $('.select-here').select2({
    language: 'ru',
    minimumResultsForSearch: Infinity,
  })

  if ($('.carousel-partners').length > 0) {
    $('.carousel-partners').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
      prevArrow: $('.carousel-arrow_left'),
      nextArrow: $('.carousel-arrow_right'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }

  if ($('.carousel-conf').length > 0) {
    $('.carousel-conf').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      prevArrow: false,
      nextArrow: false,
      appendDots: '.carousel-conf-cont',
    })
  }
  
  if ($('#map').length > 0 && $('#init-map').length > 0) {
    $('#init-map').one('click', () => {
      ymaps.ready(init)
      function init() {
        const map = new ymaps.Map('map', {
          center: [59.978246, 30.315464],
          zoom: 16,
          controls: ['zoomControl'],
        })
        // HintLayout = ymaps.templateLayoutFactory.createClass(
        //   `<div class='styled-hint-on-map'>
        //     {{ properties.address }}
        //   </div>`,
        //   {
        //     getShape: function () {
        //       var el = this.getElement(),
        //         result = null
        //       if (el) {
        //         var firstChild = el.firstChild
        //         result = new ymaps.shape.Rectangle(
        //           new ymaps.geometry.pixel.Rectangle([
        //             [0, 0],
        //             [firstChild.offsetWidth, firstChild.offsetHeight],
        //           ])
        //         )
        //       }
        //       return result
        //     },
        //   }
        // )
        var iconLayoutObj = {
          iconLayout: 'default#image',
          iconImageHref: './assets/images/geo-icon.png',
          iconImageSize: [70, 63],
          iconImageOffset: [-70, -63],
          // hintLayout: HintLayout,
        }
        var geoObj = new ymaps.Placemark(
          [59.978246, 30.315464],
          {
            address: 'СПб, Аптекарская набережная, д.20 Лит.А, оф. 211',
          },
          iconLayoutObj
        )

        map.geoObjects.add(geoObj)

        map.behaviors.disable('scrollZoom')
      }
    })
  }
})
