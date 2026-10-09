import * as React from 'react';
import { Logo } from '../marca/Logo';

export interface FooterContact {
  /** Teléfono. */
  phone?: string;
  /** Correo. */
  email?: string;
  /** Dirección. */
  address?: string;
}

export interface FooterProps {
  /** Texto bajo el logotipo. Por defecto, el del sitio. */
  about?: string;
  /** Enlaces de la columna central (en MAYÚSCULAS, con viñeta › en `accent`). Por defecto, el menú del sitio. */
  links?: string[];
  /** Datos de contacto. Por defecto, los reales de Ackro Habita. */
  contact?: FooterContact;
  /** Año del copyright. Por defecto el actual. */
  year?: number;
  /** Clases extra. */
  className?: string;
}

const DEFAULT_ABOUT = 'Nos apasiona transformar ideas en espacios únicos, ofreciendo soluciones personalizadas para hogares y negocios.';
const DEFAULT_LINKS = ['Inicio', 'Arquitecto', 'Construcción', 'Remodelaciones', 'Sobre nosotros', 'Contacto'];
const DEFAULT_CONTACT: FooterContact = {
  phone: '(+52) 656.426.9238',
  email: 'ackro.informacion@gmail.com',
  address: 'C. Melquiades Alanís 5019, Monumental, 32310 Juárez, Chih.',
};

/**
 * Pie de página de Ackro Habita sobre `ink`: logotipo claro con texto, menú con viñetas naranjas, contacto con título en Space Grotesk
 * y línea legal con ACKRO HABITA en `accent`. Texto en `stone`.
 */
export function Footer({ about = DEFAULT_ABOUT, links = DEFAULT_LINKS, contact = DEFAULT_CONTACT, year = new Date().getFullYear(), className }: FooterProps) {
  return (
    <footer className={['ak-foot', className].filter(Boolean).join(' ')}>
      <div className="ak-foot__cols">
        <div className="ak-foot__about">
          <Logo variant="onDark" height={72} />
          <p>{about}</p>
        </div>
        <ul className="ak-foot__menu">
          {links.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <div className="ak-foot__contact">
          <h4 className="ak-foot__title">Contacta con Ackro Habita</h4>
          <ul>
            {contact.phone ? <li>{contact.phone}</li> : null}
            {contact.email ? <li>{contact.email}</li> : null}
            {contact.address ? <li>{contact.address}</li> : null}
          </ul>
        </div>
      </div>
      <p className="ak-foot__legal">
        Copyright ©{year} <b>ACKRO HABITA</b> – Todos los Derechos Reservados.
      </p>
    </footer>
  );
}
