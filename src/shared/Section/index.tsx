import { useInView } from "framer-motion";
import { FC, memo, useRef } from "react";

import Error from "../Error";
import MediaList from "./MediaList";

import { useGetShowsQuery } from "@/services/shows";
import { getErrorMessage } from "@/utils/helper";

interface SectionProps {
  title: string;
  category: string;
  className?: string;
  type?: string;
  id?: number;
  showSimilarShows?: boolean;
}

const Section: FC<SectionProps> = ({
  title,
  category,
  className,
  type,
  id,
  showSimilarShows,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    margin: "420px",
    once: true,
  });

  const {
    data = { results: [] },
    isError,
    error,
  } = useGetShowsQuery(
    {
      category,
      type,
    },
    {
      skip: !inView,
    }
  );

  const errorMessage = isError ? getErrorMessage(error) : "";

  return (
    <section className={`py-[16.75px] font-nunito ${className}`} ref={ref}>
      <h3 className="mb-1 text-[18.75px] font-semibold">{title}</h3>
      {isError ? (
        <Error error={String(errorMessage)} className="h-full text-[18px]" />
      ) : (
        <MediaList medias={data.results.slice(0, 6)} category={category} />
      )}
    </section>
  );
};

export default memo(Section);
