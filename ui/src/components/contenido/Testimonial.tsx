import * as React from 'react';
import { StarIcon } from '../../internal/icons';

export interface TestimonialProps {
  /** Cita del cliente, en primera persona y concreta: «Gracias a Ackro Habita, mi casa quedó perfecta.» */
  quote: string;
  /** Nombre del cliente (Playfair Display 16px 700). */
  name: string;
  /** Ocupación o cargo (DM Sans 14px, color `text`). */
  role?: string;
  /** URL de la foto; se recorta en círculo de 55px. */
  photo?: string;
  /** Calificación de 1 a 5 estrellas (`star`). Por defecto 5. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Clases extra. */
  className?: string;
}

/**
 * Testimonio de cliente: tarjeta blanca de esquinas rectas con sombra interior suave (`shadow-inset`),
 * estrellas amarillas, cita, foto circular, nombre en Playfair Display y comillas en `peach`.
 */
export function Testimonial({ quote, name, role, photo, rating = 5, className }: TestimonialProps) {
  return (
    <figure className={['ak-testi', className].filter(Boolean).join(' ')}>
      <div className="ak-testi__stars" aria-label={`${rating} de 5 estrellas`}>
        {Array.from({ length: rating }, (_, i) => (
          <StarIcon key={i} size={13} />
        ))}
      </div>
      <blockquote className="ak-testi__quote">{quote}</blockquote>
      <figcaption className="ak-testi__who">
        {photo ? <img className="ak-testi__photo" src={photo} alt="" /> : null}
        <span className="ak-testi__id">
          <span className="ak-testi__name">{name}</span>
          {role ? <span className="ak-testi__role">{role}</span> : null}
        </span>
        <span className="ak-testi__mark" aria-hidden="true">{'”'}</span>
      </figcaption>
    </figure>
  );
}
