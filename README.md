# YouTubeDownloader

Descarga Videos de Youtube de manera fácil y rápida.

## Características

- Interfaz sencilla y amigable.
- Descarga videos de YouTube.
- Construido con tecnologías modernas: React, Vite, y Sass.

## Requisitos Previos

Para usar este proyecto, necesitas tener instalado Node.js en tu sistema. Puedes descargarlo desde [aquí](https://nodejs.org/).

## Instalación

Sigue estos pasos para configurar el proyecto en tu sistema local:

1. **Clonar el repositorio:**

     ```js
     git clone https://github.com/ManuelJimena/YouTubeDownloader.git
     ```

2. **Instalar dependencias:**

Navega al directorio del proyecto y ejecuta:

     ```js
     npm install
     ```

3. **Configuración de la API de Youtube:**

- Suscríbete para obtener la clave de API de Youtube desde [RapidAPI](https://rapidapi.com/ytjar/api/ytstream-download-youtube-videos).
- Crea un archivo `.env` en la raíz de tu proyecto y agrega tus claves de API y URLs/host necesarios siguiendo este formato:

     ```js
     VITE_API_KEY=Tu_Clave_API_Youtube_Aquí
     VITE_YOUTUBE_URL=URL_Base_API_Youtube_Aquí
     VITE_YOUTUBE_HOST=Host_API_Youtube_Aquí
     ```

- Estas variables estarán disponibles en el proyecto a través de `import.meta.env`, como se especifica en el archivo `utils/constants.js`.

4. **Ejecutar el proyecto:**

Levanta el servidor de desarrollo con:

     ```js
     npm run dev
     ```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación a través de `http://localhost:5173/` en tu navegador.

## Uso

Una vez que el servidor de desarrollo está en marcha, simplemente introduce la URL del video que deseas descargar y selecciona el formato. El sitio procesará tu solicitud y te proporcionará un enlace para descargar el video.

## Contribuir

Las contribuciones son bienvenidas, ya sea mejorando la documentación, añadiendo nuevas características, corrigiendo bugs, o cualquier otra mejora. Si deseas contribuir, por favor, haz un fork del repositorio y crea un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para más detalles.

## Autor

- **Manuel Jimena García** - Manuel.Jimena29@gmail.com