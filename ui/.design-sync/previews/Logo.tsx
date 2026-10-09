import { Logo } from '@ackro/ui';

export const Color = () => <Logo height={48} />;

export const SobreOscuro = () => (
  <div style={{ background: 'var(--ink)', padding: 24, display: 'inline-block' }}>
    <Logo variant="onDark" height={48} />
  </div>
);

export const SoloLaK = () => <Logo variant="mark" height={56} />;
