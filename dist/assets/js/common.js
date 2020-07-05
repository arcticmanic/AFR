$(document).ready(function () {
  $(document).on('modal-opens', e => {
    const modal = e.detail.modal

    if ($(modal).find('.carousel').length > 0) {
      $(modal)
        .find('.carousel')
        .slick({
          infinite: true,
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          prevArrow: $('.carousel-arrow_left'),
          nextArrow: $('.carousel-arrow_right'),
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
