🎮 Tailwind Practices - React + TypeScript

Aplicación web desarrollada con React, TypeScript y Vite enfocada en practicar y dominar los fundamentos de Tailwind CSS v4.
Este proyecto fue creado como práctica para reforzar el uso de utility classes, diseño responsivo y estructura modular en aplicaciones frontend modernas.

🚀 Demo en vivo

🔗 https://v0.app/chat/dcastro25-tailwind-practices-DaMjG1SKYce

🧠 Lo que demuestra este proyecto

Uso práctico de Tailwind CSS v4

Aplicación de utility-first CSS

Diseño responsive con breakpoints

Manejo de efectos hover y transiciones

Organización modular de componentes

Separación de responsabilidades

Uso de React con TypeScript

Configuración moderna con Vite

Buenas prácticas en estructura de proyecto

🏗️ Estructura del proyecto

src/
│
├── videoGames/
│ ├── components/
│ │ ├── gameItems.tsx
│ │ └── videoGameGrids.tsx
│ │
│ └── ...
│
├── models/
│ └── video-game.ts
│
├── mocks/
│ └── mocks-file.ts
│
├── App.tsx
├── index.css
└── main.tsx

La estructura está organizada por dominio (videoGames/) y responsabilidades (components, models, mocks), permitiendo escalabilidad y mantenimiento sencillo.

🛠️ Tecnologías utilizadas

React 19

TypeScript

Vite

Tailwind CSS v4

PostCSS

ESLint

⚙️ Instalación

Clonar el repositorio:

git clone https://github.com/dcastro25/tailwind-practices

Entrar en la carpeta:

cd tailwind-practices

Instalar dependencias:

npm install

Ejecutar en desarrollo:

npm run dev

Compilar para producción:

npm run build

🎨 Conceptos de Tailwind practicados

Utility classes (bg-gray-800, rounded-xl, shadow-lg, etc.)

Layout con Flexbox y Grid

Hover states (hover:scale-105)

Transiciones (transition-transform, duration-300)

Overlay con opacidad (bg-black/40)

Uso de group y group-hover

Responsive design con breakpoints

Nueva sintaxis de Tailwind v4 (@import)

📦 Deploy

La aplicación está desplegada en producción y disponible públicamente a través de Vercel.

👨‍💻 Autor

Oscar Castro
Frontend Developer en formación

GitHub: https://github.com/dcastro25

📌 Nota

Este proyecto forma parte de mi proceso de aprendizaje y práctica en desarrollo Frontend moderno, enfocado en dominar Tailwind CSS y mejorar la calidad visual y estructural de mis

import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
globalIgnores(["dist"]),
{
files: ["**/*.{ts,tsx}"],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs["recommended-typescript"],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ["./tsconfig.node.json", "./tsconfig.app.json"],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
]);

```

```
