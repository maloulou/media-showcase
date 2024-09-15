import { sections } from "@/constants";
import { useGetShowsQuery } from "@/services/shows";
import { Error, Loader, Section } from "@/shared";

const Home = () => {
  const { isLoading, isError } = useGetShowsQuery({
    category: "movie",
    type: "popular",
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error error="Unable to fetch the movies! " />;
  }

  return (
    <>
      <div className={`max-w-[1140px] mx-auto mt-2`}>
        {sections.map(({ title, category, type }) => (
          <Section title={title} category={category} type={type} key={title} />
        ))}
      </div>
    </>
  );
};

export default Home;
