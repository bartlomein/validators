import React from "react";
import { Input } from "../ui/input";
import TextInput from "../TextInput/TextInput";

type ValidatorsHeaderP = {
  name: string;
};

const ValidatorsHeader = ({ name, setFilterSearch }) => {
  return (
    <div className="flex justify-between my-4">
      <div className="text-xl">Top MEV validators on {name}</div>
      <div>
        <TextInput placeholder={"Search"} onChange={setFilterSearch} />
      </div>
    </div>
  );
};

export default ValidatorsHeader;
