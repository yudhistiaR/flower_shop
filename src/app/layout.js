import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import StyledRoot from "./StyleRoot";
import BreakPoint from "@/lib/breakPoint";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flower Shop",
  description: "Flower shop for your gf/bf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <StyledRoot>
            {children}
            <Toaster position="top-right" />
          </StyledRoot>
        </AppRouterCacheProvider>
        <BreakPoint />
      </body>
    </html>
  );
}
