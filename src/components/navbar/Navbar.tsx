import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import NotificationsPanel from "../NotificationsPanel";
import UserMenu from "../UserMenu";

const Navbar: React.FC = () => {
  const user = useSession().data?.user;
  const [showBackground, setShowBackground] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 20) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex h-[70px] w-screen items-center justify-center px-16 transition duration-200 md:justify-between ${
        showBackground ? "bg-[#181818]/95 backdrop-blur" : " bg-transparent"
      }`}
    >
      <ul className="flex h-full items-center space-x-10">
        <li>
          <Link className="text-lg font-medium" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font text-lg text-zinc-200" href="#">
            Movies
          </Link>
        </li>
        <li>
          <Link className="font text-lg text-zinc-200" href="#">
            Series
          </Link>
        </li>
        <li>
          <Link className="font text-lg text-zinc-200" href="/mylist">
            My List
          </Link>
        </li>
      </ul>
      <ul className="hidden h-full items-center space-x-4 md:flex">
        <li className="flex aspect-square h-full w-[36px] items-center">
          <Link
            href={"/search"}
            className="flex aspect-square w-full items-center justify-center rounded-full bg-[#202020]/90 backdrop-blur"
          >
            <MdSearch className="h-6 w-6 text-white" />
          </Link>
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

export default Navbar;
