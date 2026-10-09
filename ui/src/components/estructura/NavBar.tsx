import * as React from 'react';
import { Button } from '../acciones/Button';
import { Logo } from '../marca/Logo';

export interface NavBarItem {
  /** Texto del enlace; se muestra en MAYÚSCULAS. */
  label: string;
  /** Destino. */
  href?: string;
  /** Página actual: el enlace pasa a `accent`. */
  active?: boolean;
}

export interface NavBarProps {
  /** Enlaces del menú. Por defecto, el menú real del sitio: Inicio, Arquitecto, Construcción, Remodelaciones, Nosotros. */
  items?: NavBarItem[];
  /** Botón outline a la derecha. Por defecto «CONTACTO»; `null` lo quita. */
  cta?: { label: string; href?: string } | null;
  /** Clases extra. */
  className?: string;
}

const DEFAULT_ITEMS: NavBarItem[] = [
  { label: 'Inicio', active: true },
  { label: 'Arquitecto' },
  { label: 'Construcción' },
  { label: 'Remodelaciones' },
  { label: 'Nosotros' },
];

/**
 * Barra superior de Ackro Habita: logotipo a la izquierda, menú en DM Sans 14px 700 MAYÚSCULAS y botón outline a la derecha.
 * Fondo blanco con línea inferior `mist`.
 */
export function NavBar({ items = DEFAULT_ITEMS, cta = { label: 'Contacto' }, className }: NavBarProps) {
  return (
    <header className={['ak-nav', className].filter(Boolean).join(' ')}>
      <Logo height={40} />
      <nav aria-label="Principal">
        <ul className="ak-nav__menu">
          {items.map((it) => (
            <li key={it.label}>
              <a className="ak-nav__link" href={it.href ?? '#'} aria-current={it.active ? 'page' : undefined}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {cta ? (
        <Button variant="outline" arrow href={cta.href ?? '#'}>
          {cta.label}
        </Button>
      ) : (
        <span />
      )}
    </header>
  );
}
