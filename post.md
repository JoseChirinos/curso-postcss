## CSS Next Obsoleto

**Entonces que pasara?**

**Existe alternativas?.**

**Al cabo que ni queria**

Y muchas preguntas me surgieron pero la causa es muy interesante.

## El motivo:

  El colaborador Principal [MoOx](https://github.com/MoOx) nos explica porque se dejo el proyecto.

  - El colaborador principal practicamente se canso del proyecto y la visión de PostCSS.

  - Trato de dejar el proyecto a otros colaboradores, ha pedido ayuda por twitter pero no respondieron.

**Pero** un colaborador activo hizo un fork y comenzo [postcss-preset-env](https://preset-env.cssdb.org) y posiblemente mejor que cssnext.

## Es en serio?
  Si, puedes ver el post completo: 
  [Deprecating-cssnext](https://moox.io/blog/deprecating-cssnext/)


## Cómo Migrar a [postcss-preset-env](https://preset-env.cssdb.org) ?

**1.** Primero instalaremos el postcss-cli en el entorno de trabajo y no global.

```sh
  npm install postcss-cli --save-dev
```

**2.** Para ejecutar el comando en el entorno de trabajo ejecutamos:

```sh
npx postcss-cli --version
```

**(*) Documentación PostCSS CLI:** [https://github.com/postcss/postcss-cli](https://github.com/postcss/postcss-cli)

**3.** Instalar [postcss-preset-env](https://preset-env.cssdb.org/)

```sh
  npm install postcss-preset-env --save-dev
```

Por defecto tendremos algunos plugins:
  - `autoprefixer`
  - `insertBefore / insertAfter`
  - `browers`
  - [ver mas..](https://github.com/csstools/postcss-preset-env#options)


**4.** Creamos el Archivo de Configuración
  `postcss.config.js` y agregamos:

  ```js
    module.exports = {
        plugins: [
            require("postcss-preset-env")({
              autoprefixer: {
                grid: true
              },
              browsers: [
                "last 2 version",// soporte
                "> 1%",
                "not dead"
              ],
              stage: 3, //usar los ultimos feactures de css
              features: {
                  'nesting-rules': true
              }
            })
        ]
    }
  ```

  Esta configuración nos ayudara para continuar el [Curso de PostCSS](https://platzi.com/clases/postcss).
  
  
  Puedes probar más: [Opciones postcss-preset-env](https://github.com/csstools/postcss-preset-env#options)

  **5.** Ejecutamos:
  
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w 
  ```
  **Sobre los comandos:**
  - La primera ruta indica el archivo base en PostCSS

  - `-o` indica la salida

  - La segunda ruta es donde se guardara el archivo transformado

  - [ `-w` | `--watch`] revisa los cambios.

## ⚠️ Algunos Detalles
`@apply` que se vera en la proxima clase ya no recibe más soporte, así que te sugiero que lo instales aparte:

**1.** Instalar
```sh
	npm install postcss-apply --save-dev
```

**2.** Configurar el `postcss.config.js`:

```js
  module.exports = {
        plugins: [
            //added
            require("postcss-apply"),
            require("postcss-preset-env")({
              autoprefixer: {
                grid: true
              },
              browsers: [
                "last 2 version",// soporte
                "> 1%",
                "not dead"
              ],
              stage: 3, //usar los ultimos feactures de css
              features: {
                  'nesting-rules': true
              }
            })
        ]
    }
```


## Suerte
  Espero que puedas descubrir mucho más de [postcss-preset-env](https://preset-env.cssdb.org/) y implementarlo en tus proyectos.