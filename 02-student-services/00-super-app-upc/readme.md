# Documento de marcación
Fecha de creacion: Enero 2026  
Fecha ultima actualizacion: Enero 2026

## Table of content

---

## 🚀 Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa. Esta seccion es el punto de partida para cualquier tipo de navegacion dentro del app.

- 📘 `screen_view`: [payload](./00-home/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de inicio dentro del app. No importa si es la primera o na n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app. Al ser un evento de usuario previamente loggeado, los datos del login se envia junto con el evento.

- 📘 `screen_view`: [payload](./00-home/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de inicio dentro del app. No importa si es la primera o na n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app. Al ser un evento de usuario previamente loggeado, los datos del login se envia junto con el evento.

- 📘 `carousel_banner`: [payload](./00-home/carousel_banner.yaml)  
Captura la inteaccion del usuario con el `carousel` que se presenta dentro de la pantalla de inicio. Este componente presenta distintos cards (que se pueden presentar como popup en algun momento) para que los estudiantes puedan seleccionar y dirigirse al destino correspondiente.

- 📘 `card_cachimbo_upc`: [payload](./00-home/card_cachimbo.yaml)  
Captura la interacion de **click** del usuario con el card relacionado a **Cachimbo UPC**.

- 📘 `icon_campana`: [payload](./00-home/icon_campana.yaml)  
Cuando el usuario hace click en la campana de notificaciones, permite la captura de un grado de interes del usuario dentro de su formacion academica.

### Explora y descubre
Esta sección presenta distintos Cards (imagenes + texto) que permiten navegar a ciertas secciones del app, los eventos hacen referencia a la accion de **click** en cada uno de estos elementos.  

Todos los elementos que pertenecen a esta seccion deben etiquetarse de forma idéntica con una variacion en funcion
del texto o label que se presentan dentro del mismo card. Esta seccion se trabajar de la misma manera independientemente del tipo de usuario.

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > explora_y_descubre"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/00-explora-y-descubre/global_event.yaml).  

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./00-home/00-explora-y-descubre/).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

### Tu camino al exito
Seccion del app para los ingresantes (Cachimbos). Aqui se trabajan principalmente con los cards que los dirigen hacia las secciones de interes para este grupo de estudiantes.

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:

    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > tu_camino_al_exito"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/02-tu-camino-al-exito/global_event.yaml).  

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./00-home/02-tu-camino-al-exito/).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

## Ayuda
Seccion Ayuda del super app UPC.  

- 📘 `screen_view`: [payload](./02-ayuda/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de ayuda dentro del app. No importa si es la primera o la n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app.  

- 📘 `button_csat_enviar`:  [payload](./02-ayuda/button_csat_enviar.yaml)  
Evento capturado al momento de hacer click en el boton "enviar" en el apartado de la valoracion CSAT que realiza el usuario.

- 📘 `card_explora`: [payload](./02-ayuda/card_explora.yaml)  
Card presente en la pantalla de ayuda (usuario `docente`). El evento busca trackear la accion de click dentro de este elemento.

## Perfil
Seccion Perfil del super app UPC.

- 📘 `screen_view`: [payload](./03-perfil/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de perfil dentro del app. No importa si es la primera o la n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app.  

- 📘 `card_acceso_biometrico`:  [payload](./03-perfil/card_acceso_biometrico.yaml)  
Evento capturado al momento de hacer click en el card "Acceso biometrico" en la seccion de ayuda del app.

---

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).