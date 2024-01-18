import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'roxoPrincipal':'#5B1D8A',
        'azulClaro':'#1D8A86',
        'marrom':'#8A431D',
        'roxoEscuro':'#2A1D35',
        'verde':'#808A1D',
      },
      fontFamily:{
        'Header':['Rye'],
        'TextLaila':['Laila'],
        'TextRoboto':['Roboto'],
        'TextLibreCaslon':['Libre Caslon Display']
      }
    },
  },
  plugins: [],
}
export default config
