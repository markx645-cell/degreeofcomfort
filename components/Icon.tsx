import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'snowflake'
  | 'flame'
  | 'droplet'
  | 'bolt'
  | 'phone'
  | 'calendar'
  | 'star'
  | 'shield'
  | 'clock'
  | 'badge'
  | 'heart'
  | 'arrow'
  | 'check'
  | 'menu'
  | 'close'
  | 'quote'
  | 'play'
  | 'chevron'
  | 'caretDown'
  | 'mail'
  | 'pin'
  | 'house'
  | 'doc';

const paths: Record<IconName, ReactNode> = {
  snowflake: (
    <>
      <path d="M12 2v20M4.2 7l15.6 10M19.8 7L4.2 17" />
      <path d="M12 6l-2.5-2.5M12 6l2.5-2.5M12 18l-2.5 2.5M12 18l2.5 2.5" />
    </>
  ),
  flame: (
    <path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c0-1-.3-1.8-.7-2.5C17 9 18 11.5 18 14a6 6 0 1 1-12 0c0-4 3-6 4-9 .5 2 1.5 2.5 2 3z" />
  ),
  droplet: <path d="M12 2.5S5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.5 12 2.5 12 2.5z" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />,
  shield: <path d="M12 2.5 4 5.5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10v-6z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </>
  ),
  heart: <path d="M12 21s-7-4.6-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 16.4 12 21 12 21z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: <path d="M7 7H4v6h3l-1 4h2l1-4V7zm9 0h-3v6h3l-1 4h2l1-4V7z" />,
  play: <path d="M8 5v14l11-7z" />,
  chevron: <path d="M9 6l6 6-6 6" />,
  caretDown: <path d="M6 9l6 6 6-6z" fill="currentColor" stroke="none" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  house: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M12 17c-1.3-1-2.4-1.8-2.4-3a1.3 1.3 0 0 1 2.4-.7 1.3 1.3 0 0 1 2.4.7c0 1.2-1.1 2-2.4 3z" />
    </>
  ),
  doc: (
    <>
      <path d="M6 2h7l5 5v15H6z" />
      <path d="M13 2v5h5" />
    </>
  ),
};

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
