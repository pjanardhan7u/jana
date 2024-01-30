import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/Navbar";
// import { Provider } from "../utils/Provider";
import Header from "@/app/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import Footer from "@/app/components/footer";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Jana's Portfolio",
  description: "Jana is a full stack web developer and student at NIT Trichy.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${firaCode.className} 
        ${inter.className}  bg-gradient-to-r from-slate-900 via-purple-900 
        to-slate-900  relative pt-28 
        sm:pt-25 text-gray-50 `}
      >

            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
            </ActiveSectionContextProvider>

      </body>
    </html>
  );
}
