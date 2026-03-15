
const S = 88;

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
  // Primary field, red+yellow side by side bars along bottom
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <rect x="0" y={S - 6} width={S / 2} height={6} fill={colors.accent.hex} />
      <rect x={S / 2} y={S - 6} width={S / 2} height={6} fill={colors.highlight.hex} />
    </g>
  );
}

function SwatchRacingBulls({ colors }) {
  // White primary, Ford blue secondary diagonal, red+yellow side by side bars at bottom
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <polygon
        points={`0,${S * 0.4} ${S},${S * 0.68} ${S},${S} 0,${S}`}
        fill={colors.secondary.hex}
      />
      <rect x="0" y={S - 6} width={S / 2} height={6} fill={colors.highlight.hex} />
      <rect x={S / 2} y={S - 6} width={S / 2} height={6} fill={colors.highlight2.hex} />
    </g>
  );
}

function SwatchDuracell({ colors }) {
  // Flat stacked horizontal segments like a battery: copper top 1/3, black bottom 2/3
  const copperH = Math.round(S * 0.33);
  return (
    <g>
      <rect x="0" y="0" width={S} height={copperH} fill={colors.secondary.hex} />
      <rect x="0" y={copperH} width={S} height={S - copperH} fill={colors.primary.hex} />
    </g>
  );
}

