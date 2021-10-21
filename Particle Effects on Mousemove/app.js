/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
let maxParticles = 800 * 0.1;
let color = '#fff'; //'#000'; // Doesn't seem to matter when blending?

particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: maxParticles,
        density: {
          enable: true,
          value_area: 400,
        },
      },
      color: {
        value: color, // "#000"
      },
      shape: {
        type: ['triangle', 'circle', 'polygon'], // 'circle'
        stroke: {
          width: 2, // 0
          color: '#000', // #000000  // White not working for blending
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'particle.png',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1, // 1
        random: false, // false
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5 * 2,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true, // false
        distance: 50, // 150
        color: '#fff', // '#000'
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 15, // 5
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble', // 'bubble'
        },
        onclick: {
          enable: true,
          mode: 'repulse', // 'push'
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400 * 1,
          size: 50 * 2,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4 * 10,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    // "config_demo": {
    //   "hide_card": false,
    //   "background_color": "#b61924",
    //   "background_image": "",
    //   "background_position": "50% 50%",
    //   "background_repeat": "no-repeat",
    //   "background_size": "cover"
    // }
  }
);
