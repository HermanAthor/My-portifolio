import Navbar from "@/components/Navbar";
import "./globals.css";
import "animate.css/animate.min.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Herman Athor",
  description:
    "This is a portifolio site to showing the work i have done with Web Development ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
