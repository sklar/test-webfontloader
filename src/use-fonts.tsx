import { useEffect } from "react";

export const FONTS = [
  { name: "Roboto", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Anton" },
  { name: "Montserrat", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Josefin Sans", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Raleway", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Bree Serif"  },
  { name: "Merriweather", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "DM Serif Text", style: "ital@0;1" },
  { name: "Roboto Mono", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Playfair Display", style: "ital,wght@0,400;0,700;1,400;1,700" },
  { name: "Noto Sans SC", style: "wght@400;700" },
  { name: "Noto Sans KR", style: "wght@400;700" },
];

export const usePreloadFonts = () => {
  useEffect(() => {
    const linkHref = FONTS.reduce((acc, { name, style }) => {
      return acc + [
        `family=${name.replaceAll(' ', '+')}`,
        ...(style ? [`${style}`] : []),
      ].join(':') + '&';
    }, '')

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute(
      "href",
      `https://fonts.googleapis.com/css2?${linkHref}display=swap`
    );
    document.head.appendChild(linkElement);
  }, []);
};
