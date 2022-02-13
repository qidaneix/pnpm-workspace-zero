import React from "react";
import { useSum } from "pnpm-workspace-hooks";

export function Sum({ arr }) {
  const sum = useSum(...arr);
  return <div>{sum}</div>;
}
