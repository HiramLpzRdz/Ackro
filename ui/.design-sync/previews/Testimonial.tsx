import { Testimonial } from '@ackro/ui';
import carlos from '../preview-assets/carlos.jpg';
import sofia from '../preview-assets/sofia.jpg';

export const Cliente = () => (
  <div style={{ maxWidth: 340 }}>
    <Testimonial
      quote="Gracias a Ackro Habita, mi casa quedó perfecta. Cumplieron con lo que prometieron, gran servicio."
      name="Carlos García"
      role="Comerciante"
      photo={carlos}
    />
  </div>
);

export const Clienta = () => (
  <div style={{ maxWidth: 340 }}>
    <Testimonial
      quote="El equipo de Ackro Habita hizo un gran trabajo con mi jardín. Quedé completamente satisfecha."
      name="Sofía Hernández"
      role="Profesora"
      photo={sofia}
    />
  </div>
);
