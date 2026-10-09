import * as React from 'react';
import { ArrowRightIcon } from '../../internal/icons';

export interface ButtonProps {
  /** Texto del botón: un verbo en imperativo («Cotiza con nosotros», «Guardar obra»). Se muestra en MAYÚSCULAS. */
  children: React.ReactNode;
  /** `primary`: relleno `accent-strong` (#D83B18) con texto blanco; una por pantalla. `outline`: fondo blanco, borde y texto `ink`; acciones secundarias. */
  variant?: 'primary' | 'outline';
  /** Muestra la flecha → de 12px a la derecha del texto. */
  arrow?: boolean;
  /** Con `href` se renderiza como enlace `<a>`; sin él, como `<button>`. */
  href?: string;
  /** Tipo nativo del `<button>`. */
  type?: 'button' | 'submit' | 'reset';
  /** Deshabilita el botón (opacidad 0.5). */
  disabled?: boolean;
  /** Acción al hacer clic. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Clases extra. */
  className?: string;
}

/**
 * Botón en píldora de Ackro Habita: DM Sans 14px 700 en MAYÚSCULAS, con flecha opcional.
 * `primary` es la acción principal de la pantalla (sólo una); `outline` para todo lo secundario.
 * El naranja del botón es `accent-strong` (#D83B18), no `accent`: así el texto blanco llega a 4.61:1.
 */
export function Button({ children, variant = 'primary', arrow = false, href, type = 'button', disabled, onClick, className }: ButtonProps) {
  const cls = ['ak-btn', variant === 'outline' ? 'ak-btn--outline' : 'ak-btn--primary', className].filter(Boolean).join(' ');
  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRightIcon size={12} /> : null}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={disabled ? undefined : href} aria-disabled={disabled || undefined} onClick={disabled ? undefined : onClick}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} type={type} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
