import IMask from 'imask'
import lazyLoading from './lazyLoading'
import './plugins/mmenu'
import { modal } from './modal'
import { accord } from './accord'
import { mobileMenu } from './mobileMenu'
import { tabs } from './tabs'

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()

  modal()

  accord()

  tabs()

  mobileMenu()

  const hierarchyMenus = document.querySelectorAll('.hierarchy-menu')

  hierarchyMenus?.forEach(hierarchyMenu => {
    hierarchyMenu.querySelectorAll('a')?.forEach(el => {
      if (el.closest('li').querySelector('ul')) {
        el.classList.add('with-nested-items')
        el.addEventListener('click', e => {
          e.target.classList.toggle('opened')
        })
      }
    })
  })
})
