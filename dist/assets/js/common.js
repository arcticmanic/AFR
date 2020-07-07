$(document).ready(function () {
  $(document).on('modal-opens', e => {
    const modal = e.detail.modal

    const carouselBaseOptions = {
      infinite: true,
      dots: false,
      prevArrow: $('.carousel-arrow_left'),
      nextArrow: $('.carousel-arrow_right'),
    }

    if ($(modal).find('.carousel').length > 0) {
      $(modal)
        .find('.carousel')
        .slick({
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

    if (
      $(modal).find('.carousel-nav').length > 0 &&
      $(modal).find('.carousel-for-nav').length > 0
    ) {
      $(modal).find('.carousel-for-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.carousel-nav',
        infinite: true,
        dots: false,
        arrows: false,
      })

      $(modal)
        .find('.carousel-nav')
        .slick({
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
