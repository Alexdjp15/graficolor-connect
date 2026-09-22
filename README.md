# Graficolor Connect

Quiero rediseñar completamente el E-Card digital de Graficolor.

IMPORTANTE:
No copies literalmente el diseño de referencia que te proporcionaré.
Úsalo únicamente como inspiración visual y genera tu propia propuesta
original.

El resultado debe mantener la esencia visual de Graficolor y sentirse
como una extensión de su página web corporativa, pero debe ser un
producto comercializable y fácilmente replicable para crear E-Cards
similares para otros clientes.

==================================================
1. OBJETIVO
==================================================

Crear un E-Card digital profesional, moderno, interactivo y responsive
para Graficolor Litografía y Diseño.

Debe funcionar principalmente en dispositivos móviles, pero adaptarse
correctamente a tablet y escritorio.

El E-Card debe funcionar como una tarjeta de presentación digital,
permitiendo al visitante:

- contactar por WhatsApp;
- llamar;
- enviar correo;
- visitar el sitio web;
- visitar Instagram;
- consultar ubicación;
- consultar servicios;
- consultar portafolio;
- solicitar una cotización;
- guardar los datos de contacto;
- compartir el E-Card.

La experiencia debe sentirse como una pequeña landing page interactiva,
no como una simple imagen digital.

==================================================
2. IDENTIDAD VISUAL
==================================================

La referencia visual actual utiliza:

- fondo oscuro;
- azul marino;
- degradados;
- colores vivos asociados a la identidad de Graficolor;
- cyan;
- magenta;
- amarillo;
- elementos geométricos;
- tarjetas con bordes redondeados;
- iconografía moderna;
- botones grandes;
- composición vertical orientada a móvil.

Mantén esta esencia, pero crea una versión visual propia.

La estética debe estar relacionada con la página web de Graficolor.

Debe transmitir:

- impresión;
- diseño;
- tecnología;
- creatividad;
- profesionalismo;
- modernidad.

Evita que parezca una plantilla genérica de tarjeta digital.

==================================================
3. MODO OSCURO Y MODO CLARO
==================================================

Implementa un sistema real de:

🌙 Modo oscuro
☀️ Modo claro

Debe existir un botón visible para cambiar entre ambos modos.

El cambio debe ser:

- instantáneo;
- suave;
- sin recargar la página;
- persistente mediante localStorage;
- accesible.

El modo oscuro debe mantener la estética tecnológica y los degradados
de Graficolor.

El modo claro debe conservar la identidad visual, pero utilizar fondos
claros y suficiente contraste para facilitar la lectura.

No hagas simplemente una inversión de colores.

Diseña ambos temas conscientemente.

==================================================
4. ESTRUCTURA DEL E-CARD
==================================================

Construye la interfaz con estas secciones:

------------------------------------------
HEADER / HERO
------------------------------------------

Mostrar:

Logo de Graficolor.

Graficolor

LITOGRAFÍA Y DISEÑO

Frase:

"Imprimimos tus ideas."

o una variante visualmente coherente con la identidad de Graficolor.

Agregar un elemento visual distintivo inspirado en los degradados y
geometría de la página web.

No sobrecargar.

------------------------------------------
CTA PRINCIPAL
------------------------------------------

Crear un botón principal grande:

"Escríbenos por WhatsApp"

Debe ser claramente el CTA principal.

Debe utilizar el enlace real de WhatsApp configurado en los datos
del E-Card.

------------------------------------------
ACCIONES RÁPIDAS
------------------------------------------

Crear botones/cards para:

- WhatsApp
- Llamar
- Correo
- Sitio web
- Instagram
- Ubicación
- Portafolio
- Solicitar cotización
- Compartir
- Guardar contacto

Los botones deben utilizar iconos reconocibles.

No depender exclusivamente del texto para identificar una acción.

------------------------------------------
SERVICIOS
------------------------------------------

Crear una sección:

"NUESTROS SERVICIOS"

Mostrar servicios como tarjetas compactas.

Los servicios deben ser:

