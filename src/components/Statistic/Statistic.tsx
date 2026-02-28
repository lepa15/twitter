import { ReactNode } from 'react';
type Props = {
  statisticInfo: number;
  statisticText: ReactNode;
};

export default function Statistic({
  statisticInfo,
  statisticText,
}: Props) {
  return (
    <li className="flex-none w-[12.5rem] flex flex-col items-center gap-1.5 sm:gap-5 text-center">
      <p className="font-light text-5xl sm:text-7xl">{statisticInfo}</p>
      <p className="text-[1.125rem] text-center">{statisticText}</p>
    </li>
  );
}
