# Rsbuild

## Qué es?

Rsbuild es una herramienta de construcción de alto nivel construida sobre Rspack. Su objetivo es simplificar la configuración y ofrecer una experiencia "cero-config" para proyectos modernos, similar a herramientas como Vite o Create React App, pero aprovechando la velocidad de Rspack.

## Características adicionales

- Rsbuild NO usa webpack directamente

    Rsbuild está construido sobre Rspack, un bundler moderno escrito en Rust que es compatible con la configuración de webpack, pero no depende de webpack en sí.

    Rspack fue diseñado como una alternativa más rápida a webpack, manteniendo una API similar para facilitar la migración.

- Rsbuild abstrae la complejidad de webpack/Rspack

    Si has usado herramientas como Create React App (que abstrae webpack), Rsbuild hace algo similar pero con Rspack como base.

    Webpack requiere configuración manual (loaders, plugins, optimizaciones), mientras que Rsbuild ofrece una experiencia "cero-config" o mínima configuración, con opciones predefinidas para frameworks como React, Vue, etc.

## Comparación técnica

| Característica     | webpack                                         | Rsbuild (+ Rspack)                                                 |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------ |
| Lenguaje base      | JavaScript                                      | Rust (Rspack) + TypeScript                                         |
| Velocidad de build | Más lento (especialmente en proyectos grandes)  | Hasta 10x más rápido gracias a Rust                                |
| Configuración      | Manual (archivo webpack.config.js)              | Cero-config o mínima configuración                                 |
| Plugins            | Ecosistema enorme de plugins                    | Compatibilidad con algunos plugins de webpack (a través de Rspack) |
| Casos de uso       | Proyectos que necesitan personalización extrema | Proyectos que priorizan velocidad y simplicidad                    |

## Migración desde webpack

Rspack (y por ende Rsbuild) es compatible con la mayoría de las configuraciones de webpack, lo que permite migrar proyectos existentes con menos esfuerzo.

Ejemplo: Si tu proyecto usa webpack.config.js, podrías reemplazar webpack con Rspack y mantener gran parte de la configuración (aunque no al 100%).
