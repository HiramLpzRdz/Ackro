import { NavBar } from '@ackro/ui';

export const SitioWeb = () => <NavBar />;

export const SeccionActiva = () => (
  <NavBar
    items={[
      { label: 'Inicio' },
      { label: 'Arquitecto' },
      { label: 'Construcción', active: true },
      { label: 'Remodelaciones' },
      { label: 'Nosotros' },
    ]}
  />
);