function SwatchHaas({ colors }) {
  // White primary, red secondary diagonal, blue bar at bottom (no black)
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
  // Goldenrod gold field, bottom bar split red and blue
  return (
    <g>
      <rect x="0" y="0" width={S} height={S} fill={colors.primary.hex} />
      <rect x="0" y={S - 5} width={S / 2} height={5} fill={colors.highlight.hex} />
      <rect x={S / 2} y={S - 5} width={S / 2} height={5} fill={colors.highlight2.hex} />
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

const teams = [
  {
    name: "Ferrari",
    country: "Italy",
    direction: "Classic Rosso Scuderia, gloss finish. White accents. Giallo Modena yellow highlights. No blue HP logo.",
    colors: {
      primary: { name: "Rosso Scuderia", hex: "#DC0000" },
      accent: { name: "White", hex: "#FFFFFF" },
      highlight: { name: "Giallo Modena", hex: "#FFD700" },
    },
    legend: [
      { shape: "■", name: "Rosso Scuderia", hex: "#DC0000" },
      { shape: "▬", name: "White", hex: "#FFFFFF" },
      { shape: "▬", name: "Giallo Modena", hex: "#FFD700" },
    ],
    finish: "Gloss",
    removed: "Blue HP branding",
    renderer: SwatchFerrari,
  },
  {
    name: "McLaren",
    country: "United Kingdom",
    direction: "100% papaya orange. No secondary color blocks. Black only where structurally unavoidable.",
    colors: {
      primary: { name: "Papaya Orange", hex: "#FF8000" },
      highlight: { name: "Black (structural)", hex: "#1A1A1A" },
    },
    legend: [
      { shape: "■", name: "Papaya Orange", hex: "#FF8000" },
      { shape: "▬", name: "Black (structural)", hex: "#1A1A1A" },
    ],
    finish: "Matte",
    removed: "Teal, anthracite, any decorative black",
    renderer: SwatchDefault,
  },
  /* ── Red Bull Option A (Classic Identity) ── kept for reference ──
  {
    name: "Red Bull",
    subtitle: "Classic Identity",
    direction: "Matte navy with red and yellow accents. The pre-2026 identity that defined the four-title era.",
    colors: {
      primary: { name: "Matte Navy", hex: "#1B2A4A" },
      accent: { name: "Red Bull Red", hex: "#CC1E4A" },
      highlight: { name: "Red Bull Yellow", hex: "#FFC906" },
    },
    legend: [
      { shape: "■", name: "Matte Navy", hex: "#1B2A4A" },
      { shape: "▬", name: "Red Bull Red", hex: "#CC1E4A" },
      { shape: "▬", name: "Red Bull Yellow", hex: "#FFC906" },
    ],
    finish: "Matte",
    removed: "Gloss blue, jacquard pattern",
    renderer: SwatchRedBull,
  },
  ── end Option A ── */
  {
    name: "Red Bull",
    country: "Austria",
    subtitle: "2026 Throwback",
    direction: "Gloss racing blue with red and yellow logos/highlights. The 2026 actual — a throwback to 2005 debut.",
    colors: {
      primary: { name: "Racing Blue", hex: "#2245A8" },
      accent: { name: "Red Bull Red", hex: "#CC1E4A" },
      highlight: { name: "Red Bull Yellow", hex: "#FFC906" },
    },
    legend: [
      { shape: "■", name: "Racing Blue", hex: "#2245A8" },
      { shape: "▬", name: "Red Bull Red", hex: "#CC1E4A" },
      { shape: "▬", name: "Red Bull Yellow", hex: "#FFC906" },
    ],
    finish: "Gloss",
    removed: "Matte finish, dark navy",
    renderer: SwatchRedBull,
  },
  {
    name: "Mercedes",
    country: "Germany",
    direction: "Full silver anodized aluminum finish. Reclaiming 'Silver Arrows' literally. Teal for numbers and small highlights only.",
    colors: {
      primary: { name: "Anodized Aluminum", hex: "#C0C0C0" },
      highlight: { name: "Petronas Teal", hex: "#00D2BE" },
    },
    legend: [
      { shape: "■", name: "Anodized Aluminum", hex: "#C0C0C0" },
      { shape: "▬", name: "Petronas Teal", hex: "#00D2BE" },
    ],
    finish: "Anodized",
    removed: "Black bodywork, zebra stripe, gradient transitions",
    renderer: SwatchDefault,
  },
  {
    name: "Racing Bulls",
    country: "Italy",
    direction: "White dominant with elevated Ford blue. Red Bull logo colors restricted to nose cone and airbox only.",
    colors: {
      primary: { name: "White", hex: "#FFFFFF" },
      secondary: { name: "Ford Blue", hex: "#003DA5" },
      highlight: { name: "RB Red", hex: "#CC1E4A" },
      highlight2: { name: "RB Yellow", hex: "#FFC906" },
    },
    legend: [
      { shape: "■", name: "White", hex: "#FFFFFF" },
      { shape: "▬", name: "RB Red", hex: "#CC1E4A" },
      { shape: "◣", name: "Ford Blue", hex: "#003DA5" },
      { shape: "▬", name: "RB Yellow", hex: "#FFC906" },
    ],
    finish: "Gloss",
    removed: "Decorative red/yellow, carbon fiber aesthetic",
    renderer: SwatchRacingBulls,
  },
  {
    name: "Aston Martin",
    country: "United Kingdom",
    direction: "Satin British Racing Green wall-to-wall. Silver accents only. No lime green.",
    colors: {
      primary: { name: "British Racing Green", hex: "#005C2D" },
      highlight: { name: "Chrome", hex: "#C8C8C8" },
    },
    legend: [
      { shape: "■", name: "British Racing Green", hex: "#005C2D" },
      { shape: "▬", name: "Chrome", hex: "chrome" },
    ],
    finish: "Satin",
    removed: "Lime green, light blue rear wing",
    renderer: SwatchAstonMartin,
  },
  {
    name: "Alpine",
    country: "France",
    direction: "Glossy bubblegum pink dominant (~70%). Alpine blue as secondary (~30%). White logos and numbers.",
    colors: {
      primary: { name: "BWT Pink", hex: "#F596C8" },
      secondary: { name: "Alpine Blue", hex: "#0078C1" },
      highlight: { name: "White", hex: "#FFFFFF" },
    },
    legend: [
      { shape: "■", name: "BWT Pink", hex: "#F596C8" },
      { shape: "◣", name: "Alpine Blue", hex: "#0078C1" },
      { shape: "▬", name: "White", hex: "#FFFFFF" },
    ],
    finish: "Gloss",
    removed: "Blue-dominant hierarchy",
    renderer: SwatchAlpine,
  },
  {
    name: "Duracell Racing",
    country: "United Kingdom",
    subtitle: "fka Williams",
    direction: "The entire car is a Duracell battery. Copper front third, black rear two-thirds. Hard cut, no gradient.",
    colors: {
      primary: { name: "Anthracite Anode", hex: "#1A1A1A" },
      secondary: { name: "Copper Cathode", hex: "#CD7F32" },
    },
    legend: [
      { shape: "▬", name: "Copper Cathode", hex: "#CD7F32" },
      { shape: "■", name: "Anthracite Anode", hex: "#1A1A1A" },
    ],
    finish: "Metallic",
    removed: "Williams blue, all heritage elements",
    special: "Stacked flat segments — it's a battery",
    renderer: SwatchDuracell,
  },
  {
    name: "Haas",
    country: "United States",
    direction: "Red, white, and blue — finally leaning into being the American team. Toyota red does double duty.",
    colors: {
      primary: { name: "White", hex: "#FFFFFF" },
      secondary: { name: "Toyota Red", hex: "#CE0E2D" },
      accent: { name: "American Blue", hex: "#002868" },
    },
    legend: [
      { shape: "■", name: "White", hex: "#FFFFFF" },
      { shape: "◣", name: "Toyota Red", hex: "#CE0E2D" },
      { shape: "▬", name: "American Blue", hex: "#002868" },
    ],
    finish: "Gloss",
    removed: "Nothing major — blue fills the identity gap",
    renderer: SwatchHaas,
  },
  {
    name: "Audi",
    country: "Germany",
    subtitle: "Landscape Livery",
    direction: "Sunset gradient nose to tail — amber horizon through peach and coral into dusky lilac. Matte. Inspired by Audi's landscape advertising.",
    colors: {
      primary: { name: "Dusky Lilac", hex: "#9882AC" },
      secondary: { name: "Amber Glow", hex: "#E8961F" },
      highlight: { name: "Audi Red", hex: "#BB0A30" },
    },
    legend: [
      { shape: "◧", name: "Sunset gradient", hex: "gradient" },
      { shape: "▬", name: "Audi Red", hex: "#BB0A30" },
    ],
    finish: "Matte",
    removed: "Titanium, silver, carbon black",
    special: "Gradient justified — represents actual sky",
    renderer: SwatchAudi,
  },
  {
    name: "Cadillac",
    country: "United States",
    direction: "Full glossy yellow. Classic Cadillac crest on rear body/fin. Red and blue from the crest as accents.",
    colors: {
      primary: { name: "Cadillac Gold", hex: "#F5C518" },
      highlight: { name: "Cadillac Red", hex: "#C41E3A" },
      highlight2: { name: "Cadillac Blue", hex: "#002868" },
    },
    legend: [
      { shape: "■", name: "Cadillac Gold", hex: "#F5C518" },
      { shape: "▬", name: "Cadillac Red", hex: "#C41E3A" },
      { shape: "▬", name: "Cadillac Blue", hex: "#002868" },
    ],
    finish: "High Gloss",
    removed: "Asymmetric split, black/white scheme",
    renderer: SwatchCadillac,
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────

function LiverySwatch({ team }) {
  const Renderer = team.renderer;
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
      </g>
    </svg>
  );
}

function LegendSwatch({ hex }) {
  const special = hex === "gradient" || hex === "chrome";
  const bg =
    hex === "gradient"
      ? "linear-gradient(0deg, #E8961F, #D4727A, #9882AC)"
      : hex === "chrome"
        ? "linear-gradient(90deg, #888 0%, #F0F0F0 30%, #999 50%, #FAFAFA 75%, #AAA 100%)"
        : undefined;
  return (
    <div
      aria-hidden="true"
      style={{
        width: 10,
        height: 10,
        borderRadius: 2,
        ...(special ? { background: bg } : { backgroundColor: hex }),
        border: hex === "gradient" ? undefined : "1px solid rgba(255,255,255,0.1)",
        flexShrink: 0,
      }}
    />
  );
}

function LegendItem({ c }) {
  const isSpecial = c.hex === "gradient" || c.hex === "chrome";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0, flexWrap: "wrap", overflow: "hidden", height: 13, fontFamily: "'DM Mono', monospace", fontSize: "0.625rem", lineHeight: 1.3 }}>
      <LegendSwatch hex={c.hex} />
      <span style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#ccc", fontWeight: 500 }}>{c.name}</span>
      {!isSpecial && <span style={{ flexShrink: 0, whiteSpace: "nowrap", color: "#8a8a8a" }}>{c.hex}</span>}
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
