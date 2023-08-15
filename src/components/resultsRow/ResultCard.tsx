import Image from "next/image";
import React from "react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import type { MovieItemType } from "~/types";

interface ResultCardProps extends React.HTMLAttributes<HTMLElement> {
  data?: MovieItemType;
}

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
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
  }, [data]);

  return (
    <div
      className={`
    group relative aspect-[2/3] w-[200px] cursor-pointer overflow-hidden rounded-lg bg-zinc-500/80 text-center transition hover:scale-[1.048] active:scale-[1.028] ${
      isImageLoading ? "loading" : ""
    }
    `}
    >
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
          src={`${BASE_URL as string}${data.poster_path}`}
          alt={data?.title}
          onLoadingComplete={() => setIsImageLoading(false)}
          quality={20}
        />
      ) : null}
    </div>
  );
};

export default ResultCard;
