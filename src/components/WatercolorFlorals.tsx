import React from 'react';

interface FloralProps {
  tone?: 'blush' | 'sage' | 'dustyBlue' | 'emerald' | 'burgundy' | 'champagne' | 'frostyWinter' | 'frostedRose' | 'icySlate';
  className?: string;
}

const colorMaps = {
  frostyWinter: {
    petal1: '#8FA8BE',
    petal2: '#C9D9E5',
    petal3: '#4F728C',
    roseInner: '#EBF3F8',
    roseOuter: '#7594AB',
    center: '#F7FAFC',
    leaf1: '#5A756C',
    leaf2: '#354E46',
    gold: '#B69A5E',
    silver: '#D3DFE8',
    frost: '#FFFFFF',
  },
  frostedRose: {
    petal1: '#C48D9E',
    petal2: '#E8BCC8',
    petal3: '#874D60',
    roseInner: '#FAEDF1',
    roseOuter: '#B57488',
    center: '#FFF5F8',
    leaf1: '#6E857C',
    leaf2: '#415951',
    gold: '#C5A059',
    silver: '#E2D9DF',
    frost: '#FFFFFF',
  },
  icySlate: {
    petal1: '#708E9B',
    petal2: '#B4CAD2',
    petal3: '#3A5B69',
    roseInner: '#E9F1F4',
    roseOuter: '#567988',
    center: '#F2F8FA',
    leaf1: '#4A635B',
    leaf2: '#273F38',
    gold: '#A5926B',
    silver: '#C8D9E2',
    frost: '#FFFFFF',
  },
  blush: {
    petal1: '#E8A598',
    petal2: '#F4C2C2',
    petal3: '#D87093',
    roseInner: '#FFF0F5',
    roseOuter: '#E8A598',
    center: '#FFF0F5',
    leaf1: '#8A9A86',
    leaf2: '#5F7161',
    gold: '#D4AF37',
    silver: '#E8DFD8',
    frost: '#FFFFFF',
  },
  sage: {
    petal1: '#C9D5B5',
    petal2: '#E3EAD2',
    petal3: '#99A88C',
    roseInner: '#F7FAEE',
    roseOuter: '#BAC9A3',
    center: '#F7FAEE',
    leaf1: '#588157',
    leaf2: '#3A5A40',
    gold: '#C5A059',
    silver: '#DDE2D6',
    frost: '#FFFFFF',
  },
  dustyBlue: {
    petal1: '#8EA8C3',
    petal2: '#B8CBD0',
    petal3: '#5C7D99',
    roseInner: '#F0F5F9',
    roseOuter: '#7D9AB6',
    center: '#F0F5F9',
    leaf1: '#778899',
    leaf2: '#4A6B82',
    gold: '#C0A060',
    silver: '#CBD8E2',
    frost: '#FFFFFF',
  },
  emerald: {
    petal1: '#84A98C',
    petal2: '#CAD2C5',
    petal3: '#52796F',
    roseInner: '#F1F8F5',
    roseOuter: '#6A9482',
    center: '#F1F8F5',
    leaf1: '#2D6A4F',
    leaf2: '#1B4332',
    gold: '#D4AF37',
    silver: '#D2DDD7',
    frost: '#FFFFFF',
  },
  burgundy: {
    petal1: '#A84351',
    petal2: '#D68C96',
    petal3: '#6B1E28',
    roseInner: '#FDECEF',
    roseOuter: '#943340',
    center: '#FDECEF',
    leaf1: '#5D675B',
    leaf2: '#3E473D',
    gold: '#DFC186',
    silver: '#E5D6D8',
    frost: '#FFFFFF',
  },
  champagne: {
    petal1: '#DFC186',
    petal2: '#F3E5AB',
    petal3: '#C5A059',
    roseInner: '#FFFDF9',
    roseOuter: '#D2B270',
    center: '#FFFDF9',
    leaf1: '#A39F87',
    leaf2: '#736F5A',
    gold: '#B8860B',
    silver: '#EAE5D9',
    frost: '#FFFFFF',
  },
};

