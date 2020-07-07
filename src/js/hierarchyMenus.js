export const hierarchyMenus = () => {
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
}
