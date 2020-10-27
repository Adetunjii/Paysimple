module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#eff4fb",
        secondary: '#192e50',
        light: '#f9f9fb',
        graylighten: '#edeef3'
      },
      fontFamily: {
        custom: ["Nunito"],
        logo: ["Pacifico"],
      },
      fontSize: {
        'ok': '.800rem'
      },
     borderRadius: {
       '15p': '15px',
       '20p': '20px'
     },
      boxShadow: {
        '3xl': '0 20px 40px  rgba(0, 0, 0, 0.2)',
        'custom': '2px 5px 10px 2px #1a18305e',
        'light': '2px 5px 10px 2px rgb(230,230,250)'

      },

      width: {
        "1/7": "13.25%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
     
    },
  },
  variants: {},
  plugins: [],
};
