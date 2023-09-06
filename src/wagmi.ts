import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig } from "wagmi";
import { foundry, goerli, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { WALLET_CONNECT_PROJECT_ID, NODE_ENV } from "./config";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(NODE_ENV === "development" ? [goerli, foundry] : [])],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My wagmi + RainbowKit App",
  chains,
  projectId: WALLET_CONNECT_PROJECT_ID || "",
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
