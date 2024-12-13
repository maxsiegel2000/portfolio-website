import type { Metadata } from "next";
import { Inter, Calistoga} from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { ThemeSwitch } from "@/components/theme-switch";
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans"})
const calistoga = Calistoga({ 
    subsets: ["latin"], 
    variable: "--font-serif", 
    weight: ["400"]
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth scrollbar-hide">
      <body className={twMerge(inter.variable, calistoga.variable, "dark:bg-slate-900 dark:text-white bg-slate-100 text-black antialiased font-sans")}>
        <ActiveSectionContextProvider>
          {children}
          <Toaster />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
