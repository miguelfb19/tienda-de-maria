# AGENTS.md — Tienda de María

Frontend estático para una tiendita tipo autoservicio (Mujin Hanbaijo). Una sola página con lista de precios y métodos de pago.

## Stack

| Capa      | Tecnología         |
|-----------|-------------------|
| Runtime   | React 19 + TypeScript 6 |
| Estilos   | Tailwind CSS 4 (via Vite plugin) |
| Build     | Vite 8 |
| Linter    | oxlint (reglas tipo SonarQube) |
| Fuente    | Nunito + Noto Sans JP (Google Fonts) |

## Comandos

```bash
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # compilación TS + build de producción
npm run lint      # oxlint (debe dar 0 warnings, 0 errors)
npm run preview   # previsualizar build de producción
```

## Estructura

```
src/
├── data/productos.ts       # Producto[] y datosPago (único archivo editable para datos)
├── components/
│   ├── ListaPrecios.tsx     # Card con productos
│   └── MetodosPago.tsx      # Card con Bre-B, Nequi, Efectivo
├── App.tsx                  # Layout principal (header, banner, grid, footer)
├── main.tsx                 # Punto de entrada
└── index.css                # Tailwind + tema de colores
public/
└── favicon.svg              # Logo y favicon
```

## Reglas de calidad (SonarQube / oxlint)

### Obligatorio (error)
- `react/rules-of-hooks`
- `react/jsx-key` — todo elemento en `.map()` debe tener `key`
- `react/no-array-index-key` — usar `key` con id del dato, no el índice
- `react/jsx-no-undef` — no usar variables no definidas en JSX
- `react/no-unknown-property` — solo props HTML/React válidas
- `react/no-unescaped-entities` — escapar `'` `"` `>` etc.
- `react/no-children-prop` — children va como hijo, no como prop
- `react/no-direct-mutation-state`
- `react/void-dom-elements-no-children`
- `typescript/no-non-null-assertion` — **prohibido usar `!`** (non-null assertion)
- `typescript/no-explicit-any` — **prohibido usar `any`**
- `typescript/prefer-as-const` — usar `as const` en objetos/arrays inmutables
- `typescript/consistent-type-imports` — `import type { X }` para tipos
- `typescript/no-import-type-side-effects`

### Recomendado (warn)
- `typescript/prefer-readonly` — usar `readonly` en interfaces y arrays
- `react/jsx-props-no-spread-multi` — evitar spread de props múltiples
- `react-perf/jsx-no-new-object-as-prop` — no crear objetos/funciones inline en props
- `react-perf/jsx-no-new-function-as-prop` — extraer callbacks con `useCallback`

### Reglas TypeScript del compilador (`tsconfig.app.json`)
- `noUnusedLocals: true` — cero variables locales sin usar
- `noUnusedParameters: true` — cero parámetros sin usar
- `noFallthroughCasesInSwitch: true`
- `erasableSyntaxOnly: true` — solo `type` e `interface` pueden borrarse en runtime
- `verbatimModuleSyntax: true` — usar `import type` para importaciones de solo tipo

## Checklist pre-commit

Antes de commitear, pasar **todo** esto:

- [ ] `npm run lint` → 0 warnings, 0 errors
- [ ] `npm run build` → compila sin errores
- [ ] No usar `!` (non-null assertion)
- [ ] No usar `any`
- [ ] Usar `as const` en constantes exportadas
- [ ] Usar `import type` para tipos
- [ ] Usar `readonly` en interfaces y arrays inmutables
- [ ] No crear objetos/funciones inline en JSX props
- [ ] Todo `.map()` tiene `key` estable (basado en id, no en índice)

## Cómo modificar datos

El archivo `src/data/productos.ts` es la única fuente de datos. Contiene:
- `Producto[]` — array de productos con `id`, `nombre`, `precio`, `emoji`
- `datosPago` — objeto con `breB` y `nequi` (strings con número de cuenta)

Para agregar/quitar productos o cambiar datos de pago, editar solo ese archivo.
