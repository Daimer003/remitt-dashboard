"use client";
import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props  {
  children: any;
  borderRadius: string
};

const SkeletonLayout = ({ children, borderRadius }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <Skeleton
      startColor="#aaaaaa"
      endColor="#ececec"
      height="20px"
      isLoaded={loading}
      w='100%'
      h='auto'
      borderRadius={borderRadius}
    >
      {children}
    </Skeleton>
  );
};

export default SkeletonLayout;
