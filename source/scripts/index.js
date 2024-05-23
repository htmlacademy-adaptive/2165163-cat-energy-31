/* hamburger menu */
const hamburgerMenu = document.querySelector('.hamburger-menu__list');
const buttonToogle = document.querySelector('.hamburger-menu__toogle');

hamburgerMenu.classList.remove('hamburger-menu__list--no-js');
hamburgerMenu.classList.remove('hamburger-menu__list--open');
hamburgerMenu.classList.add('hamburger-menu__list--close');
buttonToogle.classList.remove('hamburger-menu__toogle--no-js');

buttonToogle.onclick = function () {
  if (hamburgerMenu.classList.contains('hamburger-menu__list--open')) {
    hamburgerMenu.classList.remove('hamburger-menu__list--open');
    hamburgerMenu.classList.add('hamburger-menu__list--close');
    buttonToogle.classList.remove('hamburger-menu__toogle--open');
    buttonToogle.classList.add('hamburger-menu__toogle--close');
  } else {
    hamburgerMenu.classList.remove('hamburger-menu__list--close');
    hamburgerMenu.classList.add('hamburger-menu__list--open');
    buttonToogle.classList.remove('hamburger-menu__toogle--close');
    buttonToogle.classList.add('hamburger-menu__toogle--open');
  }
};

/* interactive map */
const wrapperMap = document.querySelector('.contacts-section__wrapper-map-interactive');
const imageMap = document.querySelector('.contacts-section__image-map');

wrapperMap.classList.remove('contacts-section__wrapper-map-interactive--no-js');
imageMap.classList.add('contacts-section__image-map--open-interactive-map');
