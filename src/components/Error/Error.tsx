import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

type ErrorP = {
  name: string;
  errorMsg: Error;
};

const Error = ({ name, errorMsg }: ErrorP) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-center">
        <AiOutlineWarning fill="red" size={"md"} />
      </div>

      <div className="text-center text-red-600 p-8 text-3xl">
        {`We're sorry, we're having issues getting the data for `}
        <span className="capitalize underline">{name}</span>
      </div>
      <div className="text-center text-red-600 p-8 text-md">
        {JSON.stringify(errorMsg)}
      </div>
    </div>
  );
};

export default Error;