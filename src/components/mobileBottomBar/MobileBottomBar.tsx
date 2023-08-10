import React from "react";
import { MdSearch } from "react-icons/md";
import NotificationsPanel from "../NotificationsPanel";
import UserMenu from "../UserMenu";

const MobileBottomBar: React.FC = () => {
  // Navigation bar that only appears for mobile screen sizes
  return (
    <nav className="fixed bottom-0 z-50 flex h-[70px] w-screen items-center justify-center bg-[#181818]/95 px-16 backdrop-blur transition duration-200 md:hidden md:justify-between">
      <ul className="flex h-full w-full items-center justify-between space-x-4">
        <li className="flex aspect-square h-full w-[40px] items-center">
          <button className="flex aspect-square w-full items-center justify-center rounded-full bg-[#181818]/90 backdrop-blur">
            <MdSearch className="h-7 w-7 text-white" />
          </button>
        </li>
        <li className="flex h-full items-center">
          <NotificationsPanel />
        </li>
        <li className="flex h-full items-center">
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
};

export default MobileBottomBar;
