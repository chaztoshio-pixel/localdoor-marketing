/**
 * Stylized route map visualization — charcoal base with stone streets and
 * ember-highlighted route polygons. No real data. A static SVG asset so we
 * avoid any appearance of claiming USPS route accuracy.
 */
export function StylizedRouteMap({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-[5/4] rounded-2xl overflow-hidden bg-ink-80 border border-ink-80 ${className ?? ""}`}
      role="img"
      aria-label="Stylized route map visualization — not USPS route data."
    >
      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Streets - grid-ish */}
        <g stroke="#4A4A4F" strokeWidth="1" opacity="0.55">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 44 + 20} x2="500" y2={i * 44 + 20} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 44 + 30} y1="0" x2={i * 44 + 30} y2="400" />
          ))}
        </g>

        {/* Secondary thinner streets */}
        <g stroke="#4A4A4F" strokeWidth="0.5" opacity="0.35">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h2-${i}`}
              x1="0"
              y1={i * 44 + 42}
              x2="500"
              y2={i * 44 + 42}
            />
          ))}
        </g>

        {/* Route polygons — highlighted */}
        <g>
          <polygon
            points="80,70 200,70 200,170 80,170"
            fill="#D84920"
            fillOpacity="0.14"
            stroke="#D84920"
            strokeWidth="1.5"
          />
          <polygon
            points="210,80 330,80 330,180 270,200 210,170"
            fill="#D84920"
            fillOpacity="0.22"
            stroke="#D84920"
            strokeWidth="1.5"
          />
          <polygon
            points="340,130 460,130 460,230 340,230"
            fill="#D84920"
            fillOpacity="0.1"
            stroke="#D84920"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <polygon
            points="120,210 260,210 260,320 180,330 120,290"
            fill="#D84920"
            fillOpacity="0.28"
            stroke="#D84920"
            strokeWidth="1.5"
          />
        </g>

        {/* Route pins */}
        <g>
          {[
            { x: 135, y: 115, id: "C103" },
            { x: 265, y: 130, id: "C104" },
            { x: 400, y: 180, id: "C112" },
            { x: 190, y: 260, id: "C118" },
          ].map((p) => (
            <g key={p.id}>
              <circle cx={p.x} cy={p.y} r="5" fill="#D84920" />
              <circle cx={p.x} cy={p.y} r="10" fill="#D84920" fillOpacity="0.2" />
            </g>
          ))}
        </g>
      </svg>

      {/* Legend badge */}
      <div className="absolute top-4 right-4 bg-stone-5/95 backdrop-blur-sm text-ink text-micro uppercase tracking-[0.12em] px-3 py-1.5 rounded-sm border border-stone-20">
        Stylized — not USPS route data
      </div>

      {/* Corner meta */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3 text-stone-40 text-micro uppercase tracking-[0.14em]">
        <span className="h-2 w-2 rounded-full bg-ember" />
        Selected routes
        <span className="h-2 w-2 rounded-full bg-stone-40" />
        Streets
      </div>
    </div>
  );
}
