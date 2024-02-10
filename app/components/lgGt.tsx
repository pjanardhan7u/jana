import React from "react";
import Lt from "./lt";
import Gt from "./gt";

type LtGtProps = {
    children: React.ReactNode;
  };

const LtGt = ({children}: LtGtProps) => {
  return (
    <>
      <Lt />
      {children}
      <Gt />
    </>
  );
};

export default LtGt;
