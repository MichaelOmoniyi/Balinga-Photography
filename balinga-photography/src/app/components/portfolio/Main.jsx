import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Lazy load components
const Carousel = dynamic(() => import("../Carousel"), {
  ssr: true,
});
const Categories = dynamic(() => import("./Categories"), {
  ssr: false,
  suspense: true,
});
const Highlight = dynamic(() => import("../Highlight"), {
  ssr: false,
  suspense: true,
});
const Connect = dynamic(() => import("./Connect"), {
  ssr: false,
  suspense: true,
});

const Main = ({ category }) => {
  return (
    <div className="bg-slate-200 dark:bg-black">
      <Carousel />
      <Suspense fallback={<LoadingSpinner />}>
        <Categories categoryType={category} />
        <Connect />
        <div className="highlightSection">
          <Highlight />
        </div>
      </Suspense>
    </div>
  );
};

export default Main;
