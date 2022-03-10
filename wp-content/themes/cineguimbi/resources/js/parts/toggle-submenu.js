(function () {
    const ToggleSubMenu = {
        init() {
            // CIBLER LE LI QUI A UN SOUS MENU
            this.element = document.querySelector('.menu-item-has-children');

            // cibler le lien et ajouter la class SUB
            this.toggleSub = this.element.querySelector('a');

            // cibler la flèche du lien
            this.toggleArrow = this.element.querySelector('a i');

            // cibler le sous menu UL
            this.submenu = this.element.querySelector('ul');

            // cibler les LI du sous menu
            this.submenu = this.element.querySelector('.sub-menu');
            this.submenuLi = this.submenu.querySelectorAll('li a');
            for(let li = 0 ; li < this.submenuLi.length; li++){
                this.submenuLi[li].classList.remove('menu-link');
            }

            this.toggleSub.addEventListener('click', (e) => this.toggle(e));
            this.toggleSub.addEventListener('mouseover', (e) => this.hover(e));
            this.submenu.addEventListener('mouseover', (e) => this.hover(e));
            this.toggleSub.addEventListener('mouseout', (e) => this.remove(e));
            this.submenu.addEventListener('mouseout', (e) => this.remove(e));
            document.addEventListener('click', (e) => this.bodyClick(e));
        },
        toggle(e) {
            e.preventDefault();
            this.submenu.classList.toggle('hidden');
            this.toggleArrow.classList.toggle('rotate-180');
        },
        hover(e) {
            e.preventDefault();
            this.submenu.classList.remove('hidden');
            this.toggleArrow.classList.add('rotate-180');
        },
        remove(e) {
            e.preventDefault();
            this.submenu.classList.add('hidden');
            this.toggleArrow.classList.remove('rotate-180');
        },
        bodyClick(e) {
            if (e.target === this.toggleSub || this.toggleSub.contains(e.target)) {
                return;
            }
            this.submenu.classList.add('hidden');
            this.toggleArrow.classList.remove('rotate-180');
        }
    }
    ToggleSubMenu.init();
})();
