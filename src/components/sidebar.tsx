"use client";

import { useAtom } from "jotai";
import { sidebarIsOpenAtom } from "../app/atoms";
import { useAccount, useEnsName } from "wagmi";
import { NftCard } from "./";
import { PRIZES } from "../app/constants";

import cn from "classnames";

export default function Sidebar() {
  const [sidebarIsOpen, toggle] = useAtom(sidebarIsOpenAtom);
  const { address } = useAccount();
  const { data: ensName, isError, isLoading } = useEnsName({ address });

  return (
    <>
      <div
        className={cn(
          "fixed z-10 w-full max-w-[608px] h-screen top-0 right-0 translate-x-[100%] transition transition-transform ease-in-out duration-300 p-8 bg-white shadow-sidebar",
          {
            "!translate-x-0": sidebarIsOpen,
          }
        )}
      >
        <div className="flex justify-between items-center border-b border-[#F1F1F1] pb-4 mb-4">
          {!isError && !isLoading && (
            <button
              onClick={() => console.log("click")}
              type="button"
              className="btn btn--lg btn--secondary"
            >
              {ensName}
            </button>
          )}
          <div>&nbsp;</div>
          <svg
            onClick={() => toggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h4 className="uppercase font-light mb-4">Your Mints:</h4>

          {PRIZES ? (
            <div className="grid grid-cols-2 gap-4">
              {PRIZES.slice(0, 2).map(({ title, image, date }, idx) => (
                <NftCard title={title} image={image} date={date} key={idx} />
              ))}
            </div>
          ) : (
            <div className="bg-[#FAFAFA] rounded-lg flex flex-col items-center justify-center min-h-[88vh]">
              <h2 className="text-xl font-bold mb-2 text-black">
                You don’t have any mints
              </h2>
              <h5 className="text-sm font-light text-black">
                Get started by minting an NFT
              </h5>
            </div>
          )}
        </div>
      </div>
      {sidebarIsOpen && (
        <div
          className="fixed w-screen h-screen top-0 left-0"
          onClick={() => toggle(false)}
        />
      )}
    </>
  );
}
