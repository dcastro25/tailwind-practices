# 🎮 Tailwind Practices

Un **mini proyecto educativo** diseñado para aprender lo básico de **Tailwind CSS v4**.

## 📖 Descripción

Este proyecto es una pequeña aplicación que muestra una grid de videojuegos construida con React, TypeScript y Tailwind CSS. Es perfecto para practicar y entender los fundamentos de Tailwind sin complejidad adicional.

## 🎯 Objetivo del Proyecto

- Aprender los conceptos básicos de **Tailwind CSS v4**
- Practicar **clases de utilidad** (utilities) de Tailwind
- Entender la **sintaxis nueva de Tailwind v4** (directivas `@import`)
- Aplicar estilos responsivos y efectos hover
- Trabajar con **React + TypeScript** de manera simple

## 📁 Estructura del Proyecto

```
src/
├── videoGames/
│   ├── components/
│   │   ├── gameItems.tsx        # Componente individual de juego
│   │   └── videoGameGrids.tsx   # Grid de videojuegos
│   └── ...
├── models/
│   └── video-game.ts            # Modelo de datos de videojuego
├── App.tsx                       # Componente principal
├── index.css                     # Estilos globales y Tailwind
└── main.tsx                      # Punto de entrada
```

## 🚀 Rápido Inicio

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 3. Compilar para Producción

```bash
npm run build
```

### 4. Previsualizar Build

```bash
npm preview
```

## 🛠️ Herramientas Usadas

- **React 19** - Librería de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de estilos
- **Vite** - Build tool rápido
- **ESLint** - Linting de código

## 💡 Conceptos de Tailwind Practicados

- ✅ Clases de utilidad (bg-gray, rounded-lg, shadow-lg, etc.)
- ✅ Efectos hover (hover:scale-105)
- ✅ Transiciones (transition-transform, duration-300)
- ✅ Layout flexbox (flex, items-center, justify-center)
- ✅ Responsive design (breakpoints)
- ✅ Opacity y colores (bg-black/40)
- ✅ Grupos (group, group-hover)

## 📝 Notas de Tailwind v4

En Tailwind v4, algunos cambios importantes:

- Las directivas cambiaron de `@tailwind` a `@import "tailwindcss/..."`
- `@apply` debe usarse dentro de `@layer` o preferiblemente aplicar clases directamente
- Los prefijos de colores se simplifican (ej: `text-grey-300` → `text-gray-300`)

```css
/* Tailwind v4 */
@import "tailwindcss/preflight";
@import "tailwindcss/utilities";
```

## 🎓 Para Aprender Más

- [Documentación oficial de Tailwind](https://tailwindcss.com)
- [Tailwind CSS v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/padding)

---

**¡Happy coding!** 🎨✨

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
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
