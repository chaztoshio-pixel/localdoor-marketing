"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Real interactive map using Leaflet + OpenStreetMap tiles.
 *
 * Pan, zoom, real map tiles — no API key required (free OSM).
 * Demo route polygons are overlaid on top; real USPS carrier-route data
 * requires a paid integration (AccuZIP or USPS EDDM enterprise API).
 *
 * This component loads Leaflet dynamically on the client only to avoid SSR issues.
 */

type Route = {
  id: string;
  name: string;
  color: string;
  center: [number, number]; // [lat, lng]
  radius: number; // meters
  selected?: boolean;
};

const DEMO_ROUTES: Route[] = [
  { id: "C103", name: "Westpark North",   color: "#9333EA", center: [33.680, -117.852], radius: 700 },
  { id: "C104", name: "Quail Hill Loop",  color: "#9333EA", center: [33.649, -117.809], radius: 650 },
  { id: "C108", name: "University Ridge", color: "#9333EA", center: [33.644, -117.838], radius: 600, selected: true },
  { id: "C118", name: "Woodbridge South", color: "#9333EA", center: [33.688, -117.814], radius: 800, selected: true },
  { id: "C121", name: "Oak Creek Ridge",  color: "#9333EA", center: [33.708, -117.811], radius: 650 },
];

export function LiveRouteMap({
  className,
  center = [33.669, -117.823], // Irvine, CA default
  zoom = 13,
}: {
  className?: string;
  center?: [number, number];
  zoom?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [mapModule, setMapModule] = useState<typeof import("react-leaflet") | null>(null);

  useEffect(() => {
    setMounted(true);
    // Dynamic import so Leaflet never runs during SSR
    import("react-leaflet").then(setMapModule);
    // Inject Leaflet's default CSS on mount
    if (typeof document !== "undefined" && !document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      document.head.appendChild(link);
    }
  }, []);

  if (!mounted || !mapModule) {
    return (
      <div
        className={cn(
          "relative w-full aspect-[5/4] rounded-2xl overflow-hidden bg-ink-80 border border-ink-80 flex items-center justify-center",
          className
        )}
      >
        <span className="text-stone-40 text-micro uppercase tracking-[0.14em]">
          Loading map…
        </span>
      </div>
    );
  }

  const { MapContainer, TileLayer, Circle, Tooltip } = mapModule;

  return (
    <div
      className={cn(
        "relative w-full aspect-[5/4] rounded-2xl overflow-hidden border border-stone-20",
        className
      )}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {DEMO_ROUTES.map((route) => (
          <Circle
            key={route.id}
            center={route.center}
            radius={route.radius}
            pathOptions={{
              color: route.color,
              fillColor: route.color,
              fillOpacity: route.selected ? 0.32 : 0.14,
              weight: route.selected ? 2.5 : 1.5,
              dashArray: route.selected ? undefined : "4 4",
            }}
          >
            <Tooltip direction="top" offset={[0, -8]}>
              <div className="text-xs">
                <div className="font-mono">{route.id}</div>
                <div>{route.name}</div>
                {route.selected ? (
                  <div className="text-plum-dark font-medium">Selected</div>
                ) : null}
              </div>
            </Tooltip>
          </Circle>
        ))}
      </MapContainer>

      {/* Demo-disclaimer chip */}
      <div className="absolute top-4 right-4 z-10 bg-stone-5/95 backdrop-blur-sm text-ink text-micro uppercase tracking-[0.12em] px-3 py-1.5 rounded-sm border border-stone-20 shadow-sm">
        Demo routes · final routes confirmed at quote
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-stone-5/95 backdrop-blur-sm text-ink text-micro uppercase tracking-[0.14em] px-3 py-2 rounded-sm border border-stone-20 flex flex-wrap items-center gap-3 shadow-sm">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-plum" />
          Selected routes
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-plum/40" />
          Available routes
        </span>
      </div>
    </div>
  );
}
