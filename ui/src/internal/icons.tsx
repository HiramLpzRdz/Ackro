import * as React from 'react';

// Íconos que usa construccionesackro.com, copiados de su sitio:
// Font Awesome Free (fas arrow-right, fas arrow-down, fas star) — CC BY 4.0,
// https://fontawesome.com/license/free
const ARROW_RIGHT = 'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z';
const ARROW_DOWN = 'M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z';
const STAR = 'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z';

export function ArrowRightIcon({ size }: { size: number }) {
  return (
    <svg className="ak-icon" width={size} height={size} viewBox="0 0 448 512" aria-hidden="true" focusable="false">
      <path d={ARROW_RIGHT} fill="currentColor" />
    </svg>
  );
}

export function ArrowDownIcon({ size }: { size: number }) {
  return (
    <svg className="ak-icon" width={size} height={size} viewBox="0 0 448 512" aria-hidden="true" focusable="false">
      <path d={ARROW_DOWN} fill="currentColor" />
    </svg>
  );
}

export function StarIcon({ size }: { size: number }) {
  return (
    <svg className="ak-icon" width={size} height={size} viewBox="0 0 576 512" aria-hidden="true" focusable="false">
      <path d={STAR} fill="currentColor" />
    </svg>
  );
}
