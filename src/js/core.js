import IMask from 'imask'
import lazyLoading from './lazyLoading'
import './plugins/mmenu'
import MicroModal from 'micromodal'

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()

  MicroModal.init({
    onShow: modal =>
      document.dispatchEvent(
        new CustomEvent('modal-opens', { detail: { modal: modal } })
      ),
    disableScroll: true,
    awaitCloseAnimation: true,
  })

  const modalTriggers = document.querySelectorAll('[data-micromodal-trigger]')

  modalTriggers?.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
    })
  })

  const inputPhones = document.querySelectorAll(
    'input[data-input-type="phone"]'
  )

  inputPhones?.forEach(inputPhone => {
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

    mobileMenu.querySelectorAll('[data-micromodal-trigger]')?.forEach(el => {
      el.addEventListener('click', () => {
        api.close({
          panel: menu,
        })
      })
    })
  }

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

  if (document.querySelector('[data-tabs]')) {
    new Tabby('[data-tabs]')

    document.addEventListener(
      'tabby',
      function (event) {
        const tab = event.target
        const previousTab = event.detail.previousTab

        tab.classList.remove('opacity-25')
        previousTab.classList.add('opacity-25')

        if (tab.getAttribute('data-title')) {
          tab
            .closest('.content-header')
            .querySelector('h1').textContent = tab.getAttribute('data-title')
        }
      },
      false
    )
  }
})
