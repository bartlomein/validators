import React from "react";
import Link from "next/link";

type ValidatorsTableItemP = {
  content: string | number;
  isText?: boolean;
  isLink?: boolean;
  url?: string;
};

const ValidatorsTableItem = ({
  content,
  isText,
  isLink,
  url,
}: ValidatorsTableItemP) => {
  if (isLink && url) {
    return (
      <div className="text-left underline text-sky-300">
        <Link href={url}>{content}</Link>
      </div>
    );
  }
  if (isText) {
    return <div className="text-left ">{content}</div>;
  }
  return <div className="text-right">{content.toLocaleString()}</div>;
};

export default ValidatorsTableItem;
