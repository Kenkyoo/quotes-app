App Quotes

App Quotes es una aplicación web sencilla que genera frases aleatorias relacionadas con diferentes categorías. Es ideal para encontrar inspiración o simplemente para disfrutar de frases interesantes.
Funcionalidades

    Genera frases aleatorias con solo presionar un botón.
    Muestra la frase, el autor y la categoría asociada.
    Interfaz interactiva con animaciones.

Tecnologías utilizadas
Frontend

    HTML5: Estructura básica de la aplicación.
    CSS: Estilizado con MDB UI Kit, Google Fonts y Font Awesome.
    JavaScript: Manejo de eventos y comunicación con la API.
    JQuery: Simplificación de las operaciones DOM y las solicitudes AJAX.
    JQuery UI: Animaciones para los elementos de la interfaz.

Backend (API de terceros)

    API Ninjas Quotes: Para obtener las frases aleatorias basadas en una categoría.

Herramientas y librerías adicionales

    Parcel: Empaquetador para el proyecto.
    Slick Carousel: Archivos incluidos (aunque no usados actualmente).

Requisitos previos

Para correr el proyecto localmente, asegúrate de tener instalado:

    Node.js (versión 16 o superior).
    Parcel (como dependencia del proyecto).

Uso

    Presiona el botón Random para generar una nueva frase.
    Observa cómo aparece la frase con el autor y su categoría.
    Disfruta de la experiencia animada de la tarjeta al cambiar la frase.

Personalización

Puedes cambiar la categoría de las frases modificando la variable category en el archivo app.js. Algunas categorías disponibles son:

    happiness
    inspiration
    life
    success

   var category = 'inspiration';

Problemas conocidos

    La API tiene un límite de solicitudes, por lo que podrías experimentar errores si superas este límite.
    Algunas categorías pueden no devolver resultados dependiendo de la disponibilidad de datos en la API.

Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más información.  
 
