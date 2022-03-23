(function () {
    const ToggleSubMenuFooter = {
        init() {
            // CIBLER LE LI QUI A UN SOUS MENU
            this.element = document.querySelector('#menu-pied-de-page .menu-item-has-children>a');
            this.elementParent = document.querySelector('#menu-pied-de-page .menu-item-has-children');
            this.submenu = document.querySelector('#menu-pied-de-page .sub-menu');

            this.element.addEventListener('click', (e) => this.toggle(e));
            document.addEventListener('click', (e) => this.bodyClick(e));

        },
        toggle(e) {
            e.preventDefault();
            this.submenu.classList.toggle('hidden');
            this.elementParent.classList.toggle('group');
            this.elementParent.classList.toggle('text-white');
        },
        bodyClick(e) {
            if (e.target === this.element || this.element.contains(e.target)) {
                return;
            }
            this.submenu.classList.add('hidden');
            this.elementParent.classList.remove('text-white');
            this.elementParent.classList.add('group');
        }
    }
    ToggleSubMenuFooter.init();
})();
