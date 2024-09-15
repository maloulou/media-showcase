import { memo } from "react";

import Image from "../Image";

interface PosterPropsType {
  posterPath: string;
  title: string;
  className?: string;
}

const Poster = ({ posterPath, title, className }: PosterPropsType) => {
  return (
    <div className={className}>
      <div className="h-[380px] w-[254px]">
        <Image
          width={254}
          height={380}
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt={title}
          className="object-cover rounded-xl  shadow-lg"
        />
      </div>
    </div>
  );
};

export default memo(Poster);
