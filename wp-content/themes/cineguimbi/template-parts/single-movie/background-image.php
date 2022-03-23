<?php if(get_field('bg_image')): ?>
    <div class="w-screen h-4/5 lg:h-single-film-bg absolute -z-3 top-0 overflow-hidden" aria-hidden="true">
        <img class="w-full h-full object-cover object-center blur brightness-50 scale-105"
             src="<?= get_field('bg_image')['url']; ?>"
             alt="">
    </div>
<?php else: ?>
    <div class="w-screen bg-black/90 h-4/5 lg:h-single-film-bg absolute -z-3 top-0 overflow-hidden" aria-hidden="true"></div>
<?php endif ?>