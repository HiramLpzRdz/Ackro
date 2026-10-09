import * as React from 'react';
import { ArrowDownIcon, ArrowRightIcon } from '../../internal/icons';

export interface FAQItemProps {
  /** Pregunta, tal como la haría el cliente: «¿Cómo contacto con ustedes?». */
  question: string;
  /** Respuesta (DM Sans 14px, color `text`), visible cuando `open` es true. */
  answer?: React.ReactNode;
  /** Muestra la respuesta: la flecha gira hacia abajo y la respuesta aparece sobre `mist`. */
  open?: boolean;
  /** Se llama al pulsar la pregunta. */
  onToggle?: () => void;
  /** Clases extra. */
  className?: string;
}

/**
 * Una pregunta del acordeón: fila blanca con la pregunta subrayada (DM Sans 24px 700) y flecha de 24px.
 * Abierta, la respuesta aparece debajo sobre `mist`. Para una lista completa usa `FAQList`.
 */
export function FAQItem({ question, answer, open = false, onToggle, className }: FAQItemProps) {
  return (
    <div className={['ak-faq__item', open ? 'ak-faq__item--open' : '', className].filter(Boolean).join(' ')}>
      <button type="button" className="ak-faq__q" aria-expanded={open} onClick={onToggle}>
        <span className="ak-faq__qtext">{question}</span>
        {open ? <ArrowDownIcon size={24} /> : <ArrowRightIcon size={24} />}
      </button>
      {open && answer ? <div className="ak-faq__a">{answer}</div> : null}
    </div>
  );
}
