
<div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Catálogo Digital

**Catálogo digital de productos con precios, disponibilidad y pedidos por WhatsApp.**

Aplicación web progresiva (PWA) diseñada para que pequeños negocios y emprendimientos puedan presentar sus productos de forma organizada, facilitar las consultas de sus clientes y recibir pedidos directamente por WhatsApp. La información del catálogo está preparada para administrarse mediante hojas de cálculo de Google Sheets, sin necesidad de modificar manualmente el código cada vez que cambien los productos.

---

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**SATCORE SOLUTIONS**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

[![License](https://img.shields.io/badge/License-SCSAL%201.0-000000.svg)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-SatCore%20Solutions-181717?logo=github)](https://github.com/satcoresolutions)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?logo=npm)](https://www.npmjs.com/)

</div>

---

# Sobre el proyecto

**Catálogo Digital** es un proyecto de software desarrollado originalmente por **SatCore Solutions**, dentro del ecosistema de soluciones tecnológicas de **SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**.

Su propósito es proporcionar una herramienta digital sencilla y accesible para que pequeños negocios, emprendimientos y comerciantes puedan publicar sus productos, mostrar sus precios y disponibilidad, y facilitar el contacto con sus clientes.

El proyecto busca reducir las barreras técnicas para crear y mantener un catálogo en línea, evitando que cada modificación de los productos requiera necesariamente cambios en el código fuente.

La solución está orientada a ofrecer una experiencia adaptable a dispositivos móviles y equipos de escritorio, con opciones para consultar productos y realizar pedidos mediante WhatsApp.

Este repositorio forma parte de los proyectos tecnológicos propios de **SatCore Solutions** y se distribuye de acuerdo con los términos de la **SatCore Solutions Attribution License — SCSAL 1.0**.

---

# SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

**Nombre comercial:** SatCore Solutions

**Eslogan:**

> Soluciones digitales seguras, accesibles y funcionales para todos.

SatCore Solutions desarrolla soluciones digitales orientadas a software, automatización, inteligencia artificial, ciberseguridad, formación tecnológica y herramientas digitales.

El ecosistema se estructura alrededor de cinco áreas principales:

### Desarrollo

Creación de sitios web, aplicaciones, herramientas digitales, plataformas y soluciones de software.

### Automatizador

Automatización de procesos, agentes inteligentes, integración de APIs y sistemas capaces de ejecutar tareas de manera automatizada.

### Seguridad

Ciberseguridad, auditoría, análisis de vulnerabilidades, hardening, monitoreo y protección de sistemas.

### Estudio

Formación, documentación, recursos educativos, tutoriales y proyectos orientados al aprendizaje tecnológico.

### Marketing

Diseño de marca, presencia digital, contenido tecnológico, analítica y herramientas digitales para comunicación y posicionamiento.

---

# Características

- **Catálogo de productos:** presentación organizada de productos con nombre, categoría, descripción, precio y fotografía.
- **Disponibilidad:** identificación de los productos disponibles y no disponibles.
- **Filtrado por categorías:** navegación por grupos de productos.
- **Búsqueda de productos:** facilita encontrar productos dentro del catálogo.
- **Pedidos por WhatsApp:** acceso directo a conversaciones para consultar productos y realizar pedidos.
- **Configuración del negocio:** nombre comercial, eslogan, número de WhatsApp, moneda y mensaje de contacto.
- **Google Sheets:** integración prevista para gestionar los productos y la configuración desde hojas de cálculo publicadas como CSV.
- **Diseño adaptable:** interfaz diseñada para dispositivos móviles y pantallas de escritorio.
- **Aplicación web progresiva (PWA):** soporte para instalación en dispositivos compatibles.
- **Tema visual:** opción de cambiar entre los temas disponibles en la aplicación.
- **Identidad SatCore:** estructura visual y componentes coherentes con la identidad de SatCore Solutions.

*La disponibilidad efectiva de cada característica depende de su implementación en la versión desplegada.*

---

# Tecnologías

Este proyecto utiliza las siguientes tecnologías:

### Tecnologías principales

- **Next.js 15:** framework de React para aplicaciones web.
- **React 19:** biblioteca para construir interfaces de usuario.
- **TypeScript 5:** tipado estático para JavaScript.
- **Tailwind CSS v4:** estilos y diseño de interfaces.
- **Node.js 18 o superior:** entorno de ejecución compatible con el proyecto.
- **npm:** instalación y administración de dependencias.
- **Google Sheets:** fuente de datos prevista para los productos y la configuración del negocio.
- **CSV:** formato de intercambio de información entre las hojas de cálculo y la aplicación.
- **WhatsApp:** canal externo para consultas y pedidos.

La integración con Google Sheets utiliza solicitudes desde el servidor para consultar los datos publicados. No requiere incluir credenciales privadas de Google en el código del navegador cuando se emplean URLs públicas de CSV.

---

# Requisitos

Antes de ejecutar el proyecto, asegúrate de contar con:

- Node.js 18 o superior, compatible con las dependencias instaladas.
- npm.
- Git.
- Acceso a una terminal.
- Un editor de código, como Visual Studio Code.
- Un archivo de configuración `.env.local` cuando la integración con Google Sheets esté habilitada.

Para utilizar datos remotos, también necesitarás una hoja de cálculo de Google Sheets con los datos estructurados correctamente y sus URLs CSV publicadas.

---

# Instalación

Clona el repositorio:

```bash
git clone https://github.com/satcoresolutions/catalogo-digital.git
```

Accede al directorio:

```bash
cd catalogo-digital
```

Instala las dependencias:

```bash
npm install
```

---

# Configuración

## Variables de entorno

Si utilizas Google Sheets como fuente de información, crea un archivo `.env.local` en la raíz del proyecto.

```env
GOOGLE_SHEETS_PRODUCTS_CSV_URL="URL_CSV_PUBLICADA_DE_PRODUCTOS"
GOOGLE_SHEETS_CONFIG_CSV_URL="URL_CSV_PUBLICADA_DE_CONFIGURACION"
```

Reemplaza los valores de ejemplo por las URLs CSV correspondientes a las hojas de cálculo publicadas.

### Hoja de productos

La hoja de productos debe incluir las siguientes columnas, con los encabezados esperados por el lector de datos:

| Nombre | Categoria | Descripcion | Precio | Foto | Disponible |
|---|---|---|---:|---|---|
| Producto de ejemplo | General | Descripción del producto | 15000 | /productos/ejemplo.jpg | Sí |

Cada fila representa un producto. Los nombres de las columnas deben coincidir con los que espera la implementación.

### Hoja de configuración

La hoja de configuración utiliza dos columnas: una para la clave y otra para su valor.

| Clave | Valor de ejemplo |
|---|---|
| negocio | Mi negocio |
| eslogan | Productos para cada ocasión |
| whatsapp | 573000000000 |
| moneda | COP |
| mensaje | Hola, me interesa {producto} ({precio}). ¿Está disponible? |

Ajusta los nombres de las claves según los que espera el lector de configuración.

### Publicación de las hojas

1. Abre la hoja de cálculo en Google Sheets.
2. Publica la hoja correspondiente para obtener una URL CSV accesible.
3. Obtén una URL independiente para productos y otra para configuración, si el código utiliza dos fuentes.
4. Coloca las URLs en `.env.local`.
5. Reinicia el servidor de desarrollo después de modificar las variables de entorno.

**Importante:** publicar una hoja puede hacer que sus datos sean accesibles públicamente. No incluyas información privada, contraseñas, credenciales, datos personales innecesarios ni información confidencial.

Las variables no utilizan el prefijo `NEXT_PUBLIC_`, ya que están destinadas a ser leídas desde el servidor.

En producción, configura las mismas variables en el panel de la plataforma de despliegue. Si cambias una variable de entorno, puede ser necesario volver a desplegar la aplicación.

**Nota sobre las actualizaciones:** el uso de `cache: "no-store"` permite evitar la caché de las solicitudes `fetch` en Next.js, pero la página también debe configurarse para consultar los datos en cada solicitud. Además, Google Sheets puede tardar en reflejar los cambios publicados.

---

# Desarrollo

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre la aplicación en el navegador:

```text
http://localhost:3000
```

Para comprobar el funcionamiento, verifica que:

- El catálogo cargue los productos correctamente.
- Los precios y las fotografías se muestren de forma adecuada.
- Las categorías y la búsqueda funcionen.
- La disponibilidad se represente correctamente.
- Los botones de WhatsApp generen los enlaces esperados.
- Los datos de Google Sheets se puedan consultar cuando la integración esté configurada.
- La interfaz se adapte a diferentes tamaños de pantalla.

---

# Producción

Genera la compilación de producción:

```bash
npm run build
```

Inicia la aplicación:

```bash
npm start
```

La aplicación requiere un entorno compatible con Next.js. Si el proyecto utiliza renderizado dinámico y consultas a Google Sheets desde el servidor, el proveedor de despliegue debe permitir ejecutar esas solicitudes en tiempo de ejecución.

---

# Estructura del proyecto

La estructura general puede organizarse de la siguiente manera:

```text
catalogo-digital/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── manifest.ts
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── ProductGrid.tsx
│   ├── ProductCard.tsx
│   ├── ProductImage.tsx
│   ├── CatalogView.tsx
│   ├── ThemeToggle.tsx
│   └── InstallPWAButton.tsx
│
├── lib/
│   ├── excel.ts
│   ├── whatsapp.ts
│   ├── seo.ts
│   └── ui.ts
│
├── public/
│   ├── icons/
│   ├── logo.png
│   └── ...
│
├── types/
│   └── index.ts
│
├── .env.local
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── ...
```

*La estructura anterior es orientativa. Conserva los nombres y directorios que existan realmente en el repositorio.*

---

# Arquitectura

La aplicación separa la presentación visual, la lógica de consulta de datos y las acciones de contacto.

```text
Google Sheets
      │
      ▼
Hojas publicadas como CSV
      │
      ▼
Lector de datos del servidor
      │
      ▼
Configuración y productos
      │
      ▼
Interfaz del catálogo
      │
      ├── Búsqueda
      ├── Categorías
      ├── Tarjetas de productos
      ├── Precios y disponibilidad
      └── Enlaces de WhatsApp
```

Los componentes visuales presentan la información y permiten navegar por los productos. La lógica de datos transforma los registros de las hojas de cálculo en las estructuras que utiliza la interfaz.

WhatsApp funciona como un servicio externo para la comunicación con el negocio; el catálogo no debe considerarse por sí mismo una pasarela de pagos ni un sistema de pedidos con persistencia centralizada.

---

# Datos y privacidad

El catálogo puede consultar información pública de productos y configuración empresarial mediante Google Sheets.

Los datos de ejemplo pueden incluir:

- Nombre del producto.
- Categoría.
- Descripción.
- Precio.
- Ruta o URL de la fotografía.
- Disponibilidad.
- Nombre del negocio.
- Eslogan.
- Número de WhatsApp comercial.
- Moneda.
- Mensaje predeterminado de contacto.

La información publicada en Google Sheets puede ser accesible por cualquier persona que tenga acceso a la publicación. El responsable del catálogo debe revisar qué información comparte.

Los enlaces de WhatsApp abren un servicio externo sujeto a sus propios términos y políticas de privacidad.

La aplicación no debe considerarse un sistema de almacenamiento seguro de información confidencial ni una plataforma de pagos, salvo que se desarrollen e integren expresamente esas capacidades.

---

# Seguridad

La seguridad forma parte de los principios de desarrollo de SatCore Solutions.

Para utilizar el proyecto de forma responsable:

- No publiques credenciales, contraseñas, tokens ni claves privadas.
- No incluyas información confidencial en hojas de cálculo publicadas.
- Valida y normaliza los datos recibidos antes de presentarlos.
- Revisa las URLs de las fotografías y de los servicios externos.
- Mantén actualizadas las dependencias del proyecto.
- Configura correctamente las variables de entorno en producción.

Si encuentras una vulnerabilidad, evita publicar detalles técnicos sensibles antes de que pueda ser evaluada.

**Email de seguridad:** satcoresolutions@gmail.com

Cuando sea posible, incluye una descripción del problema, el impacto potencial, la versión afectada y pasos generales para reproducirlo. No compartas credenciales reales ni información personal innecesaria.

---

# Desarrollo y contribuciones

Las contribuciones, correcciones, mejoras y adaptaciones son bienvenidas siempre que respeten la licencia del proyecto.

Antes de realizar cambios importantes, se recomienda revisar la documentación, comprobar la compatibilidad con la arquitectura existente y ejecutar las verificaciones pertinentes.

Las contribuciones no eliminan ni sustituyen la autoría original de SatCore Solutions.

---

# Proyectos derivados

Este proyecto puede utilizarse como base para desarrollar nuevas soluciones, respetando los términos de la licencia.

Se permite, conforme a la SCSAL 1.0:

- Copiar.
- Estudiar.
- Modificar.
- Adaptar.
- Ampliar.
- Integrar.
- Redistribuir.
- Utilizar comercialmente.
- Crear proyectos derivados.

Los proyectos derivados deberán reconocer claramente a **SatCore Solutions** como fuente original cuando utilicen una parte sustancial del proyecto.

Ejemplo:

> Basado en Catálogo Digital, desarrollado originalmente por SatCore Solutions.

Repositorio original:

```text
https://github.com/satcoresolutions/catalogo-digital
```

La atribución no deberá dar a entender que SatCore Solutions respalda, patrocina, mantiene o garantiza un proyecto derivado cuando dicha relación no exista.

---

# Atribución

La atribución constituye una condición de la licencia de este proyecto.

Cuando el código sea copiado, modificado, integrado o redistribuido de manera sustancial, deberá conservarse una referencia razonablemente visible a **SatCore Solutions** como desarrollador original, conforme a los términos de la licencia.

**Proyecto original:**

```text
https://github.com/satcoresolutions/catalogo-digital
```

**SatCore Solutions:**

```text
https://github.com/satcoresolutions
```

---

# Marca y propiedad intelectual

El código fuente de este proyecto está sujeto a la **SatCore Solutions Attribution License — SCSAL 1.0**.

La licencia del código no transfiere automáticamente derechos sobre:

- SatCore Solutions.
- SOFTWARE AND TECHNOLOGY CORE SOLUTIONS.
- Logotipos e identidad visual.
- Nombres comerciales y marcas.
- Dominios.
- Elementos gráficos y otros signos distintivos asociados con SatCore Solutions.

El uso del código no constituye autorización para representar una relación oficial con SatCore Solutions ni para reclamar como propios sus signos distintivos.

---

# Dependencias de terceros

Este proyecto utiliza tecnologías y puede incorporar bibliotecas, frameworks, paquetes, iconos, fuentes y servicios de terceros.

Cada componente permanece sujeto a su propia licencia y condiciones de uso.

La SCSAL 1.0 no modifica ni reemplaza las licencias de terceros. Los usuarios y distribuidores deberán respetar las condiciones aplicables a las dependencias utilizadas.

---

# Despliegue

El proyecto puede desplegarse en plataformas compatibles con Next.js, como Vercel u otros proveedores adecuados.

Proceso general:

1. Crear o seleccionar el repositorio.
2. Importar el proyecto en la plataforma de despliegue.
3. Configurar las variables de entorno necesarias.
4. Instalar las dependencias.
5. Ejecutar la compilación.
6. Desplegar la aplicación.
7. Verificar el catálogo y sus enlaces.
8. Comprobar que los cambios publicados en Google Sheets se reflejen de acuerdo con la configuración de caché y renderizado.

La plataforma de despliegue y los servicios externos permanecen sujetos a sus propios términos y condiciones.

---

# Estado del proyecto

**Estado:** En desarrollo

**Versión:** 1.0.0

**Última actualización:** 2026-10-26

---

# Roadmap

- [ ] Completar y validar la integración con Google Sheets mediante CSV.
- [ ] Verificar la actualización de productos sin modificar el código fuente.
- [ ] Validar la experiencia de búsqueda y filtrado por categorías.
- [ ] Comprobar el funcionamiento de los enlaces y mensajes de WhatsApp.
- [ ] Verificar la instalación PWA en dispositivos compatibles.
- [ ] Mejorar los mensajes de error cuando los datos externos no estén disponibles.
- [ ] Realizar pruebas de accesibilidad y diseño adaptable.
- [ ] Documentar el proceso de configuración y despliegue.

---

# Licencia

Este proyecto se distribuye bajo:

## SatCore Solutions Attribution License — SCSAL 1.0

La licencia permite utilizar, estudiar, modificar, integrar y redistribuir el software, incluido su uso comercial, siempre que se respeten las condiciones de atribución y los demás términos establecidos en la licencia.

Consulta el archivo `LICENSE` del repositorio para conocer los términos completos.

---

# Autoría

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

**GitHub:** https://github.com/satcoresolutions

**Email:** satcoresolutions@gmail.com

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

**© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos mediante SCSAL 1.0.**

</div>

---

## Contacto y autoría

**SatCore Solutions**

*SOFTWARE AND TECHNOLOGY CORE SOLUTIONS*

| Medio | Información |
|---|---|
| Correo | [satcoresolutions@gmail.com](mailto:satcoresolutions@gmail.com) |
| WhatsApp | [+57 302 201 6072](https://wa.me/573022016072) |
| Sitio web | [satcore.solutions](https://satcore.solutions) |
| Instagram | [@satcore_solutions](https://www.instagram.com/satcore_solutions) |
| YouTube | [@SatCore_Solutions](https://www.youtube.com/@SatCore_Solutions) |
| GitHub | [satcoresolutions](https://github.com/satcoresolutions) |
| Facebook | SatCore Solutions |

Para consultas sobre el proyecto, autorizaciones de uso, colaboraciones o información corporativa, utiliza los canales oficiales.

<div align="center">

**Hecho con 💚 por SatCore Solutions**

*Soluciones digitales seguras, accesibles y funcionales para todos.*

© SatCore Solutions — Todos los derechos reservados.

</div>
