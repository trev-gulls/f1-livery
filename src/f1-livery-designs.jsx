
const S = 88;

// ─── FINISH OVERLAYS ────────────────────────────────────────────────
//
// Simple gradient rect overlays instead of SVG filters.
// Matte = no overlay (flat fill IS matte). Highlights are additive.

const FINISH_OVERLAYS = {
  Gloss: { id: "finish-gloss", opacity: 0.13 },
  "High Gloss": { id: "finish-high-gloss", opacity: 0.55 },
  Satin: { id: "finish-satin", opacity: 0.15 },
};

function hexLightness(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function FinishOverlay({ finish, primaryHex }) {
  const cfg = FINISH_OVERLAYS[finish];
  if (!cfg) return null;
  const isGloss = finish === "Gloss";
  const isHighGloss = finish === "High Gloss";
  const isLight = primaryHex && hexLightness(primaryHex) > 0.6;
  const useGlossDual = isGloss && isLight;
  const useHighGlossShadow = isHighGloss && isLight;
  const gradId = (useGlossDual || useHighGlossShadow) ? `${cfg.id}-light` : cfg.id;
  return (
    <>
      <defs>
        {useGlossDual ? (
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="20%" stopColor="black" stopOpacity="0" />
            <stop offset="32%" stopColor="black" stopOpacity="0.4" />
            <stop offset="42%" stopColor="white" stopOpacity="0.9" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="58%" stopColor="white" stopOpacity="0.9" />
            <stop offset="68%" stopColor="black" stopOpacity="0.4" />
            <stop offset="80%" stopColor="black" stopOpacity="0" />
          </linearGradient>
        ) : useHighGlossShadow ? (
          <>
            <radialGradient id={gradId} cx="0.25" cy="0.25" r="0.7" fx="0.2" fy="0.2">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="8%" stopColor="white" stopOpacity="1" />
              <stop offset="20%" stopColor="white" stopOpacity="0.5" />
              <stop offset="40%" stopColor="white" stopOpacity="0.15" />
              <stop offset="65%" stopColor="black" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id={`${gradId}-2`} cx="0.5" cy="0.5" rx="0.5" ry="0.5">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="40%" stopColor="white" stopOpacity="0.6" />
              <stop offset="70%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </>

        ) : finish === "Satin" ? (
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="15%" stopColor="black" stopOpacity="0" />
            <stop offset="30%" stopColor="black" stopOpacity="0.7" />
            <stop offset="40%" stopColor="black" stopOpacity="0.3" />
            <stop offset="47%" stopColor="white" stopOpacity="0.3" />
            <stop offset="50%" stopColor="white" stopOpacity="0.5" />
            <stop offset="53%" stopColor="white" stopOpacity="0.3" />
            <stop offset="60%" stopColor="black" stopOpacity="0.3" />
            <stop offset="70%" stopColor="black" stopOpacity="0.7" />
            <stop offset="85%" stopColor="black" stopOpacity="0" />
          </linearGradient>
        ) : (
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="25%" stopColor="white" stopOpacity="0" />
            <stop offset="42%" stopColor="white" stopOpacity="1" />
            <stop offset="58%" stopColor="white" stopOpacity="1" />
            <stop offset="75%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        )}
      </defs>
      <rect
        x="0" y="0" width={S} height={S}
        fill={`url(#${gradId})`}
        opacity={cfg.opacity}
        style={{ pointerEvents: "none" }}
      />
      {useHighGlossShadow && (
        <ellipse
          cx={S * 0.52} cy={S * 0.5}
          rx="52" ry="30"
          fill={`url(#${gradId}-2)`}
          opacity={0.45}
          transform={`rotate(-35, ${S * 0.52}, ${S * 0.5})`}
          style={{ pointerEvents: "none" }}
        />
      )}
    </>
  );
}

// ─── SWATCH RENDERERS ────────────────────────────────────────────────

function SwatchDefault({ colors }) {
  const { primary, secondary, accent, highlight, highlight2 } = colors;
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={primary.hex} />
      {secondary && (
        <polygon
          points={`0,${S * 0.4} ${S},${S * 0.68} ${S},${S} 0,${S}`}
          fill={secondary.hex}
        />
      )}
      {accent && <rect x="0" y="0" width={7} height={S} fill={accent.hex} />}
      {highlight && <rect x={0} y={S - 4} width={S} height={4} fill={highlight.hex} />}
      {highlight2 && <rect x={0} y={S - 8} width={S} height={4} fill={highlight2.hex} />}
    </g>
  );
}

function SwatchFerrari({ colors }) {
  // Primary red field, white bar stacked on top of yellow bar at bottom
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <rect x="0" y={S - 4} width={S} height={4} fill={colors.highlight.hex} />
      <rect x="0" y={S - 9} width={S} height={5} fill={colors.accent.hex} />
    </g>
  );
}

function SwatchRedBull({ colors }) {
  // Primary field only — accent bars rendered via topAccents above gloss overlay
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
    </g>
  );
}

function RedBullAccents({ colors }) {
  return (
    <g>
      <rect x="0" y={S - 6} width={S / 2} height={6} fill={colors.accent.hex} />
      <rect x={S / 2} y={S - 6} width={S / 2} height={6} fill={colors.highlight.hex} />
    </g>
  );
}

function SwatchRacingBulls({ colors }) {
  // White primary, Ford blue secondary diagonal — accent bars rendered via topAccents above gloss overlay
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <polygon
        points={`0,${S * 0.4} ${S},${S * 0.68} ${S},${S} 0,${S}`}
        fill={colors.secondary.hex}
      />
    </g>
  );
}

function RacingBullsAccents({ colors }) {
  return (
    <g>
      <rect x="0" y={S - 6} width={S / 2} height={6} fill={colors.highlight.hex} />
      <rect x={S / 2} y={S - 6} width={S / 2} height={6} fill={colors.highlight2.hex} />
    </g>
  );
}

function SwatchDuracell() {
  // Battery: metallic copper top 1/3, metallic anthracite bottom 2/3
  const copperH = Math.round(S * 0.33);
  return (
    <g>
      <defs>
        <linearGradient id="duracell-copper" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A0652A" />
          <stop offset="25%" stopColor="#E8A04A" />
          <stop offset="50%" stopColor="#CD7F32" />
          <stop offset="75%" stopColor="#DDA652" />
          <stop offset="100%" stopColor="#9B5E28" />
        </linearGradient>
        <linearGradient id="duracell-anthracite" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="25%" stopColor="#2E2E2E" />
          <stop offset="50%" stopColor="#1F1F1F" />
          <stop offset="75%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#181818" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={S} height={copperH} fill="url(#duracell-copper)" />
      <rect x="0" y={copperH} width={S} height={S - copperH} fill="url(#duracell-anthracite)" />
    </g>
  );
}

function SwatchHaas({ colors }) {
  // White primary, red secondary diagonal, blue bar at bottom
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <polygon
        points={`0,${S * 0.4} ${S},${S * 0.68} ${S},${S} 0,${S}`}
        fill={colors.secondary.hex}
      />
      <rect x="0" y={S - 5} width={S} height={5} fill={colors.accent.hex} />
    </g>
  );
}

function SwatchMercedes({ colors }) {
  // Anodized aluminum — horizontal shimmer rotated for forward momentum (left-to-right)
  return (
    <g>
      <defs>
        <linearGradient id="merc-anodized" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8A8A8" />
          <stop offset="25%" stopColor="#D0D0D0" />
          <stop offset="50%" stopColor="#B8B8B8" />
          <stop offset="75%" stopColor="#CFCFCF" />
          <stop offset="100%" stopColor="#A5A5A5" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={S} height={S} fill="url(#merc-anodized)" />
      <rect x={0} y={S - 4} width={S} height={4} fill={colors.highlight.hex} />
    </g>
  );
}

function SwatchAudi({ colors }) {
  // Realistic sunset gradient: warm amber horizon → peach → coral/rose → dusky lilac
  return (
    <g>
      <defs>
        <linearGradient id="audi-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E8961F" />
          <stop offset="22%" stopColor="#E8834A" />
          <stop offset="45%" stopColor="#D4727A" />
          <stop offset="68%" stopColor="#C07BA2" />
          <stop offset="100%" stopColor="#9882AC" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={S} height={S} fill="url(#audi-grad)" />
      <rect x="0" y={S - 4} width={S} height={4} fill={colors.highlight.hex} />
    </g>
  );
}

function SwatchAlpine({ colors }) {
  // ~70% pink, ~30% blue — diagonal pushed lower than SwatchDefault
  const { primary, secondary, highlight } = colors;
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={primary.hex} />
      <polygon
        points={`0,${S * 0.56} ${S},${S * 0.84} ${S},${S} 0,${S}`}
        fill={secondary.hex}
      />
      {highlight && <rect x={0} y={S - 4} width={S} height={4} fill={highlight.hex} />}
    </g>
  );
}

function SwatchAstonMartin({ colors }) {
  // British Racing Green with chrome gradient highlight bar
  return (
    <g>
      <defs>
        <linearGradient id="am-chrome" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#888" />
          <stop offset="30%" stopColor="#F0F0F0" />
          <stop offset="50%" stopColor="#999" />
          <stop offset="75%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#AAA" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <rect x={0} y={S - 4} width={S} height={4} fill="url(#am-chrome)" />
    </g>
  );
}

