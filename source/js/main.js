'use strict';
var navButton = document.querySelector('.navigation-toggle');
var navigation = document.querySelector('.navigation');
var navigationItem = document.querySelectorAll('.navigation__item');

navigation.classList.remove('navigation--nojs');
navButton.addEventListener('click', function (evt) {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--open');
    navButton.classList.remove('navigation-toggle--open');
    navButton.classList.add('navigation-toggle--close');
  } else {
    navigation.classList.remove('navigation--open');
    navButton.classList.remove('navigation-toggle--close');
    navigation.classList.add('navigation--closed');
    navButton.classList.add('navigation-toggle--open');
  }
});
