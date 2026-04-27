import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
