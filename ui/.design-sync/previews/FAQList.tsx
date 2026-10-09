import { FAQList } from '@ackro/ui';

const PREGUNTAS = [
  {
    question: '¿En qué se diferencia ACKRO HABITA de otras constructoras?',
    answer: 'Ofrecemos diseños únicos, renders, recorridos virtuales y promociones si contratas la construcción con nosotros.',
  },
  {
    question: '¿Cómo contacto con ustedes?',
    answer: 'Llámanos o escríbenos por WhatsApp al +52 6564269238. También puedes enviarnos un correo a ackro.informacion@gmail.com.',
  },
  {
    question: '¿Qué promociones tienen?',
    answer: 'Si construyes con nosotros, el diseño o el proyecto ejecutivo van por nuestra cuenta.',
  },
  {
    question: '¿Dónde trabajan?',
    answer: 'Principalmente en Ciudad Juárez, pero si tienes proyectos en otra ubicación, consúltanos.',
  },
];

export const PreguntasFrecuentes = () => (
  <div style={{ background: 'var(--cream)', padding: 32 }}>
    <div style={{ maxWidth: 820, margin: '0 auto' }}>
      <FAQList items={PREGUNTAS} defaultOpen={1} />
    </div>
  </div>
);
