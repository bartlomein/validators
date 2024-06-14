import React, { SetStateAction } from "react";

import TextInput from "../TextInput/TextInput";

type ValidatorsHeaderP = {
  name: string;
  setFilterSearch: React.Dispatch<SetStateAction<string>>;
};

const ValidatorsHeader = ({ name, setFilterSearch }: ValidatorsHeaderP) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="text-xl">
        Top MEV validators on <span className="capitalize">{name}</span>
      </div>
      <div>
        <TextInput placeholder={"Search"} onChange={setFilterSearch} />
      </div>
    </div>
  );
};

export default ValidatorsHeader;