- Impresión offset y digital
- Diseño gráfico
- Material publicitario
- Tarjetas virtuales
- Empaques y etiquetas
- Ropa y promocionales

IMPORTANTE:

No quiero que los servicios estén escritos directamente dentro de
múltiples componentes.

Crear una estructura de datos para que posteriormente sea sencillo
agregar, eliminar o modificar servicios.

Cada servicio debe poder tener:

- id
- nombre
- descripción corta
- icono
- enlace opcional

------------------------------------------
PORTAFOLIO
------------------------------------------

Agregar una sección o acción para acceder al portafolio.

Debe existir un botón:

"Ver portafolio"

Debe enlazar al portafolio oficial de Graficolor.

El portafolio debe poder cambiarse posteriormente desde una única
configuración.

------------------------------------------
CONTACTO
------------------------------------------

Mostrar:

Graficolor SM

Santa Marta, Magdalena - Colombia

Teléfono:
+57 300 837 4808

Correo:
gerencia@graficolorsm.com

Sitio web:
https://www.graficolorsm.com

Mantener estos datos centralizados en una configuración.

NO repetirlos manualmente en diferentes componentes.

------------------------------------------
FOOTER
------------------------------------------

Mostrar:

Graficolor

"LITOGRAFÍA Y DISEÑO"

Santa Marta, Colombia

y una pequeña línea visual coherente con la identidad.

==================================================
5. INTERACTIVIDAD
==================================================

Quiero una experiencia realmente interactiva.

Implementar:

- animaciones suaves al cargar;
- hover en desktop;
- feedback visual al presionar botones;
- transición entre modo claro y oscuro;
- microanimaciones discretas;
- navegación suave;
- botón compartir usando Web Share API cuando esté disponible;
- fallback para copiar el enlace cuando Web Share API no esté disponible;
- botón "Guardar contacto" que genere/descargue un archivo VCF.

No utilizar animaciones excesivas.

La interfaz debe seguir siendo rápida.

==================================================
6. DISEÑO RESPONSIVE
==================================================

Mobile-first.

En móvil:

- tarjeta vertical;
- botones grandes;
- texto legible;
- separación adecuada;
- navegación sencilla.

En escritorio:

- mantener el concepto de tarjeta digital;
- utilizar un ancho máximo controlado;
- evitar que el contenido simplemente se estire
  ocupando toda la pantalla.

Debe verse como una experiencia diseñada específicamente,
no como una web móvil ampliada.

==================================================
7. ARQUITECTURA REUTILIZABLE
==================================================

MUY IMPORTANTE.

Este E-Card será posteriormente un PRODUCTO COMERCIAL DE GRAFICOLOR.

Por eso NO quiero una implementación rígida específica para Graficolor.

Separar:

A. COMPONENTES VISUALES

B. DATOS DEL E-CARD

C. CONFIGURACIÓN DEL TEMA

D. ACCIONES / ENLACES

Por ejemplo, crear una estructura conceptual similar a:

ecardConfig = {
  businessName,
  tagline,
  description,
  logo,
  phone,
  whatsapp,
  email,
  website,
  instagram,
  location,
  portfolio,
  services,
  colors,
  theme
}

Los componentes deben consumir esta configuración.

La idea es que posteriormente podamos crear:

ecard-graficolor
ecard-cliente-1
ecard-cliente-2
ecard-cliente-3

sin tener que reconstruir toda la interfaz.

==================================================
8. HTML / CSS / JAVASCRIPT
==================================================

Quiero que la implementación sea lo más portable posible.

Priorizar:

HTML semántico
CSS moderno
JavaScript limpio

Evitar dependencias innecesarias.

Si el proyecto actual utiliza un framework, puedes mantenerlo si aporta
una ventaja clara, pero la estructura visual y los datos deben mantenerse
desacoplados.

El E-Card debería poder evolucionar posteriormente hacia una versión
HTML independiente fácilmente desplegable.

==================================================
9. ACCESIBILIDAD
==================================================

Implementar:

- HTML semántico;
- labels accesibles;
- aria-label en iconos cuando sea necesario;
- navegación mediante teclado;
- contraste suficiente;
- estados focus visibles;
- respetar prefers-reduced-motion;
- botones reales para acciones;
- enlaces reales para navegación.

