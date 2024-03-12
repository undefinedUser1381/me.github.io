/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Vazir": "Vazir"
      },
      colors:{
        "pink" : "#9C27B0",
        "dark" : "#282830"
      },
      screens:{
        xl:{max:"1200px"},
        lg:{max:"992px"},
        md:{max:"768px"},
        sm:{max:"576px"},
      }
    },
  },
  plugins: [],
}

