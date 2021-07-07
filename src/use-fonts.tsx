import { useEffect } from 'react';
import WebFontLoader from 'webfontloader';

const GOOGLE_FONTS = [
  'Roboto',
  'Anton',
  'Montserrat',
  'Josefin Sans',
  'Raleway',
  'Bree Serif',
  'Merriweather',
  'DM Serif Text',
  'Roboto Mono',
  'Playfair Display',
  'Noto Sans SC',
  'Noto Sans KR',
];
const LOCAL_FONTS = ['Arial', 'Arial Black'];

export const FONTS = [...GOOGLE_FONTS, ...LOCAL_FONTS];

export const usePreloadFonts = () => {
  useEffect(() => {
    (async () => {
      WebFontLoader.load({
        google: {
          // api: "https://fonts.googleapis.com/css2",
          families: GOOGLE_FONTS,
        },
      });
    })();
  }, []);
};
