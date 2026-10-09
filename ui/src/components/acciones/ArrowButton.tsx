import * as React from 'react';
import { ArrowRightIcon } from '../../internal/icons';

export interface ArrowButtonProps {
  /** Texto accesible que dice a dónde lleva («Ver Planos y Renders»). Obligatorio: el botón no tiene texto visible. */
  label: string;
  /** `light` sobre fondos claros (borde y flecha `ink`); `dark` sobre fondos oscuros (borde `umber-700`, flecha blanca). */
  tone?: 'light' | 'dark';
  /** Con `href` se renderiza como enlace. */
  href?: string;
  /** Acción al hacer clic. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Clases extra. */
  className?: string;
}

/**
 * Botón circular de 48px con la flecha → de 15px y borde de 1px.
 * Abre el detalle de una tarjeta (ServiceCard) o de un elemento de lista. Siempre lleva `label`.
 */
export function ArrowButton({ label, tone = 'light', href, onClick, className }: ArrowButtonProps) {
  const cls = ['ak-arrow', tone === 'dark' ? 'ak-arrow--dark' : '', className].filter(Boolean).join(' ');
  if (href) {
    return (
      <a className={cls} href={href} aria-label={label} onClick={onClick}>
        <ArrowRightIcon size={15} />
      </a>
    );
  }
  return (
    <button className={cls} type="button" aria-label={label} onClick={onClick}>
      <ArrowRightIcon size={15} />
    </button>
  );
}
