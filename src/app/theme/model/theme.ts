import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const theme = extendTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
});
