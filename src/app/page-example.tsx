import { Account } from "../components/example/Account";
import { Balance } from "../components/example/Balance";
import { BlockNumber } from "../components/example/BlockNumber";
import { ConnectButton } from "../components/example/ConnectButton";
import { Connected } from "../components/example/Connected";
import { NetworkSwitcher } from "../components/example/NetworkSwitcher";
import { ReadContract } from "../components/example/ReadContract";
import { ReadContracts } from "../components/example/ReadContracts";
import { ReadContractsInfinite } from "../components/example/ReadContractsInfinite";
import { SendTransaction } from "../components/example/SendTransaction";
import { SendTransactionPrepared } from "../components/example/SendTransactionPrepared";
import { SignMessage } from "../components/example/SignMessage";
import { SignTypedData } from "../components/example/SignTypedData";
import { Token } from "../components/example/Token";
import { WatchContractEvents } from "../components/example/WatchContractEvents";
import { WatchPendingTransactions } from "../components/example/WatchPendingTransactions";
import { WriteContract } from "../components/example/WriteContract";
import { WriteContractPrepared } from "../components/example/WriteContractPrepared";

import "../styles/globals.css";

export default function Page() {
  return (
    <>
      <h1>Hackathon Template</h1>

      <ConnectButton />

      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected>
    </>
  );
}
