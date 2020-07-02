import IMask from 'imask'

import lazyLoading from './lazyLoading'
import './plugins/mmenu'
import MicroModal from 'micromodal'

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()

  MicroModal.init({ disableScroll: true, awaitCloseAnimation: true })

  const inputPhones = document.querySelectorAll(
    'input[data-input-type="phone"]'
  )

  inputPhones?.forEach((inputPhone) => {
    IMask(inputPhone, { mask: '+{7} (000) 000-00-00' })
  })

  const mobileMenu = document.querySelector('#mobile-menu')

  if (mobileMenu) {
    const menu = new Mmenu('#mobile-menu', {
      extensions: ['position-right', 'pagedim-black'],
      navbar: {
        title: 'АФР',
      },
    })

    const api = menu.API

    mobileMenu.querySelectorAll('[data-micromodal-trigger]')?.forEach((el) => {
      el.addEventListener('click', () => {
        api.close({
          panel: menu,
        })
      })
    })


  }
})
