type IconProps = { className?: string };

/** Tesoura de cabeleireiro — usada como divisor e no ícone de "Corte". */
export function ScissorsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <line x1="8.2" y1="7.4" x2="20" y2="19" />
      <line x1="8.2" y1="16.6" x2="20" y2="5" />
      <line x1="8.2" y1="12" x2="11.5" y2="12" />
    </svg>
  );
}

/** Secador — usado no ícone de "Escova". */
export function DryerIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 8h6.5a4 4 0 0 1 0 8H14v4" />
      <path d="M9 8a4.5 4.5 0 1 0 0 8h1V8Z" />
      <path d="M19 9.5v3" />
      <path d="M21 10.2v1.6" />
    </svg>
  );
}

/** Frasco de coloração — usado no ícone de "Química em geral". */
export function FlaskIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 3h4" />
      <path d="M10 3v6L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

/** Grampo de penteado — usado no ícone de "Penteados". */
export function UpdoPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3c-3 3-5 6-5 9a5 5 0 0 0 10 0c0-3-2-6-5-9Z" />
      <circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 12h6" />
    </svg>
  );
}

/** Mecha entrelaçada — usada no ícone de "Mega Hair". */
export function StrandIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 3c3 3 -2 6 1 9s6-2 8 1" />
      <path d="M8 3c3 3 -2 6 1 9s6-2 8 1" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.52 3.62 1.42 5.12L2 22l5.13-1.51a9.83 9.83 0 0 0 4.9 1.32h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 1.8c4.48 0 8.11 3.63 8.11 8.11s-3.63 8.11-8.11 8.11a8.05 8.05 0 0 1-4.1-1.12l-.29-.17-3.02.89.9-2.94-.19-.3a8.03 8.03 0 0 1-1.23-4.28c0-4.48 3.63-8.3 8.13-8.3Zm4.48 10.32c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.65.3-.22.24-.87.85-.87 2.06 0 1.22.89 2.4 1.02 2.56.12.16 1.63 2.5 3.98 3.4 2.34.9 2.34.6 2.76.56.42-.04 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SunIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
    </svg>
  );
}

export function MoonIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export const serviceIcons = {
  tesoura: ScissorsIcon,
  secador: DryerIcon,
  flaconete: FlaskIcon,
  penteado: UpdoPinIcon,
  megahair: StrandIcon,
};
