import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx("mx-auto w-full max-w-7xl px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
