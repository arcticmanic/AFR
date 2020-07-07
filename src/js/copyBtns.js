export const copyBtns = () => {
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
}
