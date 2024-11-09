/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        phone: '280px', // Tu valor personalizado para teléfono
        tablet: '640px', // Tu valor personalizado para tablet
        mac: '1280px', // Tu valor personalizado para tablet
        laptop: '1536px', // Tu valor personalizado para laptop
        desktop: '1920px' // Tu valor personalizado para desktop
        // Puedes añadir más breakpoints personalizados si lo necesitas
      },
      animation: {
        moveCard1: 'move1 2s ease forwards',
        moveCard2: 'move2 2s ease forwards ',
        moveCard3: 'move3 2s ease forwards ',
        moveCard4: 'move4 2s ease forwards ',
        moveCard5: 'move5 2s ease forwards ',
        moveCard6: 'move6 2s ease forwards ',
        moveCard7: 'move7 2s ease forwards ',
        moveCard8: 'move8 2s ease forwards ',
        moveCard9: 'move9 2s ease forwards ',
        moveCard10: 'move10 2s ease forwards '
      },
      keyframes: {
        move1: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-350px, -240px)' }
        },
        move2: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(400px, -270px)' }
        },
        move3: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-350px, 300px)' }
        },
        move4: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(530px, 320px)' }
        },
        move5: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, -220px)' }
        },
        move6: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(300px, 220px)' }
        },
        move7: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-600px, 100px)' }
        },
        move8: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(600px, -100px)' }
        },
        move9: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-700px, -190px)' }
        },
        move10: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-40px, 330px)' }
        }
      }
    }
  },
  plugins: []
}