==================================================
10. SEO Y METADATOS
==================================================

Agregar:

- title;
- description;
- Open Graph;
- favicon;
- theme-color;
- viewport correctamente configurado.

Preparar también una estructura para compartir correctamente el E-Card
en WhatsApp y redes sociales.

==================================================
11. RENDIMIENTO
==================================================

Priorizar:

- carga rápida;
- imágenes optimizadas;
- lazy loading cuando corresponda;
- CSS eficiente;
- JavaScript mínimo;
- evitar librerías innecesarias.

No utilizar videos o efectos pesados como fondo.

==================================================
12. CONFIGURACIÓN DE GRAFICOLOR
==================================================

Utilizar inicialmente:

Nombre:
Graficolor

Razón social / descripción:
Graficolor SM

Actividad:
Litografía y Diseño

Ubicación:
Santa Marta, Magdalena - Colombia

Teléfono:
+57 300 837 4808

Correo:
gerencia@graficolorsm.com

Sitio web:
https://www.graficolorsm.com

Portafolio:
Utilizar el portafolio oficial que ya tiene Graficolor.

Instagram:
Utilizar el enlace oficial configurado actualmente por Graficolor.

WhatsApp:
Utilizar el número oficial de Graficolor.

IMPORTANTE:
No inventes URLs.

Si alguna URL específica no está disponible en la configuración actual,
déjala como una constante claramente identificada para configurarla
posteriormente.

==================================================
13. E-CARD COMO PRODUCTO
==================================================

Diseña la aplicación pensando desde el principio en que Graficolor
pueda vender este servicio.

Crear una arquitectura que permita posteriormente:

- cambiar logo;
- cambiar colores;
- cambiar nombre;
- cambiar teléfono;
- cambiar WhatsApp;
- cambiar correo;
- cambiar redes sociales;
- cambiar servicios;
- cambiar fotografías;
- cambiar descripción;
- cambiar enlaces;
- seleccionar tema claro/oscuro;
- seleccionar diferentes estilos visuales.

NO implementar todavía un panel administrativo.

NO implementar autenticación.

NO implementar base de datos.

NO implementar un sistema multiusuario.

Simplemente deja la arquitectura preparada para que posteriormente
podamos incorporar esas capacidades.

==================================================
14. DISEÑO
==================================================

Quiero que tomes como referencia conceptual el E-Card actual de
Graficolor y la identidad visual de la página web, pero NO copies
literalmente el diseño.

Crea tu propia propuesta visual.

La composición debe sentirse:

MODERNA
↓
TECNOLÓGICA
↓
CREATIVA
↓
PROFESIONAL
↓
GRAFICOLOR

Usa los colores de identidad de forma equilibrada.

No conviertas toda la interfaz en un arcoíris.

Los degradados deben funcionar como elementos de identidad,
no como decoración excesiva.

==================================================
15. RESULTADO ESPERADO
==================================================

Quiero que entregues una versión funcional y visualmente terminada.

No quiero únicamente un wireframe.

Quiero:

- diseño final;
- responsive;
- modo oscuro;
- modo claro;
- interacciones;
- botones funcionales;
- estructura reutilizable;
- datos centralizados;
- código limpio;
- componentes reutilizables;
- arquitectura preparada para futuros E-Cards.

Antes de terminar:

1. Comprueba todos los enlaces.
2. Comprueba el cambio de tema.
3. Comprueba el botón WhatsApp.
4. Comprueba llamada.
5. Comprueba correo.
6. Comprueba sitio web.
7. Comprueba Instagram.
8. Comprueba ubicación.
9. Comprueba portafolio.
10. Comprueba compartir.
11. Comprueba guardar contacto.
12. Comprueba responsive.
13. Comprueba accesibilidad básica.

No agregues funcionalidades que no estén relacionadas con este objetivo.

Primero construye la experiencia visual y funcional.
Después revisaremos juntos cualquier ajuste.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/86366272-3d77-4be1-b55e-9f0087b85413).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
