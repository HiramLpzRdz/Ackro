import { FAQItem } from '@ackro/ui';

export const Cerrada = () => (
  <div style={{ maxWidth: 700 }}>
    <FAQItem question="¿Dónde trabajan?" />
  </div>
);

export const Abierta = () => (
  <div style={{ maxWidth: 700 }}>
    <FAQItem
      open
      question="¿Cómo contacto con ustedes?"
      answer="Llámanos o escríbenos por WhatsApp al +52 6564269238. También puedes enviarnos un correo a ackro.informacion@gmail.com."
    />
  </div>
);
