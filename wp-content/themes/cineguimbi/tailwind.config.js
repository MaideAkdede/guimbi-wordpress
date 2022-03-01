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
            "family-regular": ["Biryani Regular"],
            "family-semi": ["Biryani SemiBold"],
            "family-bold": ["Biryani Bold"],
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

            height: {
                'logo-sm':'50px',
                'logo-md':'85px',
                'date-carousel':'87px',
                'toggle-button': '112px',
                '2px': '2px',
                'hero': '70vh',
                'pub':'300px',
            },
            minHeight:{
                'pub':'300px',
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
            },
            maxWidth: {
                'xxl': '1820px',
                'title': '16ch',
                '42ch': '42ch',
                '80vw': '80vw',
                'hero-top': '278px',
                'title-colored': '290px',
                'submenu': '300px',
            },
            fontSize: {
                'size-fontawesome': '1.1875rem',
                'hero-title': '1.4375rem',
                '13px': '0.8125rem',
                '15px': '0.9375rem',
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
                '22px': '1.375rem',
                '25px': '1.5625rem',
                '33px': '2.3625rem',
            },
            margin: {
                '1em': '1em',
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
                'md-actu': '1fr 1fr',
                '2-auto-1fr': 'auto 1fr',
                'md-footer': 'minmax(40px, auto) 1fr',
            },
            boxShadow: {
                'custom': '0 0 10px rgba(0, 0, 0, 0.1)',
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
        }
    },
    plugins: [
        tailpress.tailwind,
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-delicious-hamburgers')
    ]
};