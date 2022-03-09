(function () {
    const ToggleTabs = {
        init() {
            this.detailBtn = document.querySelector('button.detail');
            this.synopsisBtn = document.querySelector('button.synopsis');
            this.detailSection = document.querySelector('section.detail');
            this.synopsisSection = document.querySelector('section.synopsis');

            if (this.detailBtn != null) {
                this.detailBtn.addEventListener('click', (e) => this.toggleDetail(e));
            }

            if (this.synopsisBtn != null) {
                this.synopsisBtn.addEventListener('click', (e) => this.toggleSynopsis(e));
            }
        },
        toggleDetail(e) {
            e.preventDefault();
            this.synopsisBtn.classList.remove('active');
            this.detailBtn.classList.add('active');
            this.detailSection.classList.remove('hidden');
            this.synopsisSection.classList.add('lg:hidden');
        },
        toggleSynopsis(e) {
            e.preventDefault();
            this.synopsisBtn.classList.add('active');
            this.detailBtn.classList.remove('active');
            this.detailSection.classList.add('hidden');
            this.synopsisSection.classList.remove('lg:hidden');
        },
    }
    ToggleTabs.init();
})();
