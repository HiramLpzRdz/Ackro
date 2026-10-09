import * as React from 'react';
import { ArrowButton } from '../acciones/ArrowButton';

export interface ServiceCardProps {
  /** URL de la foto. Se recorta a 4:3 con esquinas rectas. */
  image: string;
  /** Texto alternativo de la foto. */
  imageAlt?: string;
  /** Categoría en `accent`, DM Sans 14px: «Diseño residencial». */
  category: string;
  /** Título en DM Sans 24px 700 `ink`: «Fachadas, Jardines e Interiores». */
  title: string;
  /** Destino del botón de flecha. */
  href?: string;
  /** Acción del botón de flecha cuando no hay `href`. */
  onOpen?: () => void;
  /** Clases extra. */
  className?: string;
}

/**
 * Tarjeta de servicio o proyecto: foto 4:3 de esquinas rectas, categoría naranja, título y botón de flecha alineado a la base.
 * Se usa en rejillas de dos columnas.
 */
export function ServiceCard({ image, imageAlt = '', category, title, href, onOpen, className }: ServiceCardProps) {
  return (
    <article className={['ak-card', className].filter(Boolean).join(' ')}>
      <img className="ak-card__img" src={image} alt={imageAlt} />
      <div className="ak-card__row">
        <div className="ak-card__text">
          <p className="ak-card__cat">{category}</p>
          <h3 className="ak-card__title">{title}</h3>
        </div>
        <ArrowButton label={`Ver ${title}`} href={href} onClick={onOpen ? () => onOpen() : undefined} />
      </div>
    </article>
  );
}
