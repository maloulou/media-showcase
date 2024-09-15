import { memo } from "react";

const Loader = memo(() => {
  return (
    <div className="top-0 left-0 w-screen h-screen flex justify-center items-center">
      Loading...
    </div>
  );
});

export default Loader;
