import * as React from 'react';
import { LOGO_COLOR, LOGO_MARK, LOGO_ON_DARK } from '../../assets/logos.generated';

export interface LogoProps {
  /** `color`: K naranja + ACKRO grafito, sobre fondos claros (por defecto). `onDark`: K naranja + ACKRO blanco, sobre `ink` u oscuros. `mark`: sólo la K (favicon, avatar, firma). */
  variant?: 'color' | 'onDark' | 'mark';
  /** Alto en px; el ancho se ajusta solo. Por defecto 40. */
  height?: number;
  /** Clases extra. */
  className?: string;
}

/**
 * Logotipo oficial de Ackro Habita, con los archivos originales del sitio.
 * Nunca lo redibujes, recolorees ni estires; deja aire alrededor al menos del ancho del fuste de la K.
 */
export function Logo({ variant = 'color', height = 40, className }: LogoProps) {
  const src = variant === 'onDark' ? LOGO_ON_DARK : variant === 'mark' ? LOGO_MARK : LOGO_COLOR;
  return <img className={['ak-logo', className].filter(Boolean).join(' ')} src={src} alt="Ackro Habita" style={{ height, width: 'auto' }} />;
}
