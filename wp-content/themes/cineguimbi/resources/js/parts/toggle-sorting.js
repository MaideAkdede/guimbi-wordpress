(function () {
    const ToggleSorting = {
        init() {
            this.element = document.querySelector('.sort');

            if (this.element != null) {
                this.button = this.element.querySelector('.button');
                this.content = this.element.querySelector('.content');
                this.button.addEventListener('click', (e) => this.toggle(e));
                document.addEventListener('click', (e) => this.bodyClick(e));
            }
        },
        toggle(e) {
            e.preventDefault();
            this.content.classList.toggle('hidden');
            this.element.classList.toggle('after:hidden');
            this.element.classList.toggle('after:block');
            this.button.classList.toggle('active');
            document.querySelector('body').classList.toggle('overflow-y-hidden');

        },
        bodyClick(e) {
            if (e.target === this.element || this.element.contains(e.target)) {
                return;
            }
            this.content.classList.add('hidden');
            this.element.classList.add('after:hidden');
            this.element.classList.remove('after:block');
            this.button.classList.remove('active');
            document.querySelector('body').classList.remove('overflow-y-hidden');
        }
    }
    ToggleSorting.init();
})();
