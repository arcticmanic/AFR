import IMask from 'imask'
import lazyLoading from './lazyLoading'
import './plugins/mmenu'
import { modal } from './modal'
import { accord } from './accord'
import { mobileMenu } from './mobileMenu'
import { tabs } from './tabs'
import { hierarchyMenus } from './hierarchyMenus'
import { copyBtns } from './copyBtns'

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()

  modal()

  accord()

  tabs()

  mobileMenu()

  hierarchyMenus()

  copyBtns()
})
