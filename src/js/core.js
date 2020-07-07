import IMask from 'imask'
import lazyLoading from './lazyLoading'
import './plugins/mmenu'
import { modal } from './modal'
import { accord } from './accord'
import { mobileMenu } from './mobileMenu'
import { tabs } from './tabs'
import { hierarchyMenus } from './hierarchyMenus'

document.addEventListener('DOMContentLoaded', () => {
  lazyLoading()

  modal()

  accord()

  tabs()

  mobileMenu()

  hierarchyMenus()

  const copyBtns = document.querySelectorAll('[data-copy-btn]')

  copyBtns?.forEach(copyBtn => {
    copyBtn.addEventListener('click', () => {
      const copyText =
        copyBtn.getAttribute('data-copy-text') !== null
          ? copyBtn.textContent
          : copyBtn.querySelector('[data-copy-text]').textContent

      navigator.clipboard.writeText('<empty clipboard>').then(
        function () {
          navigator.clipboard.writeText(copyText)
        },
        function () {
          throw new Error(`Can't access clipboard`)
        }
      )
    })
  })

  // const el = document.createElement('textarea');
  // el.value = str;
  // document.body.appendChild(el);
  // el.select();
  // document.execCommand('copy');
  // document.body.removeChild(el);
})
