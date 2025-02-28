import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";

const geistSans = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Home Page",
  description: "Generated by home Page",
};

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased bg-[#010C15]`}
      >
        <div className="min-h-screen flex justify-center items-center py-4 px-12">
          <div className="min-h-[94vh] container bg-primary-dark border border-line rounded-lg flex flex-col text-sm relative">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
