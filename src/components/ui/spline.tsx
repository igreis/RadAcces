import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/TcXEYzBOoUxUaSKQ/scene.splinecode";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

export default function SplineScene({ style }: { style?: CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const isVisibleRef = useRef(true);
  const prefersReducedMotionRef = useRef(false);
  const syncPlaybackRef = useRef<() => void>(() => undefined);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    const startLoading = () => setShouldLoad(true);

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(startLoading, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(startLoading, 250);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotionRef.current = reducedMotion.matches;

    const syncPlayback = () => {
      const app = appRef.current;
      if (!app) return;

      if (isVisibleRef.current && !document.hidden && !prefersReducedMotionRef.current) {
        app.play();
      } else {
        app.stop();
      }
    };

    syncPlaybackRef.current = syncPlayback;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: "150px 0px", threshold: 0.01 },
    );

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = event.matches;
      syncPlayback();
    };

    observer.observe(container);
    document.addEventListener("visibilitychange", syncPlayback);
    reducedMotion.addEventListener("change", handleReducedMotion);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      reducedMotion.removeEventListener("change", handleReducedMotion);
      appRef.current?.stop();
      appRef.current = null;
      syncPlaybackRef.current = () => undefined;
    };
  }, []);

  const handleLoad = (app: Application) => {
    appRef.current = app;
    syncPlaybackRef.current();
  };

  return (
    <div ref={containerRef} aria-hidden="true" style={{ width: "100%", height: "100%", ...style }}>
      {shouldLoad && (
        <Suspense fallback={null}>
          <Spline
            scene={SCENE_URL}
            renderOnDemand
            onLoad={handleLoad}
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      )}
    </div>
  );
}
