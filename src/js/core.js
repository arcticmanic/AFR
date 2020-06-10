// intersection-observer have no default export (neither any export). Write it yourself if need after installing the package.

// import intersectionObserver from 'intersection-observer'
// import 'mmenu-js/custom-build/dist/mmenu'
// import 'mhead-js/src/mhead'
// import velocity from 'velocity-animate'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
import IMask from 'imask'
import MicroModal from 'micromodal'
// import 'choices'
// import 'tabbyjs'

import lazyLoading from './lazyLoading'

document.addEventListener('DOMContentLoaded', () => {
  intersectionObserver()

  lazyLoading()

  const inputPhones = document.querySelectorAll(
    'input[data-input-type="phone"]'
  )

  inputPhones?.forEach(inputPhone => {
    IMask(inputPhone, { mask: '+{7} (000) 000-00-00' })
  })
})
