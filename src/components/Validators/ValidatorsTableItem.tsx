import React from "react";

type ValidatorsTableItemP = {
  content: string | number;
  isText?: boolean;
};

const ValidatorsTableItem = ({ content, isText }: ValidatorsTableItemP) => {
  if (isText) {
    return <div className="text-left">{content}</div>;
  }
  return <div className="text-right">{content}</div>;
};

export default ValidatorsTableItem;
