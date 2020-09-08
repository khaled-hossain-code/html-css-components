const featureBtn = document.querySelector(".feature-btn")
const servicesBtn = document.querySelector(".services-btn")
const classes = {}

handleSubMenuToggle = (subMenuSelector, toggleBtnSelector) => {
  const subMenu = document.querySelector(subMenuSelector)
  const subMenuBtnIcon = document.querySelector(`${toggleBtnSelector} i`)
  const isSubMenuOpen = document.querySelector(
    `${subMenuSelector}.side-nav__sub-menu-list--open`
  )

  if (isSubMenuOpen) {
    subMenu.classList.remove("side-nav__sub-menu-list--open")
    subMenuBtnIcon.classList.remove("side-nav__icon--open")
  } else {
    subMenu.classList.add("side-nav__sub-menu-list--open")
    subMenuBtnIcon.classList.add("side-nav__icon--open")
  }
}

featureBtn.addEventListener("click", () =>
  handleSubMenuToggle(".feature-sub-menu", ".feature-btn")
)
servicesBtn.addEventListener("click", () =>
  handleSubMenuToggle(".services-sub-menu", ".services-btn")
)
