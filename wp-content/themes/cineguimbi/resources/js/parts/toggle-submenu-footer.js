(function () {
    const ToggleSubMenuFooter = {
        init() {
            // CIBLER LE LI QUI A UN SOUS MENU
            this.element = document.querySelector('#menu-pied-de-page .menu-item-has-children');
            this.submenu = document.querySelector('#menu-pied-de-page .sub-menu');

            if(this.element){
                this.element.addEventListener('click', (e)=>this.toggle(e));
                document.addEventListener('click', (e) => this.bodyClick(e));
            }
        },
        toggle(e) {
            e.preventDefault();
            this.submenu.classList.toggle('hidden');
            this.element.classList.toggle('group');
            this.element.classList.toggle('text-white');
        },
        bodyClick(e) {
            if (e.target === this.element || this.element.contains(e.target)) {
                return;
            }
            this.submenu.classList.add('hidden');
            this.element.classList.remove('text-white');
            this.element.classList.add('group');
        }
    }
    ToggleSubMenuFooter.init();
})();
