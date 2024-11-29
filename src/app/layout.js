import { poppins } from "./fonts";
import "./globals.css";
import cx from "classnames";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";
import Footer from "../components/layout/footer";
import Container from "../components/router";
import { DarkModeStateProvider } from "../utils/globalState";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Layouting Spotify</title>
      </head>
      <body className={`${cx(poppins, poppins.className)} bg-white`}>
        <DarkModeStateProvider>
          <div className="flex">
            <Sidebar />
            <Header />
          </div>
          <Container>{children}</Container>
          <Footer />
        </DarkModeStateProvider>
      </body>
    </html>
  );
}
