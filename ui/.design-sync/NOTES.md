# Notas de design-sync — @ackro/ui

## Estado (2026-10-09)

- La conversión y la verificación locales están completas: 10 componentes y 24 variantes, todas calificadas `good`, con el render check limpio.
- **No se ha subido nada.** La sesión del 2026-10-09 corría con la cuenta de claude.ai de Trybe (hlopez@trybe.fi, cuyo único proyecto es «trybe.fi Design System»). Hiram decidió no crear el proyecto de Ackro en la org de Trybe. La subida queda pendiente para una sesión con la cuenta correcta.
- En `config.json` aún no hay `projectId`. La próxima sesión debe crear el proyecto «Ackro Habita» (nombre confirmado por Hiram) con `DesignSync(create_project)` desde la cuenta correcta, anotar el `projectId` y seguir la ruta incremental del skill (proyecto vacío): `finalize_plan` con `localDir: "./ds-bundle"`, primera carga con los archivos base y los 10 componentes, cierre y `_ds_sync.json` al final.
- Antes de subir, comprobar con `DesignSync(list_projects)` que la cuenta **no** es la de Trybe.

## Cómo reconstruir

Desde `ui/`:

1. `npm install --cache "$TMPDIR/npm-cache"`. El caché por defecto en `~/.npm` falla dentro del sandbox: sólo se puede escribir en `~/.npm/_logs`.
2. `npm run build`. Regenera `src/styles/tokens.css` y `type.css` desde `../design-system/project/tokens.json`, los logos desde `../brand/logos/*.webp`, y deja todo en `dist/`.
3. Volver a preparar los scripts del skill en `.ds-sync/` y `npm i esbuild ts-morph @types/react` ahí.
4. `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright@1.62.1` en `.ds-sync/`. Esa versión fija Chromium 1234, que ya está en `~/Library/Caches/ms-playwright`.
5. `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --entry ./dist/index.js --out ./ds-bundle`, sin `--remote` mientras no haya proyecto.
6. Validate y capture levantan un servidor en 127.0.0.1: dentro del sandbox fallan con `listen EPERM`. Hay que correrlos fuera del sandbox o activar `sandbox.network.allowLocalBinding`.

## Decisiones de marca que ya están en el código

- 1A: el único naranja de interfaz es `--accent` (#F94A24); `--brand-orange` (#FC4B00) sólo vive dentro del logotipo y `--accent-deep` (#EA5B1C) sólo en el sitio web.
- 2A: el botón primario usa `--accent-strong` (#D83B18). Es `accent` oscurecido en OKLCH con el mismo tono 33.5° y la misma saturación relativa (93.5 %); con blanco da 4.61:1.
- 3A: el ERP va sobre `--surface`; `--cream` es sólo para marketing.

## Origen de cada cosa

- Tokens: kit global de Elementor de construccionesackro.com (`post-19.css`) más estilos computados, medidos a 1440 px.
- Íconos: las flechas y la estrella son los SVG de Font Awesome Free que usa el sitio (CC BY 4.0, atribución en `src/internal/icons.tsx`).
- Comillas del testimonio: el sitio usa el glifo `jki-quote-light` de una fuente de íconos; aquí es el carácter ” en Playfair Display color `--peach`. Es un sustituto.
- Añadidos que el sitio no tiene: el foco visible (contorno de 2 px en `--ink`), el estado `disabled` del botón (opacidad 0.5) y la variante `tone="dark"` de ArrowButton, tomada de los botones sociales del footer (borde `--umber-700`).
- El círculo de flecha mide 48 px; en el sitio mide 49×51 por un padding asimétrico de Elementor.
- En ServiceCard, la flecha queda al extremo derecho de la tarjeta. En el sitio la fila de texto es más angosta que la foto y la flecha queda unos 139 px antes del borde.

## Avisos de render conocidos

- `[GRID_OVERFLOW]` en Button y SectionHeading: se resolvió con `cardMode: column`.
- NavBar y Footer necesitan un viewport ancho (`1320x380` y `1240x440`), porque en una tarjeta angosta el menú se recortaba.
- ArrowButton `FondoOscuro`: el borde `--umber-700` sobre `--ink` se ve tenue, igual que en el sitio; la flecha blanca sí se lee bien.

## Riesgos al re-sincronizar

- `tokens.json` vive fuera del paquete (`../design-system/project/`). Si cambia, hay que correr `npm run build` antes del driver o el bundle sale con tokens viejos.
- Las fuentes vienen de `@fontsource` 5.1.0 (sólo latin) en `node_modules`. Sin `npm install`, el build pierde `fonts/`.
- Las fotos de las vistas previas (`preview-assets/`) son copias reducidas de las del sitio; si el sitio cambia sus fotos, no se actualizan solas.
- Los valores por defecto de `Footer` (teléfono, correo y dirección) están escritos en el código; hay que revisarlos si Ackro cambia sus datos de contacto.
