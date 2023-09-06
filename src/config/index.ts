import envFlow from "dotenv-flow";
import { cleanEnv, num, port, str, url } from "envalid";
import packageJson from "../../package.json";

envFlow.config({ silent: true });

const strNotRequiredInTest = () =>
  process.env.NODE_ENV === "test" ? str({ devDefault: "" }) : str();

const env = cleanEnv(process.env, {
  VERSION: str({ default: packageJson.version }),
  NODE_ENV: str(),
  PORT: port({ devDefault: 3000 }),
  ANVIL_CHAIN_ID: num({ devDefault: 31337 }),
  ANVIL_FORK_URL: str({ devDefault: "https://cloudflare-eth.com" }),
  ETHERSCAN_MAINNET_KEY: str({ default: "" }),
  FORGE_RPC_URL: str(),
  FORGE_PRIVATE_KEY: str(),
  NEXT_PUBLIC_ALCHEMY_API_KEY: strNotRequiredInTest(),
  WALLET_CONNECT_PROJECT_ID: strNotRequiredInTest(),
});

export const {
  VERSION,
  NODE_ENV,
  PORT,
  ANVIL_CHAIN_ID,
  ANVIL_FORK_URL,
  ETHERSCAN_MAINNET_KEY,
  FORGE_RPC_URL,
  FORGE_PRIVATE_KEY,
  NEXT_PUBLIC_ALCHEMY_API_KEY,
  WALLET_CONNECT_PROJECT_ID,
} = env;
