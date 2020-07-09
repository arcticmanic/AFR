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

  if (
    $('.carousel-partners').length > 0 &&
    !$('.carousel-partners').hasClass('slick-initialized')
  ) {
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

  if (
    $('.carousel-conf').length > 0 &&
    !$('.carousel-conf').hasClass('slick-initialized')
  ) {
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

  if ($('[data-lightbox]').length > 0) {
    lightbox.option({
      resizeDuration: 200,
      fadeDuration: 200,
    })
  }

  if ($('#map').length > 0 && $('#init-map').length > 0) {
    $('#init-map').one('click', () => {
      ymaps.ready(init)
      function init() {
        const map = new ymaps.Map('map', {
          center: [59.939095, 30.315868],
          zoom: 8,
          controls: ['zoomControl'],
        })

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="width:20px;"><strong>$[properties.iconContent]</strong></div>'
        )

        var icon = {
          iconLayout: 'default#imageWithContent',
          iconImageHref: './assets/images/geo.png',
          iconImageSize: [85, 66],
          iconImageOffset: [-42.5, -50],
          iconContentOffset: [30, 13],
          iconContentLayout: MyIconContentLayout,
        }

        var geoArr = [
          new ymaps.Placemark(
            [59.939095, 30.315868],
            {
              iconContent: '888',
            },
            icon
          ),
          new ymaps.Placemark(
            [59.900538, 32.352672],
            {
              iconContent: '1',
            },
            icon
          ),
          new ymaps.Placemark(
            [59.568405, 30.122892],
            {
              iconContent: '1',
            },
            icon
          ),
        ]

        geoArr.forEach(el => {
          el.events.add('click', function () {
            MicroModal.show('modal-city')
          })
          map.geoObjects.add(el)
        })

        map.behaviors.disable('scrollZoom')
      }
    })
  }
})
