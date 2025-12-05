---
---

/*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

console.log('main.js loaded - version 2.0');

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

// Initialize menu items as visible on page load
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].classList.add('is--moved');
}

// Declare variables once at the top
var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Handle initial state based on screen size
function initializeMenuState() {
  if (window.innerWidth < 1280) {
    // Mobile: hide sidebar by default
    myMenu.classList.remove('is--visible');
    myWrapper.classList.remove('is--pushed');
    myToggle.classList.remove('open');
  } else {
    // Desktop: show sidebar by default
    myMenu.classList.add('is--visible');
    myWrapper.classList.add('is--pushed');
    myToggle.classList.add('open');
  }
}

// Initialize on page load
initializeMenuState();

// Re-initialize on window resize
window.addEventListener('resize', initializeMenuState);

// Toggle sidebar visibility
function toggleClassMenu() {
  console.log('toggleClassMenu called, window width:', window.innerWidth);
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
  }

  // Force update of content width on desktop
  console.log('About to call updateContentWidth, width check:', window.innerWidth >= 1280);
  if (window.innerWidth >= 1280) {
    updateContentWidth();
  }
}

// Function to update content width based on sidebar state
function updateContentWidth() {
  var allInners = document.querySelectorAll('.inner');
  var mainInners = document.querySelectorAll('main > .inner');
  var isPushed = myWrapper.classList.contains('is--pushed');

  console.log('updateContentWidth called, isPushed:', isPushed);
  console.log('Found elements:', allInners.length);

  if (isPushed) {
    // Sidebar visible - constrain width
    allInners.forEach(function(element) {
      element.style.maxWidth = '1024px';
      element.style.width = '';
    });
  } else {
    // Sidebar hidden - expand to full width
    allInners.forEach(function(element) {
      element.style.maxWidth = 'none';
      element.style.width = '100%';
    });
    mainInners.forEach(function(element) {
      element.style.maxWidth = 'none';
      element.style.width = '100%';
    });
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}
