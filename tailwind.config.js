/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/*.js"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            // sm: {
            //     padding: '6rem'
            // },



        },
        extend: {
            container: {
                center: true,

            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif'],
                opensans: ['Open Sans', 'sans-serif'],
            },
            colors: {
                darkblue: 'hsl(243, 87%, 12%)',
                desblue: 'hsl(238, 22%, 44%)',
                brightblue: 'hsl(224, 93%, 58%)',
                modcyan: 'hsl(170, 45%, 43%)',
                grayishblue: 'hsl(240, 75%, 98%)',
                lightgray: 'hsl(0, 0%, 75%)',

            },
            borderRadius: {
                slightcurve: '6px',
            },
            fontSize: {
                large: '2.7rem',
                tiny: '0.5rem',
                little: '0.6'
            },

        },
    },
    plugins: [],
}