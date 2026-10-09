import * as React from 'react';

export interface SectionHeadingProps {
  /** Antetítulo en naranja (`accent`, DM Sans 18px 700) que nombra la sección con la marca: «Clientes de Ackro Habita». Sin mayúsculas. */
  eyebrow?: string;
  /** Título en Space Grotesk 700, color `ink-heading`. Nunca en mayúsculas. Usa `<br />` para cortar en dos líneas como el sitio. */
  title: React.ReactNode;
  /** `xl` 72px (hero), `lg` 48px (título de página), `md` 44px (título de sección, por defecto). */
  size?: 'xl' | 'lg' | 'md';
  /** Etiqueta HTML del título. Por defecto `h2`. */
  as?: 'h1' | 'h2' | 'h3';
  /** Alineación del bloque. */
  align?: 'left' | 'center';
  /** Sobre fondos oscuros (`ink-heading`, `ink`): el título pasa a blanco; el antetítulo sigue en `accent`. */
  onDark?: boolean;
  /** Clases extra. */
  className?: string;
}

/**
 * Encabezado de sección de Ackro Habita: antetítulo naranja + título grande en Space Grotesk.
 * Abre cada bloque de contenido. En el ERP usa `size="lg"` para el título de cada pantalla.
 */
export function SectionHeading({ eyebrow, title, size = 'md', as = 'h2', align = 'left', onDark = false, className }: SectionHeadingProps) {
  const Tag = as;
  const cls = ['ak-heading', `ak-heading--${size}`, align === 'center' ? 'ak-heading--center' : '', onDark ? 'ak-heading--dark' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls}>
      {eyebrow ? <p className="ak-heading__eyebrow">{eyebrow}</p> : null}
      <Tag className="ak-heading__title">{title}</Tag>
    </div>
  );
}
