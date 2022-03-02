<section class="my-8 max-w-xxl mx-auto">
    <h1 class="text-xl md:text-25px mt-16 mb-8 text-center text-primary font-black font-family-black uppercase tracking-widest">
        Février 2022</h1>
    <div class="">
        <div class="owl-carousel owl-theme owl-date">
            <?php for ($x = 1; $x <= 25; $x++): ?>
                <a href=""
                   title=""
                   class="inline-flex items-center justify-center aspect-3/2 h-date-carousel font-bold font-family-bold border-r border-light-secondary text-primary py-2 last:border-none focus:outline-none">
                    <time class="flex flex-col items-center justify-center <?php if ($x == '2'): ?>border border-primary<?php endif; ?> rounded-full aspect-square h-full">
                        <span class="uppercase text-xs tracking-widest  text-primary text-opacity-50">Lun</span> <span
                                class="<?php if ($x !== '2'): ?>text-26px text-dark-tertiary<?php endif; ?> <?php if ($x == '2'): ?>text-2xl<?php endif; ?>">0<?= $x; ?></span>
                    </time>
                </a>
            <?php endfor; ?>
        </div>
    </div>
    <div class="lg:grid lg:grid-cols-3">
        <div class="my-8">
            <div class="border-b border-primary border-opacity-40 mb-5">
                <h2 class="colored-title bg-primary">Salle intérieur</h2>
            </div>
            <div class="px-5 sm:grid sm:grid-cols-2 sm:gap-5 py-5">
                <?php for ($x = 1; $x <= 6; $x++): ?>
                    <article class="mb-5 sm:my-0 px-5 pt-3 pb-6 rounded-md bg-primary bg-opacity-10 relative">
                        <div class="font-bold font-family-bold flex justify-between items-center mb-1.5">
                            <time class="text-primary">12:00</time>
                            <span class="text-xs text-white text-center bg-primary rounded-full uppercase h-8 w-8 flex items-center justify-center leading-none pt-1">vf</span>
                        </div>
                        <h3 class="text-lg font-bold font-family-bold">Adieu Monsieur Haffman</h3>
                        <?php if ($x <= 3): ?>
                            <p class="hidden tag sm:block mt-2">Nouveau</p>
                        <?php endif; ?>
                        <a href="" title="Voir le film : Adieu Monsieur Haffman"
                           class="absolute h-full w-full rounded-md top-0 left-0 hover:border-2px hover:border-primary active:bg-primary active:bg-opacity-20 focus:outline-none focus:border-2px focus:border-primary"></a>
                    </article>
                <?php endfor; ?>
            </div>
        </div>
        <div class="my-8">
            <div class="border-b border-tertiary border-opacity-40 mb-5">
                <h2 class="colored-title bg-tertiary">Esplanade</h2>
            </div>
            <div class="px-5 sm:grid sm:grid-cols-2 sm:gap-5 py-5">
                <?php for ($x = 1; $x <= 6; $x++): ?>
                    <article class="mb-5 sm:my-0 px-5 pt-3 pb-6 rounded-md bg-tertiary bg-opacity-10 relative">
                        <div class="font-bold font-family-bold flex justify-between items-center mb-1.5">
                            <time class="text-tertiary">12:00</time>
                            <span class="text-xs text-white text-center bg-tertiary rounded-full uppercase h-8 w-8 flex items-center justify-center leading-none pt-1">vf</span>
                        </div>
                        <h3 class="text-lg font-bold font-family-bold">Adieu Monsieur Haffman</h3>
                        <a href="" title="Voir le film : Adieu Monsieur Haffman"
                           class="absolute h-full w-full rounded-md top-0 left-0 hover:border-2px hover:border-tertiary active:bg-tertiary active:bg-opacity-20 focus:outline-none focus:border-2px focus:border-tertiary"></a>
                    </article>
                <?php endfor; ?>
            </div>
        </div>
        <div class="my-8">
            <div class="border-b border-secondary border-opacity-40 mb-5">
                <h2 class="colored-title bg-secondary">Évènements</h2>
            </div>
            <div class="px-5 sm:grid sm:grid-cols-2 sm:gap-5 py-5">
                <?php for ($x = 1; $x <= 6; $x++): ?>
                    <article class="mb-5 sm:my-0 px-5 pt-3 pb-6 rounded-md bg-secondary bg-opacity-10 relative">
                        <div class="font-bold font-family-bold flex justify-between items-center mb-1.5">
                            <time class="text-secondary">12:00</time>
                            <span class="text-xs text-white text-center bg-secondary rounded-full uppercase h-8 w-8 flex items-center justify-center leading-none pt-1">vf</span>
                        </div>
                        <h3 class="text-lg font-bold font-family-bold">Adieu Monsieur Haffman</h3>
                        <a href="" title="Voir le film : Adieu Monsieur Haffman"
                           class="absolute h-full w-full rounded-md top-0 left-0 hover:border-2px hover:border-secondary active:bg-secondary active:bg-opacity-20 focus:outline-none focus:border-2px focus:border-secondary"></a>
                    </article>
                <?php endfor; ?>
            </div>
        </div>
    </div>
</section>