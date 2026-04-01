"use client";

import { useEffect, useState } from "react";
import { Loader } from "./Loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader time

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}