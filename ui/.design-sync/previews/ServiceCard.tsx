import { ServiceCard } from '@ackro/ui';
import fachadas from '../preview-assets/fachadas.jpg';
import planos from '../preview-assets/planos-renders.jpg';

export const Proyectos = () => (
  <div style={{ background: 'var(--cream)', padding: 32, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 32, maxWidth: 900 }}>
    <ServiceCard image={fachadas} imageAlt="Fachada de concreto con volado de madera" category="Diseño residencial" title="Fachadas, Jardines e Interiores" href="#" />
    <ServiceCard image={planos} imageAlt="Render de casa con celosía negra" category="Anteproyectos y Recorridos Virtuales" title="Planos y Renders" href="#" />
  </div>
);

export const Sola = () => (
  <div style={{ maxWidth: 420 }}>
    <ServiceCard image={planos} imageAlt="Render de casa con celosía negra" category="Construcción total" title="Residencial y Comercial" href="#" />
  </div>
);
