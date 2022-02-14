const menuopen = document.getElementById(`menu-open`)
const menuclose = document.getElementById(`menu-close`)
const listmenu = document.getElementById(`list-menu`)

menuopen.addEventListener('click', () => {
  listmenu.classList.add(`header-nav__link-list--display`)
  menuclose.classList.remove(`header-nav__menu-icon--display-none`)
  menuopen.classList.add(`header-nav__menu-icon--display-none`)
})
menuclose.addEventListener(`click`, () => {
  listmenu.classList.remove(`header-nav__link-list--display`)
  menuclose.classList.add(`header-nav__menu-icon--display-none`)
  menuopen.classList.remove(`header-nav__menu-icon--display-none`)
})
