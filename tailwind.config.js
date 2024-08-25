/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary: '#242424',
          secondary: '#303030',
          accent: '#3584e4',
          hover: '#383838',
          darktxt: '#ffffff',
          
          'xs': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
    themes: [
    {
      mytheme: {
        "primary": '#242424',
        "primary-content": '#ffffff',
        "secondary": '#303030',
        "secondary-content": '#ffffff',
        "accent": "#3584e4",
        "neutral-content": '#ffffff',

        "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
        "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
        "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
        "--animation-btn": "0.25s", // duration of animation when you click on button
        "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
        "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
        "--border-btn": "0px", // border width of buttons
        "--tab-border": "1px", // border width of tabs
        "--tab-radius": "0.5rem", // border radius of tabs
      },
    },
    ],
  },
}

