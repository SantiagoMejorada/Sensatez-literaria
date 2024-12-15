# Sensatez Literaria

Blog desarrollado en Astro 4 para una cuenta de libros.  
El código del blog es de código abierto, lo que permite que cualquier persona lo utilice como plantilla para su propio proyecto.

## Tecnologías utilizadas

- **Astro**: Framework estático rápido y eficiente.
- **Tailwind CSS**: Para un diseño limpio y moderno.
- **TypeScript**: Garantizando un código más seguro y mantenible.

El blog está diseñado para ser compatible tanto con Desktop como con Mobile (aunque aún hay mejoras pendientes en la versión mobile).

**Nota**: Desarrollo aun sin terminar, puede haber bugs, estilos incompletos o alguna seccion faltante.


![1](https://github.com/user-attachments/assets/a7a34c16-31b0-41aa-a242-912e9b62421a)


![2](https://github.com/user-attachments/assets/c7b7c492-556f-4366-bcfe-f3530c2f8c4e)

[Vista previa del blog!](https://sensatez-literaria.vercel.app)


## 🔧 Estructura del proyecto

Dentro del proyecto encontrarás los siguientes archivos y carpetas:

```plaintext
├── public/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── BlogCard.astro
│   │   ├── Card.astro
│   │   ├── Carousel.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Label.astro
│   │   └── SearchPosts.astro
│   ├── content/             # Contenido en Markdown o MDX
│   │   ├── blogs/
│   │   ├── escritos/
│   │   └── resenas/
│   │   └── config.ts        # Configuración adicional para colecciones
│   ├── layouts/             # Diseños reutilizables
│   │   ├── Layout.astro
│   │   ├── LayoutEscritos.astro
│   │   └── LayoutPosts.astro
│   ├── pages/               # Rutas del sitio
│   │   ├── blogs/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── escritos/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── resenas/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── 404.astro        # Página de error 404
│   │   ├── index.astro      # Página principal
│   │   ├── inicio.astro     # Página de inicio
│   │   ├── rss.xml.js       # Archivo RSS para el feed
│   │   └── sobre-mi.astro   # Página "Sobre mí"
│   ├── utils/               # Utilidades y constantes
│   │   ├── consts.ts
│   │   └── env.d.ts
├── .gitignore               # Archivos a ignorar en Git
├── astro.config.mjs         # Configuración de Astro
├── package-lock.json        # Archivo de bloqueo de dependencias
├── package.json             # Dependencias y scripts
├── README.md                # Documentación del proyecto
├── tailwind.config.mjs      # Configuración de Tailwind CSS
└── tsconfig.json            # Configuración de TypeScript
