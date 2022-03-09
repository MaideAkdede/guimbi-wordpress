(function () {
    const ToggleReadMore = {
        init() {
            this.detailBtn = document.querySelector('section.detail .readmore');
            this.detailBtnContent = document.querySelectorAll('section.detail .readmore span');
            this.detailArrow= document.querySelector('section.detail .readmore i');
            this.detailHidden= document.querySelectorAll('section.detail ul li.hidden');
            this.detailAfter= document.querySelector('section.detail ul');

            this.synopsisBtn = document.querySelector('section.synopsis .readmore');
            this.synopsisBtnContent = document.querySelectorAll('section.synopsis .readmore span');
            this.synopsisArrow= document.querySelector('section.synopsis .readmore i');
            this.synopsisAfter = document.querySelector('section div');
            this.synHidden = document.querySelectorAll('section.synopsis div>*');


            if (this.detailBtn != null) {
                this.detailBtn.addEventListener('click', (e) => this.toggleDetail(e));
            }

            if (this.synopsisBtn != null) {
                this.synopsisBtn.addEventListener('click', (e) => this.toggleSynopsis(e));
            }
        },
        toggleDetail(e) {
            e.preventDefault();
            for(let i = 0 ; i < this.detailHidden.length; i++){
                this.detailHidden[i].classList.toggle('hidden');
            }
            for(let i = 0 ; i < this.detailBtnContent.length; i++){
                this.detailBtnContent[i].classList.toggle('hidden');
            }
            this.detailArrow.classList.toggle('rotate-180');
            this.detailAfter.classList.toggle('after:block');
            this.detailAfter.classList.toggle('after:hidden');
        },
        toggleSynopsis(e) {
            e.preventDefault();
            for(let i = 0 ; i < this.synHidden.length; i++){
                this.synHidden[i].classList.toggle('hidden');
                this.synHidden[i].classList.toggle('first:block');
            }
            for(let i = 0 ; i < this.synopsisBtnContent.length; i++){
                this.synopsisBtnContent[i].classList.toggle('hidden');
            }
            this.synopsisBtn.classList.toggle('-mt-7');
            this.synopsisAfter.classList.toggle('after:block');
            this.synopsisAfter.classList.toggle('after:hidden');
            this.synopsisArrow.classList.toggle('rotate-180');
        },
    }
    ToggleReadMore.init();
})();
