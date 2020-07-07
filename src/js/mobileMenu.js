export const mobileMenu = () => {
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
}
