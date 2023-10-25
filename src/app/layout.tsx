import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "./providers";

// These styles apply to every route in the application
import "../styles/globals.css";

export const metadata = {
  title: "NFT Mint",
  description: "Example of a mintable NFT monorepo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
