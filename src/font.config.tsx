import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SF_Pro_text = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-text/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-text/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-text/SF-Pro-Text-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-text",
});

const SF_Pro_display = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-display/SFProDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
});

const fonts = `${inter.variable} ${SF_Pro_text.variable} ${SF_Pro_display.variable}`;

export { fonts, inter, SF_Pro_text, SF_Pro_display };
