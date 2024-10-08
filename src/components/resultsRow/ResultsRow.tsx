import React from "react";
import ResultCard from "./ResultCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import type { MovieItemType } from "~/types";

interface ResultsRowProps {
  results?: Array<MovieItemType>;
  title: string;
}

const ResutsRow: React.FC<ResultsRowProps> = ({ results, title }) => {
  const resultsRef = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, _setShowRightArrow] = React.useState(true);

  function LeftArrowNavigatorClick() {
    resultsRef.current?.scrollTo({
      left:
        resultsRef?.current?.scrollLeft -
        220 * (resultsRef?.current?.offsetWidth / 220) -
        40,
      behavior: "smooth",
    });
  }

  function RightArrowNavigatorClick() {
    resultsRef.current?.scrollTo({
      left:
        220 * (resultsRef?.current?.offsetWidth / 220) +
        resultsRef?.current?.scrollLeft -
        40,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    // Changes the visibility of the arrow navigators
    // based on how far the user is scrolled
    resultsRef.current?.addEventListener("scroll", () => {
      if (resultsRef?.current?.scrollLeft === 0) {
        setShowLeftArrow(false);
      } else {
        setShowLeftArrow(true);
      }
    });
  }, []);

  return (
    <div className="relative flex w-full flex-col space-y-1">
      <span className="px-8 text-xl font-semibold md:px-16">{title}</span>
      <div
        className={` absolute left-0 top-0 z-10 hidden h-full items-end py-5 transition ${
          showLeftArrow ? "md:flex" : "md:hidden"
        }`}
      >
        <div
          onClick={LeftArrowNavigatorClick}
          className="flex h-[300px] w-16 cursor-pointer items-center justify-center rounded-r-lg bg-zinc-800/70 transition"
        >
          <BsChevronLeft className="h-9 w-9 text-white" />
        </div>
      </div>
      <div
        ref={resultsRef}
        className="hide-scrollbar scrol grid w-screen grid-flow-col gap-x-5 overflow-x-scroll px-8 py-4 md:px-16"
      >
        {results?.map((item) => {
          return <ResultCard key={`resultcard:${item.id}`} data={item} />;
        })}
      </div>
      <div
        className={`absolute right-0 top-0 z-10 hidden h-full items-end py-5 ${
          showRightArrow ? "md:flex" : "md:hidden"
        }`}
      >
        <div
          onClick={RightArrowNavigatorClick}
          className="flex h-[300px] w-16 cursor-pointer items-center justify-center rounded-l-lg bg-zinc-800/70"
        >
          <BsChevronRight className="h-9 w-9 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ResutsRow;
