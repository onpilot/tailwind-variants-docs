import React from "react";

interface CheckIconProps {
  width?: number;
  height?: number;
  size?: number;
  className?: string;
}

const CheckIcon: React.FC<CheckIconProps> = (props) => {
  const { size = "1em", width, height, className } = props;

  return (
    <svg
      className={className}
      fill="none"
      height={height || size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={width || size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default CheckIcon;
