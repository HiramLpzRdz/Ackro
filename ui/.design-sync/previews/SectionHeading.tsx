import { SectionHeading } from '@ackro/ui';

export const Hero = () => (
  <SectionHeading
    as="h1"
    size="xl"
    title={
      <>
        Arquitectura
        <br />& Construcción
        <br />
        en Ciudad Juárez
      </>
    }
  />
);

export const Seccion = () => (
  <SectionHeading
    eyebrow="Clientes de Ackro Habita"
    title={
      <>
        Sus Opiniones:
        <br />
        Tu mejor Garantía
      </>
    }
  />
);

export const Centrado = () => (
  <SectionHeading align="center" eyebrow="Preguntas Frecuentes" title="Dudas comunes sobre Ackro Habita" />
);

export const SobreOscuro = () => (
  <div style={{ background: 'var(--ink-heading)', padding: 32 }}>
    <SectionHeading onDark eyebrow="Servicios de Ackro Habita" title="Diseño, Construcción y Remodelación" />
  </div>
);

export const TituloDePantalla = () => <SectionHeading as="h1" size="lg" eyebrow="Construcción" title="Obras en proceso" />;
