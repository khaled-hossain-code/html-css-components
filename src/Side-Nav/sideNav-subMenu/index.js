const featureBtn = document.querySelector(".feature-btn")
const servicesBtn = document.querySelector(".services-btn")
const menuItemList = document.querySelectorAll(".side-nav__menu-list-item")
const classes = {}

const toggleClass = (elementSelector, togglingSelector) => {
  const element = document.querySelector(elementSelector)
  const hasClass = document.querySelector(
    `${elementSelector}${togglingSelector}`
  )
  const togglingClassName = togglingSelector.slice(1)

  if (hasClass) {
    element.classList.remove(togglingClassName)
  } else {
    element.classList.add(togglingClassName)
  }
}

const handleSubMenuToggle = (subMenuSelectorStr, toggleBtnSelectorStr) => {
  toggleClass(subMenuSelectorStr, ".side-nav__sub-menu-list--open")
  toggleClass(`${toggleBtnSelectorStr} i`, ".side-nav__icon--open")
}

featureBtn.addEventListener("click", () =>
  handleSubMenuToggle(".feature-sub-menu", ".feature-btn")
)

servicesBtn.addEventListener("click", () =>
  handleSubMenuToggle(".services-sub-menu", ".services-btn")
)

menuItemList.forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll(".side-nav__link").forEach((item) => {
      item.classList.remove("active")
    })
    console.log("setactive")
    event.target.classList.add("active")
  })
})
