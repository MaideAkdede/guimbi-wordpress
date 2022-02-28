<div class="w-screen h-hero overflow-hidden relative md:mb-16 lg:mb-24 after:hidden
lg:after:bg-hero-desktop after:bg-contain after:bg-center after:bg-no-repeat lg:after:block after:absolute after:top-0 after:-left-[30%] xxl:after:-left-0 xxl:after:w-1/2 xxl:after:bg-cover after:h-full after:w-full"
>
    <img class="h-full w-full object-cover z-1"
         sizes="(max-width: 720px) 414px,
            1440px"
         src="<?= get_template_directory_uri() . '/resources/images/cover/hero.png' ?>" alt="hero"
         srcset="<?= get_template_directory_uri() . '/resources/images/cover/hero-sm.png' ?> 414w,
             <?= get_template_directory_uri() . '/resources/images/cover/hero.png' ?> 1440w">
    <div class="max-w-xxl w-full right-1/2 translate-x-1/2 mx-auto px-5 md:p-0 absolute bottom-hero md:top-0 md:h-full lg:z-2">
        <div class="bg-primary md:rounded-none lg:bg-inherit rounded-tr-4xl text-white pt-22px pb-33px px-25px w-3/4 max-w-hero-top md:max-w-md relative md:h-full">
            <div class="bg-hero-texture opacity-6 lg:hidden bg-cover bg-no-repeat absolute h-full w-full z-2 top-0 left-0 rounded-tr-4xl md:rounded-none backdrop-grayscale"></div>
            <div class="relative z-3 md:my-auto md:h-full md:grid md:place-content-center">
                <p class="bg-primary-dark px-4 py-2 mb-1em max-w-max rounded-full text-tag md:text-sm">Avant-première</p>
                <p class="uppercase text-xs mb-4 md:text-base">Le
                    <time datetime="">Lundi 7 février</time>
                </p>
                <h1 class="capitalize font-family-black font-extrabold text-hero-title max-w-title mt-t-hero-title mb-b-hero-title md:text-[2.625rem]">
                    James Bond 007 No time to die</h1>
                <a href=""
                   class="inline-block text-xs uppercase tracking-widest font-bold font-family-bold text-primary bg-white px-6 pt-3 pb-2 leading-none border-2px border-white hover:bg-transparent hover:text-white md:text-base md:max-w-max">Voir
                    l‘évènement</a>
            </div>
        </div>
    </div>
</div>