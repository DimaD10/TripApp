
import "./globals.scss";
import { baseMetadata } from "./metadata";
import { Providers } from "./providers";
import { MainLayout } from "../components/_layouts/main-layout";
import { fonts } from "../font.config";

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={fonts}>
            <Providers>
                <MainLayout>
                    {children}
                </MainLayout>
            </Providers>
        </body>
    </html>
  );
}
