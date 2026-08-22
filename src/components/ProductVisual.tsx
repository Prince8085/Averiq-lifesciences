import type { Form } from "@/data/products";

/**
 * Lightweight SVG "packshots" — one clean illustration per dosage form,
 * tinted with each product's brand gradient. Keeps the catalog visual
 * without requiring photography assets.
 */

export function ProductVisual({
  form,
  name,
  from,
  to,
  text = "#ffffff",
  className,
}: {
  form: Form;
  name: string;
  from: string;
  to: string;
  text?: string;
  className?: string;
}) {
  const label = name.toUpperCase();
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={`${name} — ${form} packshot`}
    >
      <defs>
        <linearGradient id={`pv-${form}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <linearGradient id={`pv-bg-${form}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef4fb" />
        </linearGradient>
      </defs>

      {/* soft platform shadow */}
      <ellipse cx="100" cy="172" rx="62" ry="10" fill="#0f172a" opacity="0.08" />

      {form === "Gel" || form === "Cream" ? <Tube /> : null}
      {form === "Face Wash" ? <FaceWashTube /> : null}
      {form === "Serum" ? <Dropper /> : null}
      {form === "Hair Serum" ? <Spray /> : null}
      {form === "Capsule" ? <Capsules /> : null}
      {form === "Tablet" ? <Tablets /> : null}

      {/* label text on the pack */}
      <text
        x="100"
        y="120"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fill={text}
        letterSpacing="1"
      >
        {label.length > 12 ? label.slice(0, 12) : label}
      </text>
    </svg>
  );

  function Tube() {
    return (
      <g>
        {/* tube body */}
        <rect x="64" y="52" width="72" height="92" rx="10" fill={`url(#pv-${form})`} />
        {/* crimp end */}
        <rect x="80" y="40" width="40" height="16" rx="3" fill={to} opacity="0.85" />
        {/* cap */}
        <rect x="90" y="144" width="20" height="14" rx="4" fill="#0f172a" opacity="0.75" />
        {/* band + label zone */}
        <rect x="64" y="88" width="72" height="44" fill="#ffffff" opacity="0.92" />
        <rect x="64" y="88" width="72" height="6" fill="#ffffff" opacity="0.92" />
        <line x1="64" y1="94" x2="136" y2="94" stroke={to} strokeWidth="3" />
        <rect x="96" y="100" width="8" height="8" rx="4" fill={from} />
      </g>
    );
  }

  function FaceWashTube() {
    return (
      <g>
        {/* tube body */}
        <rect x="64" y="60" width="72" height="90" rx="10" fill={`url(#pv-${form})`} />
        {/* crimp end */}
        <rect x="80" y="48" width="40" height="16" rx="3" fill={to} opacity="0.85" />
        {/* flip cap */}
        <rect x="90" y="30" width="20" height="20" rx="4" fill="#0f172a" opacity="0.85" />
        <rect x="94" y="26" width="12" height="6" rx="2" fill="#0f172a" opacity="0.6" />
        {/* label zone */}
        <rect x="64" y="98" width="72" height="38" fill="#ffffff" opacity="0.92" />
        <line x1="64" y1="104" x2="136" y2="104" stroke={to} strokeWidth="3" />
        <rect x="96" y="112" width="8" height="8" rx="4" fill={from} />
        {/* foam dots at nozzle */}
        <circle cx="92" cy="156" r="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="100" cy="160" r="2.2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <circle cx="108" cy="154" r="2.6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      </g>
    );
  }

  function Dropper() {
    return (
      <g>
        {/* bottle body */}
        <rect x="72" y="64" width="56" height="84" rx="8" fill={`url(#pv-${form})`} />
        <rect x="82" y="76" width="36" height="46" rx="4" fill="#ffffff" opacity="0.9" />
        {/* neck */}
        <rect x="88" y="52" width="24" height="16" rx="3" fill={to} />
        {/* dropper cap */}
        <rect x="84" y="36" width="32" height="18" rx="6" fill="#0f172a" opacity="0.85" />
        <circle cx="100" cy="26" r="6" fill="#0f172a" opacity="0.6" />
        {/* drop */}
        <path d="M100 150 q 7 12 0 20 q -7 -8 0 -20" fill={from} opacity="0.9" />
      </g>
    );
  }

  function Spray() {
    return (
      <g>
        {/* bottle */}
        <rect x="70" y="58" width="60" height="92" rx="14" fill={`url(#pv-${form})`} />
        <rect x="80" y="72" width="40" height="50" rx="6" fill="#ffffff" opacity="0.9" />
        {/* pump head */}
        <rect x="88" y="40" width="24" height="20" rx="5" fill="#0f172a" opacity="0.85" />
        {/* nozzle */}
        <path d="M112 40 h10 v6 h-10 z" fill={to} />
        {/* mist dots */}
        <circle cx="130" cy="34" r="2" fill={from} opacity="0.7" />
        <circle cx="138" cy="40" r="1.6" fill={from} opacity="0.5" />
        <circle cx="135" cy="28" r="1.4" fill={from} opacity="0.6" />
      </g>
    );
  }

  function Capsules() {
    return (
      <g>
        {/* blister card */}
        <rect x="52" y="44" width="96" height="112" rx="8" fill="#ffffff" stroke="#e2e8f0" />
        {/* capsules */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="78" y={52 + i * 30} width="44" height="18" rx="9" fill={from} opacity="0.25" />
            <rect x="78" y={52 + i * 30} width="44" height="18" rx="9" fill="none" stroke={to} strokeWidth="1.5" opacity="0.6" />
            <rect x="78" y={52 + i * 30} width="22" height="18" rx="9" fill={from} />
            <rect x="100" y={52 + i * 30} width="22" height="18" rx="9" fill="#ffffff" />
          </g>
        ))}
      </g>
    );
  }

  function Tablets() {
    return (
      <g>
        {/* blister card */}
        <rect x="52" y="44" width="96" height="112" rx="8" fill="#ffffff" stroke="#e2e8f0" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            {/* pocket */}
            <rect x="74" y={54 + i * 30} width="52" height="22" rx="11" fill={from} opacity="0.18" />
            {/* tablet */}
            <ellipse cx="100" cy={65 + i * 30} rx="18" ry="7.5" fill={`url(#pv-${form})`} />
            <path d={`M82 ${65 + i * 30} h36`} stroke="#ffffff" strokeWidth="2.5" opacity="0.7" />
          </g>
        ))}
      </g>
    );
  }

  function Bottle() {
    return (
      <g>
        <rect x="76" y="58" width="48" height="88" rx="10" fill={`url(#pv-${form})`} />
        <rect x="84" y="70" width="32" height="44" rx="5" fill="#ffffff" opacity="0.9" />
        <rect x="88" y="46" width="24" height="16" rx="3" fill={to} />
        <rect x="84" y="30" width="32" height="18" rx="5" fill="#0f172a" opacity="0.85" />
        {/* measure cup */}
        <rect x="122" y="150" width="34" height="16" rx="4" fill="#ffffff" stroke="#cbd5e1" />
        <line x1="124" y1="146" x2="124" y2="152" stroke="#cbd5e1" strokeWidth="2" />
      </g>
    );
  }

  function LotionBottle() {
    return (
      <g>
        <rect x="74" y="56" width="52" height="94" rx="12" fill={`url(#pv-${form})`} />
        <rect x="84" y="68" width="32" height="50" rx="6" fill="#ffffff" opacity="0.9" />
        {/* pump */}
        <rect x="90" y="42" width="20" height="16" rx="4" fill="#0f172a" opacity="0.85" />
        <path d="M110 46 h8 v4 h-8 z" fill={to} />
        <rect x="116" y="44" width="3" height="10" rx="1.5" fill="#0f172a" opacity="0.6" />
      </g>
    );
  }
}
