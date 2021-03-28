'use strict';

const navBurder = document.querySelector('.burger');
const menu = document.querySelector('.side-info');
const menuLink = document.querySelector('.menu__list');

navBurder.onclick = function() {
  navBurder.classList.toggle('burger_active');
  menu.classList.toggle('side-info_active');
  menuLink.classList.toggle('menu__list_tablet_active');
};

const modal = document.getElementById('myModal');
const btn = document.querySelector('.popup-button');
const span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
