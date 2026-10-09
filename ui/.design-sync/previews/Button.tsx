import { Button } from '@ackro/ui';

export const Primario = () => <Button arrow>Cotiza con nosotros</Button>;

export const Outline = () => (
  <Button variant="outline" arrow>
    Contacto
  </Button>
);

export const AccionesDeFormulario = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Button type="submit">Guardar obra</Button>
    <Button variant="outline">Cancelar</Button>
  </div>
);

export const Deshabilitado = () => (
  <Button disabled arrow>
    Enviar cotización
  </Button>
);
