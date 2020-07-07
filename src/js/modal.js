import MicroModal from 'micromodal'

export const modal = () => {
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
}
