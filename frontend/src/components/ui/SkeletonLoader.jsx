import React from "react";

const SkeletonLoader = ({
  className = "",
  rounded = "rounded-xl",
}) => {
  return (
    <div
      className={`animate-pulse bg-slate-800 ${rounded} ${className}`}
    />
  );
};

export default SkeletonLoader;