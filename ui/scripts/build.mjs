// Build de @ackro/ui.
// Fuente única de tokens: ../design-system/project/tokens.json (extraído de
// construccionesackro.com). Logos: ../brand/logos/*.webp (archivos originales).
import { build } from 'esbuild';
import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const at = (...p) => join(root, ...p);

// 1. tokens.css y type.css desde tokens.json
const tokens = JSON.parse(readFileSync(at('..', 'design-system', 'project', 'tokens.json'), 'utf8'));
const vars = [];
for (const fam of ['color', 'spacing', 'radius', 'shadow']) {
  for (const t of tokens[fam]?.tokens ?? []) {
    const v = typeof t.value === 'string' ? t.value : t.value.light;
    vars.push(`  --${t.name}: ${v};`);
  }
}
for (const [k, v] of Object.entries(tokens.type.families)) vars.push(`  --font-${k}: ${v};`);
writeFileSync(at('src', 'styles', 'tokens.css'),
  `/* Ackro Habita — generado desde design-system/project/tokens.json. No editar a mano. */\n:root {\n${vars.join('\n')}\n}\n`);

const lh = (x) => (typeof x === 'number' ? String(x) : x);
const typeRules = [];
for (const g of tokens.type.groups) {
  for (const s of g.styles) {
    const fam = s.family ?? g.family;
    typeRules.push(`.ak-${s.name} { font-family: var(--font-${fam}); font-size: ${s.fontSize}; line-height: ${lh(s.lineHeight)}; font-weight: ${s.fontWeight}; }`);
  }
}
writeFileSync(at('src', 'styles', 'type.css'),
  `/* Estilos de texto de Ackro Habita — generado desde tokens.json. */\n${typeRules.join('\n')}\n.ak-label { text-transform: uppercase; }\n`);

// 2. Logos originales como data URI
const logo = (f) => `data:image/webp;base64,${readFileSync(at('..', 'brand', 'logos', f)).toString('base64')}`;
writeFileSync(at('src', 'assets', 'logos.generated.ts'),
  `// Generado por scripts/build.mjs desde brand/logos (archivos originales del sitio). No editar.\n` +
  `export const LOGO_COLOR = ${JSON.stringify(logo('Ackro_Logo.webp'))};\n` +
  `export const LOGO_ON_DARK = ${JSON.stringify(logo('Ackro_Logo_NB.webp'))};\n` +
  `export const LOGO_MARK = ${JSON.stringify(logo('Ackro_Ico.webp'))};\n`);

// 3. JS (ESM, React externo)
rmSync(at('dist'), { recursive: true, force: true });
mkdirSync(at('dist'), { recursive: true });
await build({
  entryPoints: [at('src', 'index.ts')],
  outfile: at('dist', 'index.js'),
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  jsx: 'transform',
  external: ['react', 'react-dom'],
  logLevel: 'warning',
});

// 4. Tipos
execFileSync(process.execPath, [at('node_modules', 'typescript', 'bin', 'tsc'), '-p', at('tsconfig.json')], { stdio: 'inherit' });

// 5. CSS: tokens + estilos de texto + componentes
const css = ['tokens.css', 'type.css', 'components.css'].map((f) => readFileSync(at('src', 'styles', f), 'utf8')).join('\n');
writeFileSync(at('dist', 'ackro.css'), css);
copyFileSync(at('src', 'styles', 'tokens.css'), at('dist', 'tokens.css'));
console.log('@ackro/ui: dist/ listo');
