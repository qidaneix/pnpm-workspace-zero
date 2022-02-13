import { useEffect, useState } from "react";
import { sum } from "pnpm-workspace-utils";

export function useSum(...args) {
  const [sumValue, setSumValue] = useState(0);

  useEffect(() => {
    setSumValue(sum(...args));
  }, [args]);

  return sumValue;
}
