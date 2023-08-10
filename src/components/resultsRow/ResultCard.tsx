import Image from "next/image";
import React from "react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";

export interface ResultCardDataType {
  id: string;
  poster_path: string;
  title: string;
}

interface ResultCardProps extends React.HTMLAttributes<HTMLElement> {
  data?: ResultCardDataType;
  isMyListPlaceholder?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({
  data,
  isMyListPlaceholder = false,
}) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_THUBNAIL_URL;
  const [isImageLoading, setIsImageLoading] = React.useState<boolean>(true);
  const [isAddedToMyList, setIsAddedToMyList] = React.useState<boolean>(false);

  function handleBookmarkIconOnClick() {
    setIsAddedToMyList((previous) => !previous);
  }

  React.useEffect(() => {
    if (!data) {
      setIsImageLoading(false);
    }
  }, []);

  return (
    <div
      className={`
    group relative aspect-[2/3] w-[200px] cursor-pointer overflow-hidden rounded-lg bg-zinc-500/80 text-center transition 
    ${isMyListPlaceholder ? null : "hover:scale-[1.048] active:scale-[1.028]"}
    ${isImageLoading ? "loading" : null}
    `}
    >
      {isMyListPlaceholder ? (
        <div className="mx-auto flex h-full items-center px-6">
          <span className="text-base font-semibold">
            You don't have any shows/movies in your list.
          </span>
        </div>
      ) : (
        <>
          <div className="absolute right-0 top-0 p-2 md:hidden md:group-hover:flex">
            {isAddedToMyList ? (
              <MdBookmark
                onClick={handleBookmarkIconOnClick}
                className="h-8 w-8 rounded-full bg-black/20 text-white backdrop-blur-lg transition hover:bg-black/40"
              />
            ) : (
              <MdBookmarkBorder
                onClick={handleBookmarkIconOnClick}
                className="h-8 w-8 rounded-full bg-black/20 text-white backdrop-blur-lg transition hover:bg-black/40"
              />
            )}
          </div>
          {data ? (
            <Image
              className="h-full w-full object-cover"
              height={300}
              width={200}
              src={`${BASE_URL}${data.poster_path}`}
              alt={data?.title}
              onLoadingComplete={() => setIsImageLoading(false)}
              quality={20}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default ResultCard;
