import { poppins } from "./fonts";
import "./globals.css";
import cx from "classnames";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";
import Footer from "../components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Layouting Spotify</title>
      </head>
      <body className={`${cx(poppins, poppins.className)}`}>
        <div className="flex">
          <Sidebar />
          <Header />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
