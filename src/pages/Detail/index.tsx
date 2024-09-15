import { useGetShowQuery } from "@/services/shows";
import { Error, Loader, Poster } from "@/shared";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Genre from "./Genre";

const Detail = () => {
  const { category, id } = useParams();

  const {
    data: media,
    isLoading,
    isFetching,
    isError,
  } = useGetShowQuery({
    category: String(category),
    id: Number(id),
  });

  useEffect(() => {
    document.title =
      (media?.title || media?.name) && !isLoading
        ? media.title || media.name
        : "Media showcase";

    return () => {
      document.title = "Media showcase";
    };
  }, [media?.title, isLoading, media?.name]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error error="Something went wrong!" />;
  }

  const { title, poster_path: posterPath, overview, name, genres } = media;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0,0,0), rgba(0,0,0,0.98),rgba(0,0,0,0.8) ,rgba(0,0,0,0.4)),url('https://image.tmdb.org/t/p/original/${posterPath}'`,
    backgroundPosition: "top",
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="w-full h-screen" style={backgroundStyle}>
        <div
          className={`max-w-[1140px] mx-auto pt-24 pb-8 flex flex-row  gap-8 justify-center`}
        >
          <Poster title={title} posterPath={posterPath} />
          <div className="text-gray-300 max-w-[90vw] font-nunito flex flex-col gap-3 mb-8 flex-1">
            <h2 className="text-[28.75px] font-extrabold leading-snug text-secColor max-w-[280px]">
              {title || name}
            </h2>
            <ul className="flex flex-row items-center gap-[6px] flex-wrap">
              {genres.map((genre: { name: string; id: number }) => (
                <Genre key={genre.id} name={genre.name} />
              ))}
            </ul>

            <p className="text-[14.25px]">{overview}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
