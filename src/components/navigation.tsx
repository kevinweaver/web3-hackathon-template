'use client';

import Image from 'next/image';
import { ConnectBtn } from './';

export default function Navigation() {
  return (
    <div className="flex items-center justify-between px-4 text-center relative h-navigation">
      <div>
        <Image src="/sun.svg" width="36" height="34" alt="" />
      </div>
      <h1 className="font-bold text-black uppercase text-xl md:text-[48px] leading-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        NFT MINTER
      </h1>
      <ConnectBtn />
    </div>
  );
}
