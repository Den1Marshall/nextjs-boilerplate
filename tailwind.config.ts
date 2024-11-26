import type { Config } from 'tailwindcss';
import tailwindcssReactAriaComponents from 'tailwindcss-react-aria-components';
import tailwindcssSafeArea from 'tailwindcss-safe-area';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssReactAriaComponents, tailwindcssSafeArea],
};

export default config;
