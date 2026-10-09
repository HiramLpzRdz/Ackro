import * as React from 'react';
import { FAQItem } from './FAQItem';

export interface FAQListEntry {
  /** Pregunta. */
  question: string;
  /** Respuesta. */
  answer: React.ReactNode;
}

export interface FAQListProps {
  /** Preguntas y respuestas, en orden. */
  items: FAQListEntry[];
  /** Índice de la pregunta abierta al inicio; `null` para todas cerradas (por defecto). */
  defaultOpen?: number | null;
  /** Clases extra. */
  className?: string;
}

/**
 * Acordeón de preguntas frecuentes de Ackro Habita: `FAQItem` apilados con 15px entre filas; sólo una abierta a la vez.
 */
export function FAQList({ items, defaultOpen = null, className }: FAQListProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);
  return (
    <div className={['ak-faq', className].filter(Boolean).join(' ')}>
      {items.map((it, i) => (
        <FAQItem
          key={i}
          question={it.question}
          answer={it.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
