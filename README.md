# iTunes Podcast Player

![App screenshot](/src/assets/images/image-1.png)

Una aplicación web construida con React y TypeScript para buscar y reproducir podcasts de iTunes de manera eficiente y elegante.

## Información Técnica

### Características

La aplicación integra una serie de tecnologías, bibliotecas y patrones de diseño avanzados, incluyendo:

- [React Router Dom v6](https://reactrouter.com/): Para el enrutamiento de la aplicación.
- [Tanstack Query](https://tanstack.com/query/latest/) y [Axios](https://axios-http.com/): Para el manejo de datos asíncronos y la gestión de caché.
- [Context API](https://reactjs.org/docs/context.html) con [Reducer](https://reactjs.org/docs/hooks-reference.html#usereducer): Para el estado global y la administración del flujo de datos.
- [Date-fns](https://date-fns.org/): Utilizado para el formato de fechas y horas.
- [RSS-parser](https://www.npmjs.com/package/rss-parser) y [allorigins.win](https://www.allorigins.win/): Para el parsing y la obtención de información RSS de los podcasts.
- [Tailwind CSS](https://tailwindcss.com/) y [Material UI](https://mui.com/): Para el diseño de la interfaz de usuario y la implementación de temas.

### En Desarrollo
- Diseño responsive.
- Soporte para temas oscuros y claros.

### Bugs Conocidos

La aplicación tiene ciertas limitaciones y bugs, especialmente en lo que respecta al diseño responsive y la actualización de estados que hacen que algunos botones no cambien dando como resultado una mala experiencia de usuario.

## Instalación y Pruebas

Para probar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Ejecuta `npm install` en la raíz del proyecto para instalar todas las dependencias necesarias.
3. Ejecuta `npm run dev` para iniciar un servidor de desarrollo local. Se mostrará en la consola la dirección y puerto para acceder a la aplicación.

### Tests

Ejecuta `npm run test` para iniciar las pruebas E2E en cypress.

![Tests](/src/assets/images/image-2.png)


## Demo

Puedes encontrar una versión en vivo de la aplicación [aquí](https://elegant-dasik-096001.netlify.app).

## Proyectos similares

- [Top 100 Podcasts - JavaScript](https://github.com/danviles/indi-podcast-player)

## Autor

Creado por [Elvis Nogueiras](https://github.com/danviles).

Para cualquier pregunta o comentario, no dudes en contactarme a través de [LinkedIn](https://www.linkedin.com/in/elvis-nogueiras/).

---

© 2023 Elvis Nogueiras. Todos los derechos reservados.