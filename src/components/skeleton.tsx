"use client";
import { Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props  {
  children: any;
  borderRadius: string,
  isLoading?: boolean
};

const SkeletonLayout = ({ children, borderRadius, isLoading }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    
    if(isLoading) setLoading(false)
  }, [isLoading]);

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
