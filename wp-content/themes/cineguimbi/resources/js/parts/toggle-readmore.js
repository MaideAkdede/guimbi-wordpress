(function () {
    const ToggleReadMore = {
        init() {
            this.detailBtn = document.querySelector('section.detail .readmore');
            this.synopsisBtn = document.querySelector('section.synopsis .readmore');

            if (this.detailBtn != null) {
                this.detailBtnContent = document.querySelectorAll('section.detail .readmore span');
                this.detailArrow= document.querySelector('section.detail .readmore i');
                this.detailHidden= document.querySelectorAll('section.detail ul li.hidden');
                this.detailAfter= document.querySelector('section.detail ul');

                this.detailBtn.addEventListener('click', (e) => this.toggleDetail(e));
            }
            if (this.synopsisBtn != null) {

                this.synopsisBtnContent = document.querySelectorAll('section.synopsis .readmore span');
                this.synopsisArrow= document.querySelector('section.synopsis .readmore i');
                this.synopsisAfter = document.querySelector('section.synopsis .synopsis-wysiwyg');
                this.synHidden = document.querySelectorAll('section.synopsis .synopsis-wysiwyg p:not(:first-child)');
                this.synLink = document.querySelector('section.synopsis .synopsis-wysiwyg>a');

                this.synopsisBtn.addEventListener('click', (e) => this.toggleSynopsis(e));

                for(let i = 0 ; i < this.synHidden.length; i++){
                    this.synHidden[i].classList.add('hidden');
                }
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
            }
            for(let i = 0 ; i < this.synopsisBtnContent.length; i++){
                this.synopsisBtnContent[i].classList.toggle('hidden');
            }
            this.synLink.classList.toggle('hidden');
            this.synopsisBtn.classList.toggle('-mt-7');
            this.synopsisAfter.classList.toggle('after:block');
            this.synopsisAfter.classList.toggle('synopsis-wysiwyg-hidden');
            this.synopsisAfter.classList.toggle('after:hidden');
            this.synopsisArrow.classList.toggle('rotate-180');
        },
    }
    ToggleReadMore.init();
})();
