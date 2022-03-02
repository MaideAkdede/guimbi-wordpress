(function () {
    const FocusSearch = {
        init() {
            this.form = document.querySelector(".search-form");
            if(this.form != null){
                this.input = document.querySelector(".search-form input[name='search']");
                this.form.addEventListener('mouseover', () => {
                    this.focus();
                });
                this.form.addEventListener('mouseout', () => {
                    this.focusOut();
                })
                document.addEventListener('click', (e) => this.bodyClick(e));
            }
        },
        focus() {
            if (this.input === document.activeElement) {
                this.form.classList.remove('translate-x-widget-search');
                this.form.classList.add('translate-x-0');
            }
        },
        focusOut() {
            if (this.input !== document.activeElement) {
                this.form.classList.add('translate-x-widget-search');
                this.form.classList.remove('translate-x-0');
            }
        },
        bodyClick(e) {
            if (e.target === this.form || this.form.contains(e.target)) {
                return;
            }
            this.form.classList.remove('translate-x-0');
            this.form.classList.add('translate-x-widget-search');
        }
    }
    FocusSearch.init();
})();
