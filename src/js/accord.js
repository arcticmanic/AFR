export const accord = () => {
  const accordButtons = document.querySelectorAll('.accordion__button')

  accordButtons?.forEach(accordButton =>
    accordButton.addEventListener(
      'click',
      e => (
        e.target.classList.toggle('active'),
        e.target
          ?.closest('.accordion-title')
          .nextElementSibling.classList.toggle('active')
      )
    )
  )
}
