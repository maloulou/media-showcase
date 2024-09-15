import { IMedia } from "@/types";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../Image";

const MediaCard = ({
  media,
  category,
}: {
  media: IMedia;
  category: string;
}) => {
  const { poster_path, original_title: title, name, id } = media;
  return (
    <>
      <Link
        to={`/${category}/${id}`}
        className="bg-[#f5f5f5] rounded-lg relative group w-full select-none max-h-[216px] overflow-hidden"
      >
        <Image
          height={250}
          width={183}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={media.original_title}
          className=" object-cover rounded-lg drop-shadow-md shadow-md group-hover:shadow-none group-hover:drop-shadow-none"
        />

        <div className="absolute top-0 left-0 w-full  h-full group-hover:opacity-100 opacity-0 bg-[rgba(0,0,0,0.6)] rounded-lg flex items-center justify-center">
          <div className="text-[42px] text-white scale-[0.4] group-hover:scale-100">
            <FaPlay />
          </div>
        </div>
      </Link>

      <h4 className="mt-2 text-center cursor-default text-[14px] font-medium">
        {(title?.length > 50 ? title.split(":")[0] : title) || name}
      </h4>
    </>
  );
};

export default MediaCard;
