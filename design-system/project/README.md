Ackro Habita es un despacho de arquitectura, construcción y remodelación residencial y comercial en Ciudad Juárez, Chihuahua. La marca se lee como obra: una K naranja hecha de un bloque y dos cuartos de círculo, tipografía geométrica en negrita y fotografía de arquitectura terminada o en proceso. Este sistema se extrajo del sitio construccionesackro.com (kit global de Elementor) y del Instagram @ackro_habita.

## Voz y contenido

- Habla de **tú**, en español de México, cercano y directo: «Transformamos tus ideas en realidad», «Sabemos que es difícil contar con un equipo…», «¡Queremos construir contigo!».
- El nombre se escribe **Ackro Habita** en texto corrido y **ACKRO HABITA** en legales, preguntas frecuentes y el copyright. El logotipo dice sólo ACKRO.
- Las llamadas a la acción son verbos en imperativo y en MAYÚSCULAS: «COTIZA CON NOSOTROS», «CONTACTO».
- Los tres servicios canónicos son **Diseño**, **Construcción** y **Remodelación**; los subtítulos son concretos: «Planos y Renders», «Fachadas, Jardines e Interiores», «Reformas y Ampliaciones», «Residencial y Comercial».
- Los proyectos se nombran con la palabra Casa + número romano («Casa VII», «Casa XIX») o con un nombre propio («Proyecto Terra»).
- Sin emoji en la web. En Instagram sólo aparecen en descripciones, no en las piezas gráficas.

## Color

- `ink` sobre `surface` es la combinación base. Los títulos grandes van en `ink-heading`.
- El naranja es el único color de marca. `accent` para el botón primario, los antetítulos (`eyebrow`) y los subtítulos de tarjeta; `accent-deep` para el link activo del menú y el CTA del hero. No mezcles los dos en un mismo componente.
- `brand-orange` y `pattern-orange` existen sólo para reproducir el logotipo y la cenefa; no los uses en interfaz.
- Alterna secciones entre `surface` y `cream`. Las secciones oscuras usan `ink-heading` (Servicios) o `ink` (footer), con texto en `stone` y títulos en `surface`.
- `star` es exclusivo de las estrellas de calificación.
- Contraste: `accent` y `accent-deep` dan 3.5:1 sobre blanco. Úsalos como texto sólo a 18.66px bold o más (los antetítulos de 18px bold quedan justo debajo, así están en el sitio). El texto blanco de 14px sobre el botón naranja tampoco llega a 4.5:1; es la decisión de la fuente y se conserva.

## Tipografía

- Tres familias de Google Fonts: **Space Grotesk** (display, 700), **DM Sans** (todo el texto, 400/600/700) y **Playfair Display** (serif, 700).
- Títulos de página y sección en Space Grotesk 700: `display-xl` 72px para el hero, `display-md` 44px para secciones. Nunca en mayúsculas.
- Antetítulo: `eyebrow` (DM Sans 18px 700, `accent`) encima de cada título de sección: «Sobre Ackro Habita», «Preguntas Frecuentes», «Clientes de Ackro Habita».
- Cuerpo en `body` (16/24) color `text-body`; metadatos en `small` color `text`.
- Botones y menú en `label`: DM Sans 14px 700 en MAYÚSCULAS, sin tracking extra.
- Playfair Display sólo para nombres propios en testimonios (`serif-name`) y nombres de proyecto. El kit lo asigna a H1–H6, pero el sitio publicado lo reemplaza con Space Grotesk en todos los títulos: sigue al sitio.

## Forma

- Tarjetas, fotos, FAQ y testimonios tienen esquinas rectas (`radius-none`). Lo redondo se reserva para controles: botones en píldora (`radius-pill`, `radius-pill-sm`) y botones circulares de flecha (`radius-round`).
- Sombras muy suaves y difusas, sin desplazamiento: `shadow-card` en preguntas FAQ, `shadow-inset` en testimonios.
- Bordes de 1px: `ink` en botones outline y flechas, `accent` en el CTA, `umber-700` sobre el footer oscuro.
- Contenido a `container` (1140px) de ancho máximo.
- Un trazo naranja de 3–4px en forma de escuadra (línea que baja y dobla) acompaña la foto de «Sobre Ackro Habita»: es el único adorno lineal de la web.

## Patrón e imagen

- La **cenefa** (`assets/Pattern/Cenefa2.png`) repite la K desarmada: bloques verticales con una esquina redonda y cuartos de círculo, en `pattern-orange`. Úsala como franja de cierre entre secciones, nunca detrás de texto.
- Fotografía: arquitectura contemporánea (volúmenes blancos, celosías de madera, concreto, cielo abierto) en renders y fotos de obra; obra en proceso con trabajadores y maquinaria. Sin filtros de color. En Instagram las piezas de obra se pasan a blanco y negro con la K naranja como único color.

## Instagram (@ackro_habita)

- Bio: «Arquitectura • Construcción • Diseño». Portadas de historias destacadas: ícono naranja sobre círculo `graphite` (Preguntas, Reseñas, Proyectos, Servicios, Nosotros).
- Piezas con titular: palabra gigante en sans condensada negra sobre gris claro («ARQUITECTO», partida en sílabas), antetítulo pequeño en naranja y la K en naranja como firma.
- Titular en dos tonos: primera línea en naranja y segunda en `ink`, en mayúsculas condensadas y con un punto final naranja («SOLUCIONES PARA / TUS ESPACIOS.»).
- Nombres de proyecto en serif blanca grande sobre la foto («Proyecto Terra»).
- La sans condensada y la serif de Instagram no están en el sitio y no se identificaron con certeza; no las sustituyas por suposiciones. Pide los archivos de diseño a la marca antes de usarlas.

## Iconografía

- Íconos de servicio (`assets/Icons`): ilustraciones de línea en `accent` sobre fondo oscuro: escuadra y plano (Arquitectura), muro y cuchara (Construcción), casa con martillo (Remodelación). PNG de 64px.
- En controles se usa una flecha simple (→) dentro del botón circular y a la derecha del texto de los botones. Las comillas de testimonio son un glifo de línea en `peach`.
- No hay un set de íconos de interfaz propio; para producto, elige un set de línea de trazo uniforme que acompañe esos dibujos y no lo mezcles con íconos rellenos.

## Aplicación en el ERP

- Interfaz en DM Sans; Space Grotesk sólo para el título de cada pantalla.
- `surface` como fondo de trabajo, `ink` para datos y `text` para etiquetas. `accent` sólo en la acción principal de cada pantalla.
- Tablas y paneles con esquinas rectas; píldoras sólo para botones.
- Los logotipos están en `assets/Logos`: `Ackro_Logo` sobre fondo claro, `Ackro_Logo_NB` sobre fondo oscuro y `Ackro_Ico` como favicon o avatar.
