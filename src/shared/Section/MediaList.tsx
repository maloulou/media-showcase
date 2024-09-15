import { IMedia } from "@/types";
import { FC } from "react";
import MediaCard from "../MediaCard";

interface MediaListProps {
  medias: IMedia[];
  category: string;
}

const MediaList: FC<MediaListProps> = ({ medias, category }) => (
  <div className="flex flex-row gap-2">
    {medias.map((media) => (
      <div key={media.id} className="flex mt-1 w-full flex-col rounded-lg">
        <MediaCard media={media} category={category} />
      </div>
    ))}
  </div>
);

export default MediaList;
