# Task Manager

Esta aplicación permite administrar tareas, ofreciendo un dashboard en donde podemos visualizar nuestras tareas con 3 estados diferentes: pendientes, en proceso y completadas. Podemos crear, editar y eliminar tareas.

La aplicación usa React, Redux (Redux Toolkit), Vite y Tailwind CSS v4.0, implementando un dark mode que se ajusta a la configuración del dispositivo del usuario, además de ser responsive. Todos los datos se almacenan en el estado global de la aplicación.

Prueba la aplicación: https://tmanager-app.netlify.app/

## ⚙️ Instalación

1. **Clonar el repositorio**

Clona el repositorio del proyecto a tu máquina local:

```bash
git clone git@github.com:josemcj/task-manager.git
cd task-manager
```

2. **Instalar dependencias**

Una vez dentro del directorio del proyecto, instala todas las dependencias necesarias:

```bash
npm install
```

3. **Ejecutar la aplicación en modo desarrollo**

Inicia la aplicación para comenzar a desarrollar:

```bash
npm run dev
```

Esto abrirá la aplicación en tu navegador en la dirección http://localhost:5173 de forma predeterminada.

## 📂 Estructura del proyecto

El proyecto lo diseñé con una estructura que permite crear componentes reutilizables para distintos módulos y páginas de la aplicación. Al mismo tiempo, cada módulo o página cuenta con sus propios componentes específicos que se emplean únicamente en ese contexto, favoreciendo así la modularidad y la mantenibilidad del código. A continuación, se explica brevemente.

Dentro de la carpeta `src` del proyecto tenemos la siguient estructura:

![Estructura de la carpeta src](image.png)

- **app/**

  - **store.js**: Aquí se configura el store de Redux, añadiendo los slices de las tareas y los estados disponibles para cada tarea.

- **components/**

  Almacena los componentes generales que podemos usar en toda la aplicación.

- **data/**

  - **tasks.json**: Archivo de datos estáticos donde se definen tareas de ejemplo. El store carga inicialmente los datos aquí contenidos.

  - **taskStatuses.json**: Archivo de datos estáticos donde se definen los estados posibles de una tarea. El store carga inicialmente los datos aquí contenidos.

- **hooks/**

  Almacena los custom hooks de la aplicación, los cuales nos sirven para acceder y manipular los datos existentes en el store.

- **pages/**

  Aquí se agrupan en carpetas los componentes que fungiran de páginas completas, agrupando otros componentes. Cada carpeta representará una página con su respectivo `index.jsx`.

  Para este proyecto solo existe la página principal de las tareas `tasks/index.jsx`. A su vez, esta carpeta contiene las siguientes carpetas:

  - **components/**: Almacena componentes que solo serán utilizados en la página principal de tareas.
  - **redux/**: Almacena los `slices` que definen el estado inicial y los `reducers` que nos permiten interactuar con el store.

- **App.jsx**

  Aquí se manda a llamar la página principal de tareas y contiene el botón para cambiar el tema de la aplicación (light/dark).

- **index.css**

  Almacena la configuración de Tailwind CSS y los estilos globales de la aplicación.

## 🎨 Decisiones de diseño

El diseño lo basé en una estética modena y accesible para el usuario, con bordes redondeados que transmiten amabilidad. Adapté los matices de color para garantizar un contraste adecuado tanto en el modo oscuro como en el modo claro.

Para facilitar la visualización, las tareas se presentan en tarjetas (cards), lo que permite a los usuarios ver rápidamente la información esencial de cada una, así como todas las tareas existentes. Además, se implementaron badges de colores (gris para 'Pendiente', amarillo para 'En proceso' y verde para 'Completado'), de modo que el estado de cada tarea sea identificable de un vistazo.

Por último, el botón 'Agregar tarea' se ubica de forma destacada en la parte superior de la aplicación, promoviendo la creación rápida de nuevas tareas a través de un modal.
