import React, { FC } from "react";

interface HeaderProps {
  monthName: string;
  year: number;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
}

const Header: FC<HeaderProps> = ({
  monthName,
  year,
  goToPreviousMonth,
  goToNextMonth,
}) => {
  return (
    <div className=" flex items-center justify-between p-4 ">
      <button
        onClick={goToPreviousMonth}
        className=" chevron chevron-prev border-none  cursor-pointer h-12 w-12 "
      >
        &lt;
      </button>
      <h2 className="font-sans font-light text-lg">{`${monthName} ${year}`}</h2>
      <button
        onClick={goToNextMonth}
        className="chevron chevron-next border-none bg-transparent cursor-pointer h-12 w-12 "
      >
        &gt;
      </button>
    </div>
  );
};

export default Header;
