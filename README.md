# Curso de PostCSS

## Tabla de Contenido

  - [Introducción](#introducción)

  - [Instalación](#instalación)

  - [Transformar Estilos](#transformar-estilos)

  - [Plugins](#plugins)


## Introducción
  Usar el CSS del futuro ya no es un problema, gracias
  a esta herramienta PostCSS que nos ayuda a transpilar
  el CSS del futuro a un CSS que es soportado por los
  navegadores.

### ¿Qué es PostCSS?
  Es una herramienta para transformar estilos mediante plugins de JavaScript


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Instalación

**(*) Repositorio de curso PostCSS:** [https://github.com/LeonidasEsteban/platzi-video-postcss](https://github.com/LeonidasEsteban/platzi-video-postcss)

1. Requisitos:
  
- Tener instalado [NodeJS](https://nodejs.org/en/)

2. Para empezar debemos crear un archivo `package.json` inicial rápido:

```sh
  npm init -y
```

3. Ahora tenemos que instalar el postcss-cli en el entorno de trabajo y no global.

```sh
  npm install postcss-cli --save-dev
```

4. Para ejecutar el comando en el entorno de trabajo ejecutamos:

```sh
npx postcss-cli --version
```

**(*) Documentación PostCSS CLI:** [https://github.com/postcss/postcss-cli](https://github.com/postcss/postcss-cli)


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>


## Transformar Estilos

  Los comandos del PostCSS se encuentran en el [Repositorio Oficial](https://github.com/postcss/postcss-cli)

  1. Para transformar un archivo en ser ejecuta el siguiente comando:

  ```sh
  npx postcss src/css/home.css -o dist/css/home.css
  ```

  - La primera ruta indica el archivo base en PostCSS

  - `-o` indica la salida

  - La segunda ruta es donde se guardara el archivo transformado

  2. Transformar un ves que se realice un cambio:
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w
  ```
  - [ `-w` | `--watch`] revisa los cambios

  3. Uso de Plugins de PostCSS:
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w -u
  ```
  - [ `-u` | `--use`] uso de plugins de PostCSS

  4. Cambiar la ruta en nuestro `index.html` al archivo transformado.

  ```html
    <link rel="stylesheet" href="dist/css/home.css" />
  ```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Plugins

Todo lo que vamos a hacer con PostCSS probablemente sea instalar plugins, es cierto que puedes crear nuevos plugins y vamos a ver como se hace, pero es posible que lo que quieres hacer ya este hecho, para revisar si ya existe puedes visitar la pagina [www.postcss.parts](www.postcss.parts)

### Autofixer

1. Instalaremos [autoprefixer]((https://github.com/postcss/autoprefixer)):

  ```sh
    npm install --save autoprefixer
  ```

2. Para ejecutar el plugin:
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w -u autoprefixer 
  ```
3. Archivo de Configuración
  Ahora para tener un control de los plugins crearemos un archivo de configuración llamado: `postcss.config.js`

  ```js
    module.exports = {
        plugins: [
            require("autoprefixer")({
                grid:true
            })
        ]
    }
  ```

   Para este plugin las opciones de configuración son las siguientes: [Opciones autoprefixer](https://github.com/postcss/autoprefixer#options)

  y finalmente para ejecutar:
  
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w 
  ```

  **(*)** Para deshabilitar el autoprefixer en cierto estilos podemos aplicar lo siguiente:

  `/* autoprefixer: off */`

  ##### Ejemplo solo un estilo:

  ```css
    a {
      transition: 1s; /*autoprefixer actua*/
    }

    b {
      /* autoprefixer: off */
      transition: 1s; /*autoprefixer ignora*/
    }
  ```

### postcss-preset-env
  Es el plugin para usar el sintaxis mas moderno de CSS y aplicarlo hoy en día.

1. Instalaremos [postcss-preset-env](https://preset-env.cssdb.org/)

```sh
    npm install postcss-preset-env --save-dev
```
2. Archivo de Configuración
  Ahora para tener un control del `plugin` agregamos:

  ```js
    module.exports = {
        plugins: [
            require("autoprefixer")({
                grid:true
            }),
            //added
            require("postcss-preset-env")({
              stage: 3,
              features: {
                  'nesting-rules': true
              }
            })
        ]
    }
  ```

  Las opciones de configuración son las siguientes: [Opciones postcss-preset-env](https://github.com/csstools/postcss-preset-env#options)

  y finalmente para ejecutar:
  
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w 
  ```


<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>