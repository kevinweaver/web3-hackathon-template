import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";
import { Navigation, Sidebar } from "../components";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Sidebar />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