/**
 * Top-left or Top-right watercolor corner floral bouquet
 */
export const WatercolorCorner: React.FC<FloralProps & { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  tone = 'blush',
  position = 'top-left',
  className = '',
}) => {
  const c = colorMaps[tone] || colorMaps.blush;

  let transformClass = '';
  if (position === 'top-right') transformClass = 'scale-x-[-1]';
  if (position === 'bottom-left') transformClass = 'scale-y-[-1]';
  if (position === 'bottom-right') transformClass = 'scale-[-1]';

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${transformClass} ${className}`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
      >
        <defs>
          {/* Watercolor blur filter for organic painted effect */}
          <filter id={`watercolor-filter-${position}-${tone}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* Radial gradients for soft watercolor bleeds */}
          <radialGradient id={`peonyGrad-${tone}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor={c.center} stopOpacity="0.95" />
            <stop offset="45%" stopColor={c.petal2} stopOpacity="0.85" />
            <stop offset="85%" stopColor={c.petal1} stopOpacity="0.75" />
            <stop offset="100%" stopColor={c.petal3} stopOpacity="0.6" />
          </radialGradient>

          <radialGradient id={`roseGrad-${tone}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="40%" stopColor={c.petal2} stopOpacity="0.8" />
            <stop offset="90%" stopColor={c.petal1} stopOpacity="0.7" />
          </radialGradient>

          <radialGradient id={`leafGrad-${tone}`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={c.leaf1} stopOpacity="0.85" />
            <stop offset="100%" stopColor={c.leaf2} stopOpacity="0.7" />
          </radialGradient>
        </defs>

        <g filter={`url(#watercolor-filter-${position}-${tone})`}>
          {/* Gold Foil Delicate Tendrils & Twigs */}
          <path
            d="M 5 5 C 40 40, 80 20, 160 50 C 120 70, 70 80, 45 150 C 40 100, 30 60, 5 5 Z"
            fill="none"
            stroke={c.gold}
            strokeWidth="1.2"
            strokeDasharray="2 2"
            opacity="0.7"
          />
          <circle cx="160" cy="50" r="3" fill={c.gold} opacity="0.8" />
          <circle cx="140" cy="35" r="2" fill={c.gold} opacity="0.7" />
          <circle cx="45" cy="150" r="3" fill={c.gold} opacity="0.8" />
          <circle cx="35" cy="130" r="2" fill={c.gold} opacity="0.6" />

          {/* Eucalyptus Leaf Stems */}
          <path
            d="M 0 0 Q 70 60 130 90 Q 90 120 40 170"
            stroke={c.leaf2}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Eucalyptus Round Leaves */}
          <ellipse cx="60" cy="35" rx="18" ry="24" transform="rotate(35 60 35)" fill={`url(#leafGrad-${tone})`} opacity="0.75" />
          <ellipse cx="100" cy="55" rx="16" ry="22" transform="rotate(55 100 55)" fill={`url(#leafGrad-${tone})`} opacity="0.7" />
          <ellipse cx="140" cy="80" rx="14" ry="18" transform="rotate(65 140 80)" fill={`url(#leafGrad-${tone})`} opacity="0.65" />
          <ellipse cx="40" cy="85" rx="16" ry="22" transform="rotate(15 40 85)" fill={`url(#leafGrad-${tone})`} opacity="0.75" />
          <ellipse cx="50" cy="130" rx="15" ry="20" transform="rotate(5 50 130)" fill={`url(#leafGrad-${tone})`} opacity="0.7" />
          <ellipse cx="30" cy="165" rx="12" ry="16" transform="rotate(-15 30 165)" fill={`url(#leafGrad-${tone})`} opacity="0.65" />

          {/* Soft Fern Sprigs */}
          <path d="M 90 20 Q 130 15 170 30" stroke={c.leaf1} strokeWidth="1" opacity="0.7" />
          <path d="M 15 90 Q 20 130 35 170" stroke={c.leaf1} strokeWidth="1" opacity="0.7" />

          {/* Main Large Watercolor Peony */}
          <g transform="translate(10, 10)">
            {/* Outer Petals */}
            <path
              d="M 40 10 C 70 -5, 95 20, 85 45 C 75 70, 45 80, 25 65 C 5 50, 10 25, 40 10 Z"
              fill={`url(#peonyGrad-${tone})`}
              opacity="0.8"
            />
            <path
              d="M 55 25 C 80 15, 100 40, 90 65 C 80 90, 50 95, 35 80 C 20 65, 30 35, 55 25 Z"
              fill={`url(#peonyGrad-${tone})`}
              opacity="0.85"
            />
            <path
              d="M 25 35 C 45 15, 75 25, 70 55 C 65 85, 35 90, 15 75 C -5 60, 5 55, 25 35 Z"
              fill={`url(#peonyGrad-${tone})`}
              opacity="0.8"
            />

            {/* Inner layered petals */}
            <path
              d="M 45 35 C 65 25, 75 45, 68 60 C 60 75, 40 75, 32 62 C 25 50, 25 45, 45 35 Z"
              fill={`url(#roseGrad-${tone})`}
              opacity="0.9"
            />
            <path
              d="M 48 42 C 58 35, 66 45, 60 55 C 55 65, 42 62, 38 54 C 35 46, 38 48, 48 42 Z"
              fill={c.petal3}
              opacity="0.65"
            />

            {/* Stamen / Golden pistils */}
            <circle cx="50" cy="48" r="2.5" fill={c.gold} />
            <circle cx="46" cy="45" r="1.8" fill={c.gold} />
            <circle cx="54" cy="50" r="1.8" fill={c.gold} />
          </g>

          {/* Secondary Rosebud Accent */}
          <g transform="translate(75, 60) scale(0.65)">
            <path
              d="M 30 10 C 50 0, 70 20, 60 40 C 50 60, 30 60, 15 45 C 0 30, 10 20, 30 10 Z"
              fill={`url(#roseGrad-${tone})`}
              opacity="0.85"
            />
            <path
              d="M 35 20 C 45 15, 55 25, 48 38 C 42 50, 28 48, 22 40 C 16 32, 25 25, 35 20 Z"
              fill={c.petal3}
              opacity="0.6"
            />
            <circle cx="35" cy="30" r="2" fill={c.gold} opacity="0.9" />
          </g>

          {/* Baby's Breath / Little White Botanical Berries */}
          <g opacity="0.85">
            <circle cx="110" cy="28" r="3.5" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
            <circle cx="125" cy="22" r="2.5" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
            <circle cx="102" cy="16" r="3" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
            <circle cx="24" cy="115" r="3.5" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
            <circle cx="18" cy="130" r="2.5" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
            <circle cx="12" cy="105" r="3" fill="#FFFFFF" stroke={c.petal2} strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * Elegant Center Floral Arch / Wreath for Headers & Hero
 */
export const WatercolorWreath: React.FC<FloralProps> = ({ tone = 'blush', className = '' }) => {
  const c = colorMaps[tone] || colorMaps.blush;

  return (
    <div className={`pointer-events-none select-none flex justify-center items-center ${className}`}>
      <svg
        viewBox="0 0 400 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md h-auto drop-shadow-sm"
      >
        {/* Curved Golden Garland Line */}
        <path
          d="M 40 80 Q 200 20 360 80"
          stroke={c.gold}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.65"
        />

        {/* Left Side Foliage */}
        <g transform="translate(60, 45) scale(0.65)">
          <ellipse cx="40" cy="20" rx="14" ry="24" transform="rotate(-40 40 20)" fill={c.leaf1} opacity="0.6" />
          <ellipse cx="65" cy="15" rx="12" ry="18" transform="rotate(-20 65 15)" fill={c.leaf2} opacity="0.7" />
          <ellipse cx="90" cy="15" rx="10" ry="16" transform="rotate(10 90 15)" fill={c.leaf1} opacity="0.65" />
          <circle cx="30" cy="10" r="3" fill={c.gold} opacity="0.8" />
          <circle cx="50" cy="5" r="2.5" fill="#FFF" stroke={c.petal2} strokeWidth="0.5" />
        </g>

        {/* Right Side Foliage */}
        <g transform="translate(240, 45) scale(0.65) scale(-1, 1)">
          <ellipse cx="-40" cy="20" rx="14" ry="24" transform="rotate(-40 -40 20)" fill={c.leaf1} opacity="0.6" />
          <ellipse cx="-65" cy="15" rx="12" ry="18" transform="rotate(-20 -65 15)" fill={c.leaf2} opacity="0.7" />
          <ellipse cx="-90" cy="15" rx="10" ry="16" transform="rotate(10 -90 15)" fill={c.leaf1} opacity="0.65" />
          <circle cx="-30" cy="10" r="3" fill={c.gold} opacity="0.8" />
          <circle cx="-50" cy="5" r="2.5" fill="#FFF" stroke={c.petal2} strokeWidth="0.5" />
        </g>

        {/* Center Clustered Watercolor Blossom */}
        <g transform="translate(200, 45)">
          <ellipse cx="-15" cy="-8" rx="15" ry="18" fill={c.petal2} opacity="0.8" />
          <ellipse cx="15" cy="-8" rx="15" ry="18" fill={c.petal2} opacity="0.8" />
          <ellipse cx="0" cy="5" rx="16" ry="14" fill={c.petal1} opacity="0.85" />
          <circle cx="0" cy="0" r="12" fill={c.center} opacity="0.9" />
          <circle cx="0" cy="0" r="6" fill={c.petal3} opacity="0.5" />
          <circle cx="0" cy="0" r="2.5" fill={c.gold} />
          <circle cx="-5" cy="-3" r="1.5" fill={c.gold} />
          <circle cx="4" cy="-2" r="1.5" fill={c.gold} />
        </g>
      </svg>
    </div>
  );
};

/**
 * Delicate horizontal watercolor divider between sections
 */
export const WatercolorDivider: React.FC<FloralProps> = ({ tone = 'blush', className = '' }) => {
  const c = colorMaps[tone] || colorMaps.blush;

  return (
    <div className={`flex items-center justify-center my-6 gap-3 ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#DFC186] to-transparent opacity-70" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-85">
        <path
          d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
          fill={c.gold}
        />
        <circle cx="12" cy="10" r="2" fill={c.petal1} opacity="0.8" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#DFC186] to-transparent opacity-70" />
    </div>
  );
};

/**
 * Romantic Falling Flower Petals Canvas Simulation
 */
export const FallingPetals: React.FC<{ tone?: 'blush' | 'sage' | 'dustyBlue' | 'emerald' | 'burgundy' | 'champagne' }> = ({
  tone = 'blush',
}) => {
  const c = colorMaps[tone] || colorMaps.blush;

  // 12 subtle falling petals staggered with CSS animations
  const petals = [
    { id: 1, left: '8%', delay: '0s', duration: '14s', size: 14, rot: 45 },
    { id: 2, left: '22%', delay: '3s', duration: '18s', size: 18, rot: 90 },
    { id: 3, left: '38%', delay: '7s', duration: '15s', size: 12, rot: 135 },
    { id: 4, left: '55%', delay: '1.5s', duration: '20s', size: 16, rot: 30 },
    { id: 5, left: '72%', delay: '5s', duration: '16s', size: 20, rot: 75 },
    { id: 6, left: '88%', delay: '9s', duration: '17s', size: 13, rot: 160 },
    { id: 7, left: '15%', delay: '11s', duration: '19s', size: 15, rot: 210 },
    { id: 8, left: '48%', delay: '13s', duration: '13s', size: 17, rot: 280 },
    { id: 9, left: '82%', delay: '4s', duration: '15s', size: 14, rot: 310 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal-floating"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            style={{ transform: `rotate(${p.rot}deg)` }}
            className="opacity-70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
          >
            <path
              d="M 15 0 C 28 8, 30 25, 15 40 C 0 25, 2 8, 15 0 Z"
              fill={c.petal2}
              opacity="0.8"
            />
            <path
              d="M 15 5 C 22 12, 24 24, 15 35 C 6 24, 8 12, 15 5 Z"
              fill={c.petal1}
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
