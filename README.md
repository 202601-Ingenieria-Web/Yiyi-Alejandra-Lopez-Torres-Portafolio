# Yiyi Alejandra Lopez Torres — Portfolio

Portafolio personal desarrollado como proyecto evaluativo para la clase de Ingeniería Web. Construido con **Next.js**, **TypeScript** y **TailwindCSS**.

## Tecnologías usadas

- **Next.js 15** — framework de React para renderizado y routing
- **TypeScript** — tipado estático
- **TailwindCSS** — estilos utilitarios
- **React Icons** — íconos de FontAwesome y otras librerías
- **Vercel** — despliegue

## Estructura del proyecto

El proyecto sigue el principio de **Atomic Design**:

```
src/
├── app/
│   ├── globals.css        # Estilos globales y variables CSS
│   ├── layout.tsx         # Layout raíz con metadatos
│   └── page.tsx           # Página principal con layout de 3 columnas
├── components/
│   ├── atoms/             # Componentes más pequeños y reutilizables
│   │   ├── ProgressBar    # Barra de progreso para habilidades
│   │   ├── SkillTag       # Etiqueta de habilidad
│   │   ├── SectionTitle   # Título de sección (2 variantes)
│   │   └── IconLink       # Botón de ícono para redes sociales
│   ├── molecules/         # Combinaciones de átomos
│   │   ├── ContactItem    # Ícono + texto de contacto
│   │   ├── LanguageBar    # Nombre + barra de progreso
│   │   ├── KnowledgeCard  # Card de conocimiento con ícono
│   │   ├── EducationCard  # Card de educación
│   │   └── PortfolioCard  # Card de proyecto con modal "Learn More"
│   └── organisms/         # Secciones completas de la página
│       ├── LeftSidebar    # Panel izquierdo fijo
│       ├── RightSidebar   # Panel derecho con redes sociales
│       ├── ProfileSection # Sección hero con botón "Contáctame" y diálogo animado
│       ├── KnowledgeSection # Grid de conocimientos
│       ├── EducationSection # Historial educativo
│       ├── PortfolioSection # Proyectos con scroll horizontal
│       └── Footer         # Pie de página
└── data/
    └── portfolioData.ts   # Toda la información del portafolio en un solo archivo
```

## Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm run start
```

## Funcionalidades

- **Layout de 3 columnas**: sidebar izquierdo fijo, contenido central con scroll, sidebar derecho fijo
- **Responsive**: en mobile el sidebar izquierdo se abre con un botón hamburguesa
- **Diálogo "Contáctame"**: botón en la sección perfil que abre una tarjeta de presentación digital animada
- **Portafolio con modal**: cada card de proyecto tiene un botón "Saber más" que abre un diálogo con más detalles
- **Scroll horizontal**: la sección Portfolio usa scroll horizontal
- **Barras de progreso**: idiomas y habilidades técnicas con porcentaje visual

## Despliegue

El proyecto está desplegado en Vercel: [yiyi-lopez-portafolio.vercel.app](https://yiyi-lopez-portafolio.vercel.app)
