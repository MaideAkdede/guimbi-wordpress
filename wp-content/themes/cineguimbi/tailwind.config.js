const _ = require("lodash");
const theme = require('./theme.json');
const tailpress = require("@jeffreyvr/tailwindcss-tailpress");

module.exports = {
    mode: 'jit',
    content: [
        './*/*.php',
        './**/*.php',
        './resources/css/*.css',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        fontFamily: {
            "family-light": ["Biryani Light"],
            "family-regular": ["Biryani Regular"],
            "family-semi": ["Biryani SemiBold"],
            "family-bold": ["Biryani Bold"],
            "family-extrabold": ["Biryani ExtraBold"],
            "family-black": ["Biryani Black"],
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailpress.colorMapper(tailpress.theme('settings.color.palette', theme)),
            backgroundImage: {
                'hero-texture': "url('../images/texture/african-texture.png')",
                'hero-desktop': "url('../images/texture/hero-desktop.svg')",
                'footer': "url('../images/texture/footer.svg')",
                'menu-texture': "url('../images/texture/menu.svg')",
            },
            keyframes: {
                bar: {
                    'from': { width: '0%' },
                    'to': { width: '100%' },
                }
            },
            animation: {
                bar: 'bar 2s ease-in-out infinite',
            },
            height: {
                '6.5': '1.625rem',
                '9.5': '2.375rem',
                'logo-sm':'50px',
                'logo-md':'85px',
                'date-carousel':'87px',
                'toggle-button': '112px',
                '2px': '2px',
                'hero': '70vh',
                '75vh': '75vh',
                '78vh': '78vh',
                'pub':'300px',
                'play-logo': '23px',
                'play-logo-lg': '40px',
                'single-film-bg': 'calc(100vh + 5vw)',
            },
            minHeight:{
                'pub':'300px',
                'hero':'780px',
                '90vh':'90vh'
            },
            maxHeight: {
                'support': '53px',
            },
            width: {
                'logo-sm':'138px',
                'logo-sm-footer':'40px',
                'logo-md':'233px',
                'toggle-button': '91px',
                'widget-button': '60px',
                '6.5': '1.625rem',
                '9.5': '2.375rem',
                '12.5': '3.125rem',
                '42ch': '42ch',
                '80vw': '80vw',
                'play': '76px',
                'play-lg': '134px',
                'play-logo': '26px',
                'play-logo-lg': '35px',
            },
            maxWidth: {
                'xxl': '1820px',
                'title': '16ch',
                '42ch': '42ch',
                'wysiwyg': '110ch',
                '80vw': '80vw',
                'hero-top': '278px',
                'title-colored': '290px',
                'submenu': '304px',
                'movie': '1554px',
                'movie-image': '580px',
                'synopsis': '812px',
                'details': '750px',
            },
            fontSize: {
                'size-fontawesome': '1.1875rem',
                'movie-title':'2.625rem',
                'hero-title': '1.4375rem',
                '10px': '0.625rem',
                '13px': '0.8125rem',
                '15px': '0.9375rem',
                '23px': '1.4375rem',
                '25px': '1.5625rem',
                '26px': '1.625rem',
                'tag': '0.625rem',
                'pub': '1.5625rem',
                'footer-social': '1.0625rem',
            },
            borderWidth: {
                '2px': '2px',
            },
            padding: {
                '3.75': '0.9375rem',
                '5.5': '1.375rem',
                '10.5': '2.625rem',
                '1px': '1px',
                '15px': '0.9375rem',
                '22px': '1.375rem',
                '25px': '1.5625rem',
                '33px': '2.3625rem',
            },
            margin: {
                '1.25': '0.3125rem',
                '6.25': '1.5625rem',
                '11.25': '2.8125rem',
                '15': '3.75rem',
                '25': '6.25rem',
                '1em': '1em',
                '10vh': '10vh',
                't-hero-title': '1.6875rem',
                'b-hero-title': '1.125rem',
            },
            borderRadius: {
                '4xl': '2.1875rem',
            },
            translate: {
                'widget-medias':'calc(100% - 60px)',
                'widget-search':'calc(100% - 60px)',
            },
            inset: {
                'hero': '15%',
                '22.75': '5.6875rem',
                'sticky-at-header': '112px',
            },
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
            },
            opacity: {
                '6': '0.06',
                '15': '0.15',
            },
            aspectRatio: {
                'card': '4 / 6',
                'card-long': '3 / 5',
                '3/2':'3 / 2'
            },
            gridTemplateColumns: {
                'md-actu': '1fr 2fr',
                'movie': '3fr 1fr 2fr 4fr',
                'movie-lg': '1fr 1fr minmax(auto, 750px)',
                'movie-cast-grid': 'minmax(max-content, 1fr) 2fr',
                'movie-cast': '1fr 2fr',
                '2-2fr-1fr': '2fr 1fr',
                '2-auto-1fr': 'auto 1fr',
                'md-footer': 'minmax(40px, auto) 1fr',
                'seance': '1fr 2fr auto',
                'movie-info': '7fr 1fr 3fr',
            },
            gridTemplateRows:{
                'max-height':'minmax(1fr, 300px)'
            }
            ,
            boxShadow: {
                'custom': '0 0 10px rgba(0, 0, 0, 0.1)',
                'set-hover':'inset 0 0 0 0.01rem transparent',
                'hover':'inset 22rem 0 0 0 #818a55',
                'hover-white':'inset 22rem 0 0 0 white',
                'beige':'20vw 0 0 20vw #F1F2EB'
            },
        },
        screens: {
            'xxs': '280px',
            'xs': '360px',
            'sm': '640px',
            'md': '768px',
            'lg': tailpress.theme('settings.layout.contentSize', theme),
            'xl': tailpress.theme('settings.layout.wideSize', theme),
            'xxl': '1820px',
            '2xxl': '2080px',
            '3xxl': '2280px',
            '4xxl': '2500px',
        }
    },
    plugins: [
        tailpress.tailwind,
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-delicious-hamburgers')
    ]
};
