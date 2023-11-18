/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)"
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },
      width: {
        lower: "72%",
        mid: "5%",
        maybe: "36%",
        justfit: "75.3%",
      },
      margin: {
        please: "18.1rem",
      }

    },
    fontFamily: {
      Opensans: ('OpenSans'),
      LexendDeca: ('LexendDeca'),
      bigshoulder: ('bigshoulder')
    },


  },
  plugins: [],
}

