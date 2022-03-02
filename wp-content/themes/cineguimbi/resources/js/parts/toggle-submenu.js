(function () {
    const ToggleSubMenu = {
        init() {
            this.toggleSub = document.querySelector('.sub');
            this.toggleArrow = document.querySelector('.sub i');
            this.submenu = document.querySelector('.sub-menu');

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
