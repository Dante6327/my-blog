import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const Velog = ({ width, height }: Props) => {
  return (
    <a href="https://velog.io/@jin_jin_dev">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="IconChangeColor"
        height={`${width ? width : "16"}`}
        width={`${height ? height : "16"}`}
      >
        <title>Velog</title>
        <path
          d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z"
          id="mainIconPathAttribute"
          fill="#737373"
          strokeWidth="0"
          stroke="#ff0000"
        ></path>
      </svg>
    </a>
  );
};

export default Velog;
