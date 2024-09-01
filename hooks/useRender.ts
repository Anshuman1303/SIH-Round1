// Use Effect but skip first render
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export default function useRender(effect: EffectCallback, deps?: DependencyList) {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current ? (firstRender.current = false) : effect();
  }, deps);
}
