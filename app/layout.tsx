import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import DoctorsProvider from "@/Context/DoctorsContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pjs = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Phudu",
  icons:{
    icon: '/assets/medical-appointment.png'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} ${pjs.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-pjs bg-[#efefef]">
        <DoctorsProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </DoctorsProvider>
      </body>
    </html>
  );
}
