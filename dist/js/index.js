~function() {
    "use strict";

    var navTrigger = document.querySelector('.nav-trigger'),
        superWrap = document.querySelector('.super-wrap'),
        indexNav = document.querySelector('.index-nav');

    var isOpen = false;
    navTrigger.addEventListener('click', function() {
        if(!isOpen) {
            superWrap.className = 'super-wrap close';
            indexNav.className = 'index-nav show';
            this.getElementsByTagName('p')[0].innerHTML = 'CLOSE';
            this.className = 'nav-trigger open';
        } else {
            superWrap.className = 'super-wrap';
            indexNav.className = 'index-nav';
            this.getElementsByTagName('p')[0].innerHTML = 'MENU';
            this.className = 'nav-trigger';
        }
        isOpen = !isOpen;
    });

}();