function SwatchCadillac({ colors }) {
  // Goldenrod gold field only — gem bars rendered via topAccents above gloss overlay
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
    </g>
  );
}

function CadillacAccents({ colors }) {
  // Cut-gem faceted red and blue bars
  const barY = S - 6;
  const barH = 6;
  const halfW = S / 2;
  return (
    <g>
      <defs>
        <linearGradient id="gem-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="20%" stopColor="#FF4D6A" stopOpacity="0.4" />
          <stop offset="50%" stopColor={colors.highlight.hex} stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="gem-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="20%" stopColor="#4A7FCC" stopOpacity="0.4" />
          <stop offset="50%" stopColor={colors.highlight2.hex} stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect x="0" y={barY} width={halfW} height={barH} fill={colors.highlight.hex} />
      <rect x="0" y={barY} width={halfW} height={barH} fill="url(#gem-red)" />
      <rect x={halfW} y={barY} width={halfW} height={barH} fill={colors.highlight2.hex} />
      <rect x={halfW} y={barY} width={halfW} height={barH} fill="url(#gem-blue)" />
    </g>
  );
}

// ─── FLAG RENDERERS ─────────────────────────────────────────────────

function FlagItaly() {
  return (
    <svg width="20" height="14" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE2B37" />
    </svg>
  );
}

function FlagUK() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagAustria() {
  return (
    <svg width="20" height="14" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="3" height="2" fill="#ED2939" />
      <rect y="0.667" width="3" height="0.667" fill="#fff" />
    </svg>
  );
}

function FlagGermany() {
  return (
    <svg width="20" height="14" viewBox="0 0 5 3" aria-hidden="true">
      <rect width="5" height="1" fill="#000" />
      <rect y="1" width="5" height="1" fill="#DD0000" />
      <rect y="2" width="5" height="1" fill="#FFCC00" />
    </svg>
  );
}

function FlagFrance() {
  return (
    <svg width="20" height="14" viewBox="0 0 3 2" aria-hidden="true">
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

function FlagUSA() {
  return (
    <svg width="20" height="14" viewBox="0 0 190 100" aria-hidden="true">
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * 7.69} width="190" height="7.69" fill="#B22234" />
      ))}
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={i * 7.69} width="190" height="7.69" fill="#fff" />
      ))}
      <rect width="76" height="53.85" fill="#3C3B6E" />
    </svg>
  );
}

const FLAGS = {
  Italy: FlagItaly,
  "United Kingdom": FlagUK,
  Austria: FlagAustria,
  Germany: FlagGermany,
  France: FlagFrance,
  "United States": FlagUSA,
};

// ─── TEAM DATA ───────────────────────────────────────────────────────

import teamsData from "./teams.json";

const RENDERERS = {
  Ferrari: SwatchFerrari,
  McLaren: SwatchDefault,
  "Red Bull": SwatchRedBull,
  Mercedes: SwatchMercedes,
  "Racing Bulls": SwatchRacingBulls,
  "Aston Martin": SwatchAstonMartin,
  Alpine: SwatchAlpine,
  "Duracell Racing": SwatchDuracell,
  Haas: SwatchHaas,
  Audi: SwatchAudi,
  Cadillac: SwatchCadillac,
};

const TOP_ACCENTS = {
  "Red Bull": RedBullAccents,
  "Racing Bulls": RacingBullsAccents,
  Cadillac: CadillacAccents,
};

const teams = teamsData.map((team) => ({
  ...team,
  renderer: RENDERERS[team.name] ?? SwatchDefault,
  topAccents: TOP_ACCENTS[team.name],
}));

// ─── COMPONENTS ──────────────────────────────────────────────────────

