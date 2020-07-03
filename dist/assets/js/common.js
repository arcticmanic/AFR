$(document).ready(function () {
  $(document).on('modal-opens', (e) => {
    const modal = e.detail.modal
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
  })
})
