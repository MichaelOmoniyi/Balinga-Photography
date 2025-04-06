// app/client-area/page.tsx
"use client";
import React, { useState, useEffect, Suspense } from "react";
import "../components/portfolio/style.css";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("../components/portfolio/Main"), {
  loading: () => (
    <div className="w-full p-4 flex justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  ),
  ssr: false,
});

function ClientAreaContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    document.title = "Check out our Projects - Balinga Photography";
  }, []);

  return <Main category={category ?? "all"} />;
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="w-full p-4 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      }
    >
      <ClientAreaContent />
    </Suspense>
  );
}