function LiverySwatch({ team }) {
  const Renderer = team.renderer;
  const TopAccents = team.topAccents;
  const isWhitePrimary = team.colors.primary.hex === "#FFFFFF";
  return (
    <svg
      width={S}
      height={S}
      viewBox={`0 0 ${S} ${S}`}
      aria-hidden="true"
      focusable="false"
      style={{
        borderRadius: 2,
        display: "block",
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <defs>
        <clipPath id={`clip-${team.name.replace(/\s/g, "")}`}>
          <rect x="0" y="0" width={S} height={S} rx="2" ry="2" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${team.name.replace(/\s/g, "")})`}>
        <Renderer colors={team.colors} />
        {team.overlay !== false && <FinishOverlay finish={team.finish} primaryHex={team.colors.primary.hex} />}
        {TopAccents && <TopAccents colors={team.colors} />}
      </g>
    </svg>
  );
}

function LegendSwatch({ hex }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: hex,
        border: "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}
    />
  );
}

function LegendItem({ c }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0, flexWrap: "wrap", overflow: "hidden", height: 13, fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", lineHeight: 1.3 }}>
      <LegendSwatch hex={c.hex} />
      <span style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#ccc", fontWeight: 500 }}>{c.name}</span>
      <span style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#8a8a8a" }}>{c.hex}</span>
    </div>
  );
}

function SwatchLegend({ legend }) {
  const useGrid = legend.length >= 4;
  return (
    <div
      style={
        useGrid
          ? { display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px" }
          : { display: "flex", flexDirection: "column", gap: 4 }
      }
    >
      {legend.map((c, i) => (
        <LegendItem key={i} c={c} />
      ))}
    </div>
  );
}

function TeamCard({ team }) {
  const isPending = team.pending;
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#1e1e22",
        borderRadius: 3,
        padding: "22px 24px 18px",
        border: isPending ? "2px dashed #444" : "1px solid #2a2a2e",
        boxShadow: isPending ? "none" : "0 2px 8px rgba(0,0,0,0.3)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {isPending && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5625rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#b08000",
            backgroundColor: "#fff8e7",
            padding: "3px 8px",
            borderRadius: 4,
          }}
        >
          Pending
        </div>
      )}

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, paddingRight: isPending ? 70 : 0 }}>
        <h2
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: "1.0625rem",
            fontWeight: 800,
            color: "#e8e8e8",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}
        >
          {team.name}
        </h2>
        {team.subtitle && (
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#8a8a8a", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {team.subtitle}
          </div>
        )}
        {team.country && FLAGS[team.country] && (
          <div
            role="img"
            aria-label={team.country}
            style={{ lineHeight: 0, flexShrink: 0, marginLeft: "auto" }}
          >
            {(() => { const Flag = FLAGS[team.country]; return <Flag />; })()}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
        <LiverySwatch team={team} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 8, minHeight: S }}>
          <SwatchLegend legend={team.legend} />
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#8a8a8a", marginBottom: 1 }}>
              Finish
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", fontWeight: 500, color: "#aaa" }}>
              {team.finish}
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontFamily: "'Epilogue', sans-serif", fontSize: "0.75rem", color: "#999", lineHeight: 1.55, margin: 0, flex: 1 }}>
        {team.direction}
      </p>

      {team.special && (
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#aaa", backgroundColor: "#252528", padding: "7px 10px", borderRadius: 3, lineHeight: 1.4 }}>
          ✦ {team.special}
        </div>
      )}

      <div style={{ display: "flex", gap: 20, borderTop: "1px solid #2a2a2e", paddingTop: 8, flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#8a8a8a", marginBottom: 1 }}>
            Removed
          </div>
          <div style={{ fontFamily: "'Epilogue', sans-serif", fontSize: "0.6875rem", color: "#8a8a8a", fontStyle: "italic" }}>
            {team.removed}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────

export default function F1LiveryDesigns() {
  const allTeams = teams;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111113", fontFamily: "'Epilogue', sans-serif" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#0a0a0a", padding: "48px 40px 44px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 420, height: 300, background: "linear-gradient(135deg, rgba(220,0,0,0.12), rgba(255,128,0,0.08), rgba(0,92,45,0.08), rgba(180,151,189,0.12), rgba(218,165,32,0.1))", filter: "blur(70px)", borderRadius: "50%" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8a8a8a", marginBottom: 12 }}>
            Design System · 2026 Season
          </div>
          <h1 style={{ fontSize: "2.625rem", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            F1 Livery Designs
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#888", marginTop: 16, maxWidth: 540, lineHeight: 1.55 }}>
            Complete color direction for all 11 teams on the 2026 grid.
            Each swatch represents the proportional color scheme with custom
            treatments per team.
          </p>

          <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#8a8a8a" }}>
              <span style={{ color: "#fff", fontWeight: 500 }}>11</span> Teams
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem", color: "#8a8a8a" }}>
              <span style={{ color: "#fff", fontWeight: 500 }}>11</span> Confirmed
            </div>
          </div>
        </div>
      </header>

      {/* Grid */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 24px 48px" }}>
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 16, listStyle: "none", padding: 0, margin: 0 }}>
          {allTeams.map((team, i) => (
            <li key={team.name} style={{ display: "flex" }}><TeamCard team={team} /></li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #2a2a2e", padding: "24px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#8a8a8a", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            @tgulls · F1 2026 Livery Design System
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", color: "#8a8a8a" }}>
            March 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
