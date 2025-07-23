import { useRef } from "react";

const useCustomUseMemo = (cb, deps) => {
  const depsRef = useRef({
    memoizedValue: undefined,
    lastDependency: undefined,
  });

  const areArrayEqual = (arr1, arr2) => {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  if (
    !depsRef.current.memoizedValue ||
    !areArrayEqual(depsRef.current.lastDependency, deps)
  ) {
    depsRef.current.lastDependency = deps;
    depsRef.current.memoizedValue = cb();
  }

  return depsRef.current.memoizedValue;
};

export default useCustomUseMemo;
