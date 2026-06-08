import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/top-header";


export const metadata = {
  title: "Oribiom Caregiving Service",
  description:
    "Professional Caregiving, Training, Consultancy & Manpower Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <TopHeader/> */}
        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}