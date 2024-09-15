import { Loader } from "@/shared";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
