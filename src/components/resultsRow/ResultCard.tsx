import Image from "next/image";
import React from "react";

interface ResultCardProps extends React.HTMLAttributes<HTMLElement> {
  data: any;
}

const ResultCard: React.FC<ResultCardProps> = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [isImageLoading, setIsImageLoading] = React.useState(true);
  // console.log(data);
  return (
    <div
      className={`
    relative aspect-[2/3] w-[200px] cursor-pointer overflow-hidden rounded-lg bg-zinc-500/80 transition hover:scale-[1.048]
    ${isImageLoading ? "loading" : null}
    `}
    >
      <Image
        height={300}
        width={200}
        layout="responsive"
        src={`${BASE_URL}${data.poster_path}`}
        alt={data?.title}
        onLoadingComplete={() => setIsImageLoading(false)}
      />
    </div>
  );
};

export default ResultCard;
