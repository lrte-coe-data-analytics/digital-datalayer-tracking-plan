# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 21 Enero 2026

## Table of content
1. [Login](#-login)  
2. [Inicio](#-inicio)
    - [Explora y descubre](#explora-y-descubre)  
    - [Tu camino al exito](#tu-camino-al-exito)  

3. [Ayuda](#-ayuda)  
4. [Cursos](#-cursos)  
5. [Finanzas](#-finanzas)  
6. [Modals](#-modals)  

---

## 🚀 Login
Eventos que capturan datos relacionados al login en el app (sign-in y sing-up).

### Eventos generales

- 📘 `login: [payload](./01-login/login.yaml)  
Evento que se envia cuando el proceso de validacion de credenciales es exitoso. Esto dirige al usuario directamente al home pero no se trackea como un screenview sino que sirve para tracking de credenciales de usuario a lo largo de la sesion.

- 📘 `button_login`: [payload](./01-login/button_login.yaml)  
Evento que se envia cuando el proceso de validacion de credenciales es exitoso. Esto dirige al usuario directamente al home pero no se trackea como un screenview debido al evento propio de la seccion. Sin embargo es importante para el seguimiento de usuarios que ingresan al app mediante sus credenciales.

- 📘 `button_tyc`: [payload](./01-login/button_tyc.yaml)  
Cuando el usuario hace click en el boton de **aceptar** de los terminos y condiciones. Este proceso se levanta al momento del primer ingreso al app.

- 📘 `modal_pwd_error`: [payload](./01-login/modal_pwd_error.yaml)  
Cuando se le muestra el modal de error al momento de ingresar la contraseña. Nos sirve para tracking de activida del usuario con el app.

## 🚀 Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa. Esta seccion es el punto de partida para cualquier tipo de navegacion dentro del app.

### Home inicio

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

- 📘 `list_item_notification`: [payload](./00-home/01-notificaciones/list_item_notification.yaml)  
Cada vez que el usuario haga click en algun elemento de la lista de notificaciones que tiene dentro del app. Solo aplica para las acciones dentro del app (no interaccioens con notificacioens del dispositivo donde se encuentra instalado el app).

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

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/00-explora-y-descubre/general_event.yaml).

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

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./00-home/02-tu-camino-al-exito/general_event.yaml).  

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./00-home/02-tu-camino-al-exito/).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

## 🚀 Ayuda
Seccion Ayuda del super app UPC.  

### Home ayuda

- 📘 `screen_view`: [payload](./02-ayuda/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de ayuda dentro del app. No importa si es la primera o la n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app.

- 📘 `button_csat_enviar`:  [payload](./02-ayuda/button_csat_enviar.yaml)  
Evento capturado al momento de hacer click en el boton "enviar" en el apartado de la valoracion CSAT que realiza el usuario.

- 📘 `card_explora`: [payload](./02-ayuda/card_explora.yaml)  
Card presente en la pantalla de ayuda (usuario `docente`). El evento busca trackear la accion de click dentro de este elemento.

## 🚀 Perfil
Seccion Perfil del super app UPC.

### Home perfil

- 📘 `screen_view`: [payload](./03-perfil/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de perfil dentro del app. No importa si es la primera o la n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app.

- 📘 `card_acceso_biometrico`:  [payload](./03-perfil/card_acceso_biometrico.yaml)  
Evento capturado al momento de hacer click en el card "Acceso biometrico" en la seccion de ayuda del app.

## 🚀 Cursos
Seccion del app dedicada exclusivamene a los cursos en los que se encuentra matriculado el usuario al momento de su navegacion por el app. Todos estos eventos solo se lanzan cuando el usuario se encuentra dentro de la seccion de CURSOS (click en el card que dirige hacia esta seccion).

### Home cursos

- 📘 `list_item_curso`:  [payload](./04-cursos/list_item_curso.yaml)  
Evento que se captura cuando el usuario hace click en cualquier elemento de la lista de cursos que se le presenta dentro de la pantalla principal de cursos. Se capturan algunos datos dinamicos como el nombre del curso.

## 🚀 Finanzas
Seccion del app dedicado a los temas relacionados con los documentos emitidos hacia el usuario. Se accede mediante la interaccion con el card de finanzas.

### Home finanzas
Pantalla principal al momento de ingresar a la seccion de finanzas.

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:

    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > finanzas"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./05-finanzas/general_event.yaml).

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./05-finanzas).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

### Mis pagos pendientes
Pantalla principal al momento de dar click al card de Mis cuotas pendientes. Aqui se muestra una serie de cards indicando los pagos que tiene por pagar el usuario.

- 📘 `card_detalle_pago`: [payload](./05-finanzas/00-mis-pagos-pendientes/card_detalle_pago.yaml)  
Se captura al momento en que el usuario le da click a cualquier card relacionado a sus pagos pendientes (todos los cards denro de la seccion `home > finanzas > mis_pagos_pendientes`). Esto es de vital importancia para la identificacion de features de interes en los modelos analiticos.

- 📘 `link_portal_upc`: [payload](./05-finanzas/00-mis-pagos-pendientes/link_portal_upc.yaml)  
Cuando se da click al enlace que dirige al portal del estudiante para hacer los pagos correspondientes. De importancia para levantar datos de interes del usuario.

## 🚀 Modals
Tracking de eventos relacionados a modals que pueden aparecer dentro del app. Un modal se presenta como una pantalla pero sobrepuesta sobre otra pantalla principal. Estas "vistas" no deben ser trackeadas como paginas o pantallas debido a que causan calculos erroneos a nivel de rebote o navegacion.  
Los modals generalmente suelen ser `popups` o secciones del app que requieran de cierta accion del usuario sin modificar la pantalla o vista principal.

- 📘 `popup_click`: [payload](./06-modals/popup_click.yaml)  
Cuando se hace click en cualquier elemento del popup. Captura datos sobre que se ha mostrado y permite hacer un tracking a nivel de comunicaciones importantes.

- 📘 `popup_view`: [payload](./06-modals/popup_view.yaml)  
Permite capturar que elementos popup se han mostrado al estudiante. Con estos datos podemos validar datos de campañas o de intereses de los usuarios cuando usan el app.


---

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).