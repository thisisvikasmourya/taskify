import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/store/redux-provider";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "dMACQ | Home",
  description: "dMACQ Software Pvt. Lld.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <Head>
        <style>{`
    html {
      transform: scale(0.9); /* Scale down the entire UI */
      transform-origin: top left; /* Keep the origin at the top-left corner */
      width: 111.11%; /* Compensate for the scaling to prevent overflow */
      height: 111.11%; /* Optional: Scale height in proportion to the width */
      overflow-x: hidden; /* Prevent horizontal scroll */
    }
    body {
      width: 100vw; /* Ensure the body width is confined to the viewport */
      height: 100vh; /* Ensure the body height fills the viewport */
      overflow-x: hidden; /* Disable horizontal scroll on the body */
      margin: 0; /* Remove default body margin */
    }
  `}</style>
      </Head>
      <ReduxProvider>
            <body className={inter.className} style={{background:"#fff"}}>
              {children}
            </body>
      </ReduxProvider>
    </html>
  );
}
