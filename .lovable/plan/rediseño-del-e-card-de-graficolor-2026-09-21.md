# Rediseño del E-Card de Graficolor

## Resultado
Una E-Card terminada, móvil primero y con ancho controlado en escritorio. Mantendrá la identidad CMYK y tecnológica de Graficolor mediante una composición original, sobria y comercializable para otros clientes.

## Experiencia visual
- Encabezado de alto impacto con marca, lema y geometría inspirada en registro de impresión.
- Paleta equilibrada: superficies oscuras o claras con cyan, magenta y amarillo como señales de identidad.
- CTA principal de WhatsApp, cuadrícula de diez acciones rápidas, servicios compactos, portafolio, contacto y pie de marca.
- Temas claro y oscuro diseñados por separado, con selector accesible y persistencia.
- Animaciones discretas de entrada, presión y desplazamiento, respetando reducción de movimiento.

## Funcionalidad
- Enlaces reales para WhatsApp, llamada, correo, web, Instagram y ubicación.
- Portafolio e Instagram saldrán de la configuración central; se usarán únicamente las URLs verificables en la referencia entregada. El portafolio quedará claramente configurable si no existe una URL oficial verificable.
- Compartir mediante el menú nativo del dispositivo y copiar enlace como alternativa.
- Descarga de contacto VCF generada desde los mismos datos centrales.
- Navegación suave y estados visibles para teclado.

## Arquitectura reutilizable
- Configuración única con identidad, contacto, enlaces, colores, tema y servicios.
- Componentes separados para marca, acciones, servicios, contacto y pie.
- Catálogos de acciones y servicios construidos desde datos, sin repetir información comercial.
- Sin cuentas, panel administrativo, almacenamiento ni dependencias nuevas.

## Validación
- Comprobar visualmente móvil y escritorio, ambos temas y ausencia de solapamientos.
- Probar CTA y destinos de contacto, compartir/copia y descarga VCF.
- Revisar etiquetas accesibles, foco, contraste y metadatos propios de Graficolor.
