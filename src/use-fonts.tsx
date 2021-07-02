import { useEffect } from "react";
import WebFontLoader from "webfontloader";

export const FONTS = [
  "Roboto",
  "Anton",
  // "Montserrat",
  // "Josefin Sans",
  // "Raleway",
  // "Bree Serif",
  // "Merriweather",
  // "DM Serif Text",
  // "Roboto Mono",
  // "Playfair Display",
  // "Noto Sans SC",
  // "Noto Sans KR",
  // "Arial",
  // "Arial Black"
];

export const usePreloadFonts = () => {
  useEffect(() => {
    (async () => {
      WebFontLoader.load({
        google: {
          // api: "https://fonts.googleapis.com/css2",
          families: FONTS
        }
      });
    })();
  }, []);
};
