'use client';

import Image from 'next/image';

type NftCardProps = {
  title: string;
  image: string;
  date?: string;
};

export default function NftCard({ title, image, date }: NftCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-2 shadow-nftCard max-w-[256px] text-center">
      <div className="uppercase text-lg text-light my-2 gradient-text">{title}</div>
      <div className="text-xs font-medium mb-2">{date}</div>
      <Image src={image} width="340" height="340" alt="" />
    </div>
  );
}
