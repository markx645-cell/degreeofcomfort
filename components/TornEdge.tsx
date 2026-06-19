// A ripped-paper divider that sits between sections.
// `fill` is the colour of the paper that is "torn" over the section below.
// `position` decides whether it caps the top or bottom of a section.

const PATH =
  'M0,0 L60,8 L130,2 L200,12 L270,3 L340,14 L410,4 L480,15 L560,5 L630,16 L700,6 ' +
  'L770,17 L850,6 L920,16 L990,7 L1060,17 L1130,6 L1200,15 L1270,5 L1340,14 L1410,4 ' +
  'L1480,13 L1550,4 L1600,10 L1600,40 L0,40 Z';

export default function TornEdge({
  fill = '#ffffff',
  position = 'top',
  className = '',
}: {
  fill?: string;
  position?: 'top' | 'bottom';
  className?: string;
}) {
  const flip = position === 'bottom' ? 'rotate-180' : '';
  return (
    <div className={`pointer-events-none relative z-10 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1600 40"
        preserveAspectRatio="none"
        className={`block h-6 w-full sm:h-10 ${flip}`}
      >
        <path d={PATH} fill={fill} />
      </svg>
    </div>
  );
}
