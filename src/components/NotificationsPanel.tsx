import { Popover, Transition } from "@headlessui/react";
import { useSession } from "next-auth/react";
import React, { Fragment } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { api } from "~/utils/api";

const NotificationsPanel: React.FC = () => {
  const user = useSession().data?.user;
  const { data: notificationData, refetch: refetchNotificationData } =
    api.notification.getNotificationsByUserId.useQuery({
      userId: user?.id as string,
    });
  const [notificationsSeen, setNotificationsSeen] =
    React.useState<boolean>(true);
  const { mutate: setAllNotificationsToSeenMutate } =
    api.notification.allNotificationByUserIdSeen.useMutation();

  function handlePopoverButtonClick() {
    setAllNotificationsToSeenMutate({
      userId: user?.id as string,
    });
    setNotificationsSeen(true);
    setTimeout(() => {
      void refetchNotificationData();
    }, 1500);
  }

  React.useEffect(() => {
    setNotificationsSeen(true);
    notificationData?.map((item) => {
      if (item.seen === false) {
        setNotificationsSeen(false);
      }
    });
  }, [notificationData]);

  return (
    <div className="flex items-center ">
      <Popover className="md:relative">
        {({ open }) => (
          <>
            <div className="flex items-center">
              <Popover.Button
                onClick={handlePopoverButtonClick}
                className="relative flex aspect-square h-full w-[40px] items-center justify-center rounded-full bg-[#202020]/90 backdrop-blur md:w-[36px]"
              >
                {!notificationsSeen ? (
                  <div className="absolute right-2 top-2 h-[8px] w-[8px] rounded-full bg-red-600"></div>
                ) : null}
                <MdNotificationsNone className="h-7 w-7 text-white md:h-6 md:w-6" />
              </Popover.Button>
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
              <Popover.Panel className="absolute bottom-0 left-0 z-10 mb-[70px] h-[calc(100vh-70px)] w-screen transform md:bottom-auto md:left-auto md:right-0 md:mt-5 md:w-[400px]">
                <div className="flex h-full w-full flex-col overflow-hidden bg-[#232323]/95 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur md:h-[340px] md:rounded-lg">
                  <div className="w-full border-b border-b-zinc-500/20 bg-[#191919]/30 px-6 py-4 backdrop-blur md:px-4 md:py-2">
                    <span className="text-2xl font-semibold md:text-lg">
                      Notifications
                    </span>
                  </div>
                  <div className="flex w-full flex-1 flex-col overflow-y-scroll">
                    {notificationData?.map((item, index) => {
                      return (
                        <div
                          key={`notification::${index}`}
                          className="relative flex w-full items-center gap-x-2 px-6 py-3 after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:w-[95%] after:translate-x-[-50%] after:bg-zinc-400/20 after:content-[''] last:after:h-[0px] md:px-4 md:py-2"
                        >
                          {!item.seen ? (
                            <div className="h-[6px] w-[6px] rounded-full bg-red-600"></div>
                          ) : (
                            <div className="h-[6px] w-[6px] rounded-full bg-zinc-600/20"></div>
                          )}
                          <span className="text-xl md:text-lg">
                            {item.content}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default NotificationsPanel;
