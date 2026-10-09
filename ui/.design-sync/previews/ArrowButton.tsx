import { ArrowButton } from '@ackro/ui';

export const FondoClaro = () => <ArrowButton label="Ver Planos y Renders" />;

export const FondoOscuro = () => (
  <div style={{ background: 'var(--ink)', padding: 24, display: 'inline-flex' }}>
    <ArrowButton tone="dark" label="Ver Diseño" />
  </div>
);
