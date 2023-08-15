import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { Fragment } from "react";

const UserMenu: React.FC = () => {
  const user = useSession().data?.user;

  async function handleLogoutButtonClick() {
    await signOut().catch((err) => console.error(err));
  }

  return (
    <div className="flex items-center">
      <Menu as="div" className="md:relative">
        <div className="flex items-center">
          <Menu.Button className="aspect-square w-[40px] overflow-hidden rounded-full bg-zinc-500 md:w-[36px]">
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={36}
              height={36}
              className="hidden md:inline-block"
            />
            <Image
              src={user?.image as string}
              alt={user?.name as string}
              width={40}
              height={40}
              className="inline-block md:hidden"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bottom-0 left-0 mb-[70px] h-[calc(100vh-70px)] w-screen origin-top-right divide-y divide-gray-100 bg-[#232323]/95 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur focus:outline-none md:bottom-auto md:left-auto md:right-0 md:mt-5 md:h-auto md:w-32 md:rounded-md">
            <div className="px-6 py-7 md:px-1 md:py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#2e2e2e]/80 text-white" : "text-white"
                    } group flex w-full items-center justify-center rounded-md px-2 py-3 text-2xl md:py-[6px] md:text-base`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={void handleLogoutButtonClick}
                    className={`${
                      active ? "bg-red-500/80 text-white" : "text-white"
                    } group flex w-full items-center justify-center rounded-md px-2 py-3 text-2xl md:py-[6px] md:text-base`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserMenu;
