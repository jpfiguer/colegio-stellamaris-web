"use client";

import { useEffect } from "react";

export default function OneSignalInit() {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    w.OneSignalDeferred = (w.OneSignalDeferred as unknown[]) || [];
    (w.OneSignalDeferred as Array<(os: { init: (cfg: Record<string, unknown>) => Promise<void> }) => void>).push(
      async function (OneSignal) {
        await OneSignal.init({
          appId: "9a00844a-c6d2-499a-acd0-43751a38edce",
        });
      }
    );
  }, []);

  return null;
}
