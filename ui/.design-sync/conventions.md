# Ackro Habita — cómo diseñar con este sistema

Ackro Habita es un despacho de arquitectura, construcción y remodelación en Ciudad Juárez. Todo el texto de interfaz va en español de México, hablándole al cliente de tú. Los botones y el menú van en MAYÚSCULAS («GUARDAR OBRA», «COTIZA CON NOSOTROS»). Las pantallas del ERP son herramientas de trabajo: sobrias, claras y con datos reales de obra.

## Arranque

- No hay provider. Los componentes son React simple: `const { Button, SectionHeading, Logo } = window.AckroUI;`.
- `styles.css` carga los tokens, las fuentes (DM Sans 400/600/700, Space Grotesk 700, Playfair Display 700) y los estilos de los componentes. Pon `font-family: var(--font-sans)` en la raíz de cada pantalla.
- Antes de diseñar, lee `styles.css` (tokens en `:root`) y el `.prompt.md` de cada componente.

## Color: usa sólo estos tokens (`var(--nombre)`)

- Fondo de trabajo: `--surface` (blanco). `--cream` y `--cream-light` son sólo para marketing; nunca en el ERP.
- Texto y datos: `--ink`. Títulos grandes: `--ink-heading`. Etiquetas y metadatos: `--text`. Párrafos largos: `--text-body`.
- Naranja de interfaz: `--accent` (antetítulos, enlace activo, acentos y bordes). El botón primario usa `--accent-strong` (#D83B18) para que el texto blanco pase 4.5:1. `--accent-deep` y `--brand-orange` no se usan en interfaz.
- Superficies oscuras: `--ink` o `--ink-heading`, con texto en `--stone` y títulos en `--surface`. Separadores claros: `--mist`. Estrellas: `--star`.
- No inventes colores. Está prohibido añadir otro acento (ámbar, verde, azul) o tonos pastel.

## Tipografía: clases `ak-*` (generadas desde los tokens)

- `ak-display-xl` (72px), `ak-display-lg` (48px) y `ak-display-md` (44px): Space Grotesk 700, sólo para títulos y nunca en mayúsculas. En el ERP basta `ak-display-lg` para el título de cada pantalla.
- `ak-text-lg` (20px), `ak-body` (16/24), `ak-small` (14/21) y `ak-caption` (12px), todas en DM Sans.
- `ak-eyebrow` (18px 700, para usar con `--accent`), `ak-card-title` (24px 700) y `ak-label` (14px 700 en mayúsculas).
- Playfair Display (`ak-serif-name`) sólo para nombres de personas o proyectos.

## Forma

- Tablas, paneles, tarjetas y fotos con esquinas rectas (`--radius-none`). Lo redondo es sólo para controles: botones (`--radius-pill`, `--radius-pill-sm`) y círculos (`--radius-round`, `--radius-circle`).
- Sombras sólo `--shadow-card`, `--shadow-soft` o `--shadow-inset`. Bordes de 1px en `--ink` o `--mist`.
- Contenido a `max-width: var(--container)` (1140px).
- Tablas: encabezados en `ak-label` color `--text`, datos en `--ink` con `font-variant-numeric: tabular-nums` y filas separadas por 1px `--mist`.

## Prohibido en las pantallas

Tarjetas KPI o cajitas de etiqueta + cifra; texto gris en datos; franjas de color en el borde de tarjetas; marcos dentro de marcos; pastel; colores nuevos.

## Componentes

`Button` (primary/outline, uno primario por pantalla), `ArrowButton`, `SectionHeading`, `ServiceCard`, `Testimonial`, `FAQItem`, `FAQList`, `NavBar` y `Footer` (los dos del sitio web), y `Logo` (color/onDark/mark). Usa el logotipo siempre con `<Logo />`; nunca lo redibujes.

```jsx
const { SectionHeading, Button, Logo } = window.AckroUI;

function ObrasEnProceso() {
  return (
    <div style={{ background: 'var(--surface)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', borderBottom: '1px solid var(--mist)' }}>
        <Logo height={32} />
        <Button variant="outline">Exportar</Button>
      </header>
      <main style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '40px 32px', display: 'grid', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <SectionHeading as="h1" size="lg" eyebrow="Construcción" title="Obras en proceso" />
          <Button arrow>Nueva obra</Button>
        </div>
      </main>
    </div>
  );
}
```
