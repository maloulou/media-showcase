import { memo } from "react";

const Genre = ({ name }: { name: string }) => {
  return (
    <span className="genre text-[10.75px] py-[2.75px] px-[10px] rounded-full">
      {name}
    </span>
  );
};

export default memo(Genre);
