export const metadata = {
  title: "Balinga Photography",
  description: "Capturing your best moments",
};

import dynamic from "next/dynamic";
import { Suspense } from "react";

const LoadingSpinner = () => (
  <div className="w-full p-4 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin"></div>
  </div>
);

// Above the fold components - No Suspense needed as they're critical
const Hero = dynamic(() => import("@/app/components/home/Hero"), {
  ssr: true,
});

const About = dynamic(() => import("@/app/components/home/About"), {
  ssr: true,
});

// Below the fold components - Grouped by loading priority
const QuoteContent = dynamic(() => import("@/app/components/home/Quote"), {
  ssr: false,
  suspense: true,
});

const PhototsContent = dynamic(() => import("@/app/components/home/Photos"), {
  ssr: false,
  suspense: true,
});

const CheckoutContent = dynamic(() => import("@/app/components/home/Checkout"), {
  ssr: false,
  suspense: true,
});

const ConnectContent = dynamic(() => import("@/app/components/home/Connect"), {
  ssr: false,
  suspense: true,
});

const HighlightContent = dynamic(() => import("@/app/components/home/Highlight"), {
  ssr: false,
  suspense: true,
});

export default function Home() {
  return (
    <>
      {/* Critical content - loads immediately */}
      <Hero />
      <About />
      
      {/* Non-critical content - loads progressively */}
      <Suspense fallback={<LoadingSpinner />}>
        <QuoteContent />
        <PhototsContent />
        <CheckoutContent />
        <ConnectContent />
        <HighlightContent />
      </Suspense>
    </>
  );
}
