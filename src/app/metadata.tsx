import { Metadata } from "next";

export const baseMetadata: Metadata = {
  title: "TripApp",
  description: "Trip search app",
  openGraph: {
    title: "TripApp",
    description: "Trip search app",
  },
  icons: {
    icon: [
        '/favicon.ico?v=4',
    ],
    apple: [
        '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
        '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
};
