import React from "react";

export type BannerData = {
  message: string;
  state: "success" | "error";
};

const Banner = ({ banner: { message, state } }: { banner: BannerData }) => {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❗️";
  return (
    <p
      className={`p-2 ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      } rounded-md w-full text-center my-2`}
    >{`${icon} ${message}`}</p>
  );
};

export default Banner;
