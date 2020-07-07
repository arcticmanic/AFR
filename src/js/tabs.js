export const tabs = () => {
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
}
