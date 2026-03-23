"use client";

import { useEffect } from "react";

export default function OneSignalInit() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js";
    script.defer = true;
    script.onload = () => {
      const w = window as unknown as Record<string, unknown>;
      w.OneSignalDeferred = (w.OneSignalDeferred as unknown[]) || [];
      (w.OneSignalDeferred as Array<(OneSignal: { init: (cfg: Record<string, unknown>) => Promise<void> }) => void>).push(
        async function (OneSignal) {
          await OneSignal.init({
            appId: "9a00844a-c6d2-499a-acd0-43751a38edce",
          });
        }
      );
    };
    document.head.appendChild(script);
  }, []);

  return null;
}
