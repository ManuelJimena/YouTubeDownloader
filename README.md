# YouTubeDownloader

¡Descarga contenido de YouTube de manera fácil y rápida! YouTubeDownloader es una herramienta poderosa diseñada para ofrecerte la mejor experiencia al descargar tus videos y audios favoritos de YouTube sin complicaciones.

[YouTubeDownloader Interface](path/to/screenshot.png) <!-- Reemplaza "path/to/screenshot.png" con la ruta real a tu captura de pantalla -->

## 🌟 Características

- **Interfaz sencilla y amigable**: Diseñada para todos los usuarios, desde principiantes hasta avanzados.
- **Descargas Versátiles**: Soporta la descarga de videos en diversas calidades y archivos .MP3 para el audio.
- **Tecnología Actual**: Desarrollado con React, Vite y Scss para un rendimiento óptimo y una experiencia de usuario fluida.
- **Adaptable**: Funciona en todas las plataformas principales, incluidos desktop y dispositivos móviles.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado **Node.js** (versión 12 o superior) en tu sistema. Si aún no lo tienes, puedes descargarlo desde [Node.js Official Website](https://nodejs.org/).

## 🛠️ Instalación

Sigue estos pasos para configurar el proyecto en tu sistema local:

1. **Clonar el repositorio:**

     ```js
     git clone https://github.com/ManuelJimena/YouTubeDownloader.git
     ```

2. **Instalar dependencias:**

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

```js
npm install
 ```

3. **Configuración de las APIs de Youtube:**

- Para interactuar con la API de Youtube, necesitarás suscribirte y obtener estas las claves desde los siguientes enlaces: [RapidAPI-Video](https://rapidapi.com/ytjar/api/ytstream-download-youtube-videos) y [RapidAPI-Audio](https://rapidapi.com/ytjar/api/youtube-mp36).
- Crea un archivo `.env` en la raíz de tu proyecto y añade tus claves de API de la siguiente manera:

     ```js
     VITE_API_KEY=X-RapidAPI-Key_Aquí
     VITE_VIDEO_URL=URL_VIDEO_RapidAPI_Aquí
     VITE_VIDEO_HOST=VIDEO_X-RapidAPI-Host_Aquí
     VITE_AUDIO_URL=URL_AUDIO_RapidAPI_Aquí
     VITE_AUDIO_HOST=AUDIO_X-RapidAPI-Host_Aquí
     ```

- Estas variables estarán disponibles en el proyecto a través de `import.meta.env`, como se especifica en el archivo `utils/api.js`.

4. **Inicia el servidor de desarrollo:**

Ejecuta el siguiente comando para arrancar:

```js
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás acceder a la aplicación a través de `http://localhost:5173/` en tu navegador.

## 📚 Uso

Una vez que el servidor de desarrollo está en marcha, simplemente selecciona entre Video y Audio e introduce la URL del video de YouTube que deseas descargar. El sitio procesará tu solicitud y te proporcionará un enlace para descargar el archivo.

## 🤝 Contribuir

Las contribuciones son bienvenidas, ya sea mejorando la documentación, añadiendo nuevas características, corrigiendo bugs, o cualquier otra mejora. Si deseas contribuir, por favor, haz un fork del repositorio y crea un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para más detalles.

## ✒️ Autor

**Manuel Jimena García** - Manuel.Jimena29@gmail.com

## 🙏 Agradecimientos

Especial agradecimiento a todos los contribuyentes y a la comunidad de RapidAPI por facilitar las APIs necesarias para este proyecto.
