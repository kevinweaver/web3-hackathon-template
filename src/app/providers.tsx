"use client";

import * as React from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { chains, config, appInfo } from "./wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains} appInfo={appInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
