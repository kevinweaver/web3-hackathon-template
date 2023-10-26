# Web3 Hackathon Template

This template repo includes:

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org)
- [Foundry](https://book.getfoundry.sh/)
- [wagmi/viem](https://wagmi.sh)
- [RainbowKit](https://www.rainbowkit.com/)
- [tailwind](https://tailwindcss.com/)
- [Vercel](#hosting)

# Getting Started

## 1. Install Foundry

Install [Foundry](https://book.getfoundry.sh/getting-started/installation) to build contracts:

```
curl -L https://foundry.paradigm.xyz | bash
```

<!-- ## Install submodules -->

## 2. Install Dependencies

Ensure you're using node version >=18.17.0. We suggest using [nvm](https://github.com/nvm-sh/nvm):

```
nvm install 18.17.0
nvm use 18.17.0
```

Install node dependencies:

```
yarn install
```

## 3. Set Env Vars

Copy the environment variable example file:

```
cp .env.example .env
```

Open `.env.local` and set the following values:

- `ANVIL_FORK_URL`: The RPC that your local chain will initially fork from. We suggest setting up an Alchemy Sepolia node for this.
- `ETHERSCAN_API_KEY`: Your Etherscan API Key for deployed contract verification.

Finally, open `wagmi.ts` and set a Wallet Connect [Project ID](https://cloud.walletconnect.com/app)
to ensure the Connect Wallet button works.

```
const projectId = WALLET_CONNECT_PROJECT_ID;
```

# Development

## Running Locally

Open a terminal and run:

```
yarn dev:foundry
```

This will:

- Start a Next.js dev server,
- Start the `@wagmi/cli` in [**watch mode**](https://wagmi.sh/cli/commands/generate#options) to listen to changes in our contracts, and instantly generate code,
- Start an Anvil instance (Mainnet Fork) on an RPC URL.

Open [localhost:3000](http://localhost:3000) in your browser.
Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/pages/index.tsx`) will automatically update the webpage.

## Generating hooks

This project comes with `@wagmi/cli` built-in, which means you can generate wagmi-compatible (type safe) ABIs & React Hooks straight from the command line.
To generate ABIs & React Hooks from your Foundry project (in `./contracts`), you can run:

```
yarn wagmi
```

This will use the wagmi config (`wagmi.config.ts`) to generate a `src/generated.ts` file which will include your ABIs & Hooks that you can start using in your project.

[Here is an example](./src/components/Counter.tsx) of where Hooks from the generated file is being used.

# Deployment

## Build

Generate [wagmi] handles and [next build](https://nextjs.org/docs/pages/api-reference/next-cli#build)

```
yarn build
```

## Deploy Contracts

Once Anvil is [running](#running-locally), deploy smart contract to the Anvil network:

```
yarn deploy:anvil
```

## Start developing

Now that your contract has been deployed to Anvil, you can start playing around with your contract straight from the web interface!

Head to [localhost:3000](http://localhost:3000) in your browser, connect your wallet, and try increment the counter on the Foundry chain.

> Tip: If you import an Anvil private key into your browser wallet (MetaMask, Coinbase Wallet, etc) – you will have 10,000 ETH to play with 😎. The private key is found in the terminal under "Private Keys" when you start up an Anvil instance with `npm run dev:foundry`.

# Hosting

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

# Learn more

To learn more about [Next.js](https://nextjs.org), [Foundry](https://book.getfoundry.sh/) or [wagmi](https://wagmi.sh), check out the following resources:

- [Foundry Documentation](https://book.getfoundry.sh/) – learn more about the Foundry stack (Anvil, Forge, etc).
- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [@wagmi/cli Documentation](https://wagmi.sh/cli) – learn more about the wagmi CLI.
- [Next.js Documentation](https://nextjs.org/docs) learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind Documentation](https://tailwindcss.com/docs/installation) - learn more about Tailwind.
