import React, { HTMLAttributes, ReactElement, ReactHTMLElement } from "react";
import ResultCard from "./ResultCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ResultsRowProps extends React.HTMLAttributes<HTMLElement> {
  results?: any;
  title: string;
  isMyList?: boolean;
}

const ResutsRow: React.FC<ResultsRowProps> = ({
  results,
  title,
  isMyList = false,
}) => {
  const resultsRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  React.useEffect(() => {
    resultsRef.current?.addEventListener("scroll", (event) => {
      if (resultsRef?.current?.scrollLeft === 0) {
        setShowLeftArrow(false);
      } else {
        setShowLeftArrow(true);
      }
    });
  }, []);
  // console.log(resultsRef);

  return (
    <div className="relative flex w-full flex-col space-y-1">
      <span className="px-8 text-xl font-semibold md:px-16">{title}</span>
      <div
        className={` absolute left-0 top-0 z-10 hidden h-full items-end py-5 transition ${
          showLeftArrow ? "md:flex" : "md:hidden"
        }`}
      >
        <div
          onClick={() => {
            resultsRef.current?.scrollTo({
              left:
                resultsRef?.current?.scrollLeft -
                220 * (resultsRef?.current?.offsetWidth / 220) -
                40,
              behavior: "smooth",
            });
          }}
          className="flex h-[300px] w-16 cursor-pointer items-center justify-center rounded-r-lg bg-zinc-800/70 transition"
        >
          <BsChevronLeft className="h-9 w-9 text-white" />
        </div>
      </div>
      <div
        ref={resultsRef}
        className="hide-scrollbar scrol grid w-screen grid-flow-col gap-x-5 overflow-x-scroll px-8 py-4 md:px-16"
      >
        {results?.map((item: any) => {
          return <ResultCard data={item} />;
        })}
        {!results ? <ResultCard isMyListPlaceholder={isMyList} /> : null}
      </div>
      <div
        className={`absolute right-0 top-0 z-10 hidden h-full items-end py-5 ${
          showRightArrow ? "md:flex" : "md:hidden"
        }`}
      >
        <div
          onClick={() => {
            resultsRef.current?.scrollTo({
              left:
                220 * (resultsRef?.current?.offsetWidth / 220) +
                resultsRef?.current?.scrollLeft -
                40,
              behavior: "smooth",
            });
          }}
          className="flex h-[300px] w-16 cursor-pointer items-center justify-center rounded-l-lg bg-zinc-800/70"
        >
          <BsChevronRight className="h-9 w-9 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ResutsRow;
