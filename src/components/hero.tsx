'use client';

export default function Hero() {
  return (
    <div className="py-5">
      <div className="max-w-[340px] mx-auto overflow-hidden rounded-lg bg-white shadow p-3.5 mb-10 md:mb-20 lg:mb-36">
        <div className="text-tertiary text-xs flex flex-col gap-y-1">
          <p>Mint a capsule before X date. </p>
          <p>You will be unable to open the capsule until after X date. </p>
          <p>Come back after X date, open your capsule, and see your prize!</p>
          <p>Prizes differ in quality and rarity:</p>
          <p> ◦ Common - 60% ◦ Uncommon - 30% ◦ Rare - 10%</p>
        </div>
      </div>
    </div>
  );
}
