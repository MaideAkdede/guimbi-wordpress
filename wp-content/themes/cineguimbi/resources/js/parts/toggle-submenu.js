(function () {
    const ToggleSubMenu = {
        init() {
            this.toggleSub = document.querySelector('.sub');
            this.toggleArrow = document.querySelector('.sub i');
            this.submenu = document.querySelector('.sub-menu');

            this.toggleSub.addEventListener('click', (e) => this.toggle(e));
            document.addEventListener('click', (e) => this.bodyClick(e));
        },
        toggle(e) {
            e.preventDefault();
            this.submenu.classList.toggle('hidden');
            this.toggleArrow.classList.toggle('rotate-180');
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
