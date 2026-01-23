# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 22 Enero 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [🔐 Login](#-login)  
3. [🏠 Inicio](#-inicio)   
    - [Mis servicios (inicio)](#mis-servicios-inicio)  
    - [Brilla con UPN](#brilla-con-upn)  
    - [Cachimbo UPN](#cachimbo-upn)  
    - [Mis cursos (inicio)](#mis-cursos-inicio)  
4. [🧩 Mis servicios (detalle)](#-mis-servicios-detalle)  
5. [👤 Perfil](#-perfil)  
6. [📰 Informativo](#-informativo)
7. [🛟 Ayuda](#-ayuda)  
8. [🎓 Academico](#-academico)  
    - [Cursos](#cursos)  
    - [Horarios](#horarios)  
9. [🪟 Modals](#-modals)  

---

## 🏗️ Arquitectura de Implementación

Para asegurar que todas las interacciones sean atribuidas al alumno correcto, se deben seguir estas reglas de **Sincronización y Persistencia**:

1.  **Prioridad de Datos de Usuario:** El objeto de usuario (definido en [`login.yaml`](./00-login/login.yaml)) debe ser el **primer push** al DataLayer al cargar la aplicación o refrescar la página. Todos los eventos posteriores asumirán automáticamente la identidad de este usuario.

2.  **Prevención de Race Conditions:** Los eventos de `screen_view` o interacciones de UI **NO deben dispararse** hasta que la aplicación haya confirmado la sesión del usuario y enviado sus datos al DataLayer.  
    * *Incorrecto:* Disparar `screen_view` mientras la API de sesión sigue cargando.  
    * *Correcto:* Esperar la promesa de sesión -> Push User Data -> Push Screen View.

---

## 🔐 Login
Eventos que capturan datos relacionados al login en el app (sign-in y sign-up).

### Eventos generales

- 📘 `login`: [payload](./00-login/login.yaml)  
    **⚠️ Evento Crítico de Sesión.** Este evento tiene una doble función:
    1.  **Como evento:** Se envía cuando el proceso de validación de credenciales es exitoso.
    2.  **Como estado (Hydration):** Este payload debe enviarse **siempre** al inicio de cada sesión o recarga de página para "recordarle" al DataLayer quién es el usuario actual. Sin este paso, el resto de eventos en el app saldrán como anónimos.

- 📘 `button_login`: [payload](./00-login/button_login.yaml)  
    Evento que se envía cuando el proceso de validación de credenciales es exitoso. Dirige al usuario al home. Importante para medir el embudo de ingreso.

- 📘 `button_tyc`: [payload](./00-login/button_tyc.yaml)  
    Cuando el usuario hace click en el botón de **aceptar** de los términos y condiciones. Este proceso se levanta al momento del primer ingreso al app.

## 🏠 Inicio
Pantalla principal del app, aquí se encuentran secciones de interés para navegación directa. Esta sección es el punto de partida para cualquier tipo de navegación dentro del app.

### Eventos generales

- 📘 `screen_view`: [payload](./01-home/screen_view.yaml)  
    Este evento se lanza cuando se carga la pantalla de inicio.  
    **Nota de implementación:** Este evento debe esperar a que el payload de `login` (usuario) haya sido procesado para asegurar la atribución correcta.

- 📘 `icon_campana`: [payload](./01-home/icon_campana.yaml)  
    Click en la campana de notificaciones. Permite la captura de un grado de interés del usuario dentro de su formación académica.

- 📘 `card_cachimbo_upn`: [payload](./01-home/card_cachimbo.yaml)  
    Captura la interacción de **click** del usuario con el card relacionado a **Cachimbo UPN**.

- 📘 `card_brilla`: [payload](./01-home/card_brilla.yaml)  
    Captura la interacción de **click** del usuario con el card relacionado a **Brilla UPN**.

- 📘 `card_ava`: [payload](./01-home/card_ava.yaml)  
    Captura la interacción de **click** del usuario con el card relacionado a **AVA UPN**.

- 📘 `list_item_notification`: [payload](./01-home/02-notificaciones/list_item_notification.yaml)  
    Cada vez que el usuario haga click en algún elemento de la lista de notificaciones dentro del app.

### Mis servicios (inicio)
Esta sección presenta distintos Cards (imágenes + texto) que permiten navegar a ciertas secciones del app.

- ⚠️ Importancia  
    Estos eventos nos permiten identificar secciones de interés entre los usuarios del app.

- ⚙️ Implementación  
    Todos los elementos dentro de esta sección deben de contar con los siguientes atributos:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > mis_servicios"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./01-home/00-mis-servicios/card_general_event.yaml).

### Brilla con UPN
Sección del app que engloba distintos recursos con los que puede interactuar el usuario. En esta se presenta una lista de cards que redirigen a otras secciones que muestran mayor detalle.

- ⚙️ Implementación  
    Estructura requerida:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > brilla_con_upn"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./01-home/01-brilla_con-upn/card_general_event.yaml).

- 📗 Otros eventos  
    - `button_enlace`: [payload](./01-home/01-brilla_con-upn/button_enlace.yaml)  
    Busca trackear el click de enlaces que se encuentran dentro de cada recurso mostrado dentro de la sección.

### Cachimbo UPN
Sección dedicada a cachimbos, muestra actividades y eventos que se dirigen principalmente a este grupo de estudiantes.

- ⚙️ Implementación  
    Estructura requerida:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > cachimbo"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./01-home/03-cachimbo/00-actividades/card_general_event.yaml).

### Mis cursos (inicio)
Esta sección mapea eventos que se pueden realizar desde el menú de inicio (acceso rápido).

- 📗 Eventos  
    - `button_ver_detalle`: [payload](./01-home/04-mis-cursos/button_ver_detalle.yaml)  
    Click en el botón ver detalle del curso desde el home.

    - `button_ver_recomendaciones`: [payload](./01-home/01-brilla_con-upn/button_enlace.yaml)  
    *(Nota: Revisa si este enlace es correcto, actualmente apunta a la carpeta de Brilla)*.

## 🧩 Mis servicios (detalle)
Esta sección **no es la misma** que la sección _mis servicios_ del inicio. Aquí se mapean todos los posibles servicios a los que el estudiante puede acceder.

- ⚙️ Implementación  
    Todos los elementos deben contar con:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "mis_servicios"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./02-mis-servicios/card_general_event.yaml).

## 👤 Perfil
Sección Perfil del super app UPN.

### Eventos generales

- 📘 `button_cerrar_sesion`: [payload](./03-perfil/button_cerrar_sesion.yaml)  
    *(Corregido typo: carpeta `03-perfil`)* Trackeo de cierre de sesión. Importante para limpiar el estado del usuario en el DataLayer.

- 📘 `card_credencial_virtual`: [payload](./03-perfil/card_credencial_virtual.yaml)  
    Ingreso a visualización de la credencial del estudiante.

- 📘 `card_terminos_y_condiciones`: [payload](./03-perfil/card_terminos_y_condiciones.yaml)  
    Visualización de los términos y condiciones del app.

## 📰 Informativo
Sección **Informativo** de la aplicación UPN.

### Eventos generales

- 📘 `screen_view`: [payload](./04-informativo/screen_view.yaml)  
    Carga de la pantalla informativa.

- 📘 `card_correo`: [payload](./04-informativo/card_correo.yaml)  

- 📘 `card_eventos`: [payload](./04-informativo/card_eventos.yaml)  

- 📘 `card_noticias`: [payload](./04-informativo/card_noticias.yaml)  

Para otros elementos no listados, usar el [evento genérico](./04-informativo/card_general_event.yaml).

## 🛟 Ayuda
Sección **Ayuda** de la aplicación UPN.

### Eventos generales

- 📘 `screen_view`: [payload](./05-ayuda/screen_view.yaml)  
    Carga de la pantalla del menú de ayuda.

- 📘 `button_calificar_tiendas`: [payload](./05-ayuda/button_calificar_tiendas.yaml)  
    Enviar calificación del app a las tiendas (Store).

- 📘 `button_enviar_respuesta_csat`: [payload](./05-ayuda/button_enviar_respuesta_csat.yaml)  
    Enviar clasificación CSAT que ha brindado el estudiante.

- 📘 `button_llamar`: [payload](./05-ayuda/00-central-telefonica/button_llamar.yaml)  
    Seguimiento de los clicks a botones de llamadas telefónicas.

- ⚙️ Implementación (Cards Generales)  
    Para el resto de opciones de ayuda usar:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "ayuda"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./05-ayuda/card_general_event.yaml).

## 🎓 Academico

### Eventos generales

- 📘 `screen_view`: [payload](./06-academico/screen_view.yaml)  
    Carga de la sección académica principal.

- 📘 `card_cursos`: [payload](./06-academico/card_cursos.yaml)  

- 📘 `card_horarios`: [payload](./06-academico/card_horarios.yaml)  

- 📘 `card_calendario`: [payload](./06-academico/card_calendario.yaml)  

### Cursos
Sección de cursos dentro del menú **Académico**. Este apartado es distinto al acceso rápido del inicio.

- 📘 `screen_view_curso`: [payload](./06-academico/00-cursos/screen_view_curso.yaml)  
    Vista del detalle del curso.

- 📘 `screen_view_buddy`: [payload](./06-academico/00-cursos/screen_view_buddy.yaml)  
    Visualización de la lista de compañeros de curso.

- 📘 `screen_view_attendance`: [payload](./06-academico/00-cursos/screen_view_attendance.yaml)  
    Visualización del seguimiento de asistencias.

- 📘 `modal_info_curso`: [payload](./06-academico/00-cursos/modal_info_curso.yaml)  
    Interacción con "ver más detalles" del curso.

### Horarios
Eventos relacionado a la interacción con datos sobre horarios.

- 📘 `modal_horario_curso`: [payload](./06-academico/01-horarios/modal_horario_curso.yaml)  
    El usuario visualiza el horario de un curso específico.

- 📘 `link_buzon_msj`: [payload](./06-academico/01-horarios/link_buzon_msj.yaml)  
    El usuario se dirige al buzón de mensajes del curso.

## 🪟 Modals
Tracking de eventos relacionados a popups o vistas sobrepuestas.

- 📘 `popup_click`: [payload](./07-modals/popup_click.yaml)  
    Cuando se hace click en cualquier elemento del popup.

- 📘 `popup_view`: [payload](./07-modals/popup_view.yaml)  
    Permite capturar qué elementos popup se han mostrado al estudiante.

---

Nota:  
Todos los eventos listados en este documento heredan automáticamente los atributos del usuario si se respeta la **Arquitectura de Implementación** descrita al inicio. Asegúrese de validar que el `user_id` no sea `undefined` antes de disparar eventos de interacción.

Los esquemas base se encuentran en: [ui-interaction](../../00-snippets/ui-interaction.yaml) y [logged-user](../../00-snippets/logged-user.yaml).