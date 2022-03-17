(function () {
    const ToggleViews = {
        init() {
            this.wrapper = document.querySelector('.article-wrapper');

            if (this.wrapper != null) {
                this.cards = this.wrapper.querySelectorAll('.article-card')
                this.listBtn = document.querySelector('.show-list');
                this.cardBtn = document.querySelector('.show-card');
                this.cardBtn.addEventListener('click', (e) => this.toggleCard(e));
                this.listBtn.addEventListener('click', (e) => this.toggleList(e));
            }
        },
        toggleCard(e) {
            e.preventDefault();
            this.wrapper.classList.add('card');

            this.cardBtn.classList.remove('bg-beige', 'text-primary', 'fill-primary');
            this.cardBtn.classList.add('bg-primary', 'text-white', 'fill-white');

            this.listBtn.classList.remove('bg-primary', 'text-white', 'fill-white');
            this.listBtn.classList.add('bg-beige', 'text-primary', 'fill-primary');

            this.cards.forEach((card) => {
                card.classList.remove('md:aspect-auto', 'md:grid', 'md:grid-cols-md-actu', 'md:items-center', 'md:text-left');
                card.querySelector('img').classList.remove('md:aspect-auto', 'md:h-full');
            });
        },
        toggleList(e) {
            e.preventDefault();
            this.wrapper.classList.remove('card');

            this.cardBtn.classList.add('bg-beige', 'text-primary', 'fill-primary');
            this.cardBtn.classList.remove('bg-primary', 'text-white', 'fill-white');

            this.listBtn.classList.add('bg-primary', 'text-white', 'fill-white');
            this.listBtn.classList.remove('bg-beige', 'text-primary', 'fill-primary');


            this.cards.forEach((card) => {
                card.classList.add('md:aspect-auto', 'md:grid', 'md:grid-cols-md-actu', 'md:items-center', 'md:text-left');
                card.querySelector('img').classList.add('md:aspect-auto', 'md:h-full');
            });
        },
    }
    ToggleViews.init();
})();
