import React from "react";

export const FavoriteFill = ({
  width = "24",
  height = "24",
  fill = "#9400D3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 384 512"
    >
      <path
          fillRule="evenodd"
          clipRule="evenodd"
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
        fill={fill}
      />
    </svg>
  );
};