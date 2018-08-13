# Curso de PostCSS

## Tabla de Contenido

  - [Introducción](#introducción)

  - [Instalación](#instalación)

  - [Transpilar](#transpilar)


## Introducción
  Usar el CSS del futuro ya no es un problema, gracias
  a esta herramienta PostCSS que nos ayuda a transpilar
  el CSS del futuro a un CSS que es soportado por los
  navegadores.

### ¿Qué es PostCSS?
  Es una herramienta para manipular archivos CSS usando JavaScript.


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


## Transpilar

  Los comandos del PostCSS se encuentran en el [Repositorio Oficial](https://github.com/postcss/postcss-cli)

  1. Para transpilar un archivo en ser ejecuta el siguiente comando:

  ```sh
  npx postcss src/css/home.css -o dist/css/home.css
  ```

  - La primera ruta indica el archivo base en PostCSS

  - `-o` indica la salida

  - La segunda ruta es donde se guardara el archivo transpilado

  2. Transpilar un ves que se realice un cambio:
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w
  ```
  - [ `-w` | `--watch`] revisa los cambios

  3. Uso de Plugins de PostCSS:
  ```sh
    npx postcss src/css/home.css -o dist/css/home.css -w -u
  ```
  - [ `-u` | `--use`] uso de plugins de PostCSS

  4. Cambiar la ruta en nuestro `index.html` al archivo transpilado.

  ```html
    <link rel="stylesheet" href="dist/css/home.css" />
  ```

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>