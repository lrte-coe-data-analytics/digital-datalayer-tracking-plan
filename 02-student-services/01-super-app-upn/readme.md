# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 21 Enero 2026

## Table of content
1. [Login](#-login)  
2. [Inicio](#-inicio)   
    - [Eventos generales](#eventos-generales-1)  
    - [Mis servicios (inicio)](#mis-servicios)  
    - [Brilla con UPN](#brilla-con-upn)  
    - [Cachimbo UPN](#cachimbo-upn)  
    - [Mis cursos (inicio)](#mis-cursos)  
3. [Mis servicios (detalle)](#mis-servicios)  
4. [Perfil](#-perfil)  
5. [Ayuda](#-ayuda)  
6. [Academico](#-academico)  
    - [Eventos generales](#eventos-generales-5)  
    - [Cursos](#cursos)  
    - [Horarios](#horarios)  
7. [Modals](#-modals)  

---

## 🚀 Login
Eventos que capturan datos relacionados al login en el app (sign-in y sing-up).

### Eventos generales

- 📘 `button_login`: [payload](./00-login/button_login.yaml)  
Evento que se envia cuando el proceso de validacion de credenciales es exitoso. Esto dirige al usuario directamente al home pero no se trackea como un screenview debido al evento propio de la seccion. Sin embargo es importante para el seguimiento de usuarios que ingresan al app mediante sus credenciales.

- 📘 `button_tyc`: [payload](./00-login/button_tyc.yaml)  
Cuando el usuario hace click en el boton de **aceptar** de los terminos y condiciones. Este proceso se levanta al momento del primer ingreso al app.

## 🚀 Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa. Esta seccion es el punto de partida para cualquier tipo de navegacion dentro del app.

### Eventos generales

- 📘 `screen_view`: [payload](./01-home/screen_view.yaml)  
Este evento se lanza cuando se carga la pantalla de inicio dentro del app. No importa si es la primera o na n-ésima llegada a esta pantalla, todas las veces que se muestre se enviara un evento. Esto aplica para todos los tipos de usuarios que se encuentran dentro del app. Al ser un evento de usuario previamente loggeado, los datos del login se envia junto con el evento.

- 📘 `icon_campana`: [payload](./01-home/icon_campana.yaml)  
Cuando el usuario hace click en la campana de notificaciones, permite la captura de un grado de interes del usuario dentro de su formacion academica.

- 📘 `card_cachimbo_upn`: [payload](./01-home/card_cachimbo.yaml)  
Captura la interacion de **click** del usuario con el card relacionado a **Cachimbo UPN**.

- 📘 `card_brilla`: [payload](./01-home/card_brilla.yaml)  
Captura la interacion de **click** del usuario con el card relacionado a **Brilla UPN**.

- 📘 `card_ava`: [payload](./01-home/card_ava.yaml)  
Captura la interacion de **click** del usuario con el card relacionado a **AVA UPN**.

- 📘 `list_item_notification`: [payload](./01-home/02-notificaciones/list_item_notification.yaml)  
Cada vez que el usuario haga click en algun elemento de la lista de notificaciones que tiene dentro del app. Solo aplica para las acciones dentro del app (no interaccioens con notificacioens del dispositivo donde se encuentra instalado el app).

### Mis servicios
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
    data-ui-hierarchy = "inicio > mis_servicios"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./01-home/00-mis-servicios/card_general_event.yaml).

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./01-home/00-mis-servicios/).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

### Brilla con UPN
Seccion del app que engloba distintos recursos con los que puede interactuar el usuario. En esta se presenta una lista de cards que redirigen a otras secciones que muestran mayor detalle. Todos los cards deberian etiquetarse de manera identica.

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > brilla_con_upn"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./01-home/01-brilla_con-upn/card_general_event.yaml).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

- 📗 Otros eventos  
    - `button_enlace`: [payload](./01-home/01-brilla_con-upn/button_enlace.yaml)  
    Busca trackear el click de enlaces que se encuntran dentro de cada recurso mostrado dentro de la seccion de **Brilla UPN**.

### Cachimbo UPN
Seccion dedicada a cachimbos, muestra actividades y eventos que se dirigen principalmente a este grupo de estudiantes. 

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > cachimbo"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./01-home/03-cachimbo/00-actividades/card_general_event.yaml). Observar que dentro de Cachimbo hay 2 secciones:  
    - Actividades: se mapean algunos eventos
    - Eventos: no se mapea ningun evento dentro de esta seccion.

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

### Mis cursos
Esta seccion mapea eventos que se puden realizar desde el menu de inicio. No se cruzan con aquellos que se pueden capturar mediante el acceso al menu **academico**.

- ⚠️ Importancia  
Capturar actividades del usuario que puedan mostrar cierto nivel de interes en el curso de su ciclo academico.

- 📗 Eventos  
    - `button_ver_detalle`: [payload](./01-home/04-mis-cursos/button_ver_detalle.yaml)  
    Dentro del home, en la seccion de **Mis cursos**, trackea el click en el boton ver detalle del curso.

    - `button_ver_recomendaciones`: [payload](./01-home/01-brilla_con-upn/button_enlace.yaml)  
    Dentro del home, en la seccion de **Mis cursos**, trackea el click en el boton ver recomendaciones del curso.

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

## 🚀 Mis servicios
Esta seccion no es la misma que la seccion _mis servicios_ dentro de la pantalla de inicio (seccion anterior). Si bien en ambos se muestran opciones repetidas, la forma en la que se trackean es distinta.  
En este apartado se mapean todos los posibles servicios a los que el estudiante puede acceder mediante el app, mientras que en la seccion previa solo se muestra una grilla de algunos servicios. Por este motivo se definen eventos propios para esta seccion.

- ⚠️ Importancia  
Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "mis_servicios"
    data-ui-url       = "{{url_destino}}"
    ```

    Se puede visualizar el payload generico del evento dentro del siguiente fichero de [implementacion](./02-mis-servicios/card_general_event.yaml).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

## 🚀 Perfil
Seccion Perfil del super app UPN. Se muestran elementos que pueden ser repetitivos, pero son una cantidad menor por lo que se presenta una implementacion por cada uno de ellos.

### Eventos generales

- 📘 `button_cerrar_sesion`: [payload](./03-perfl/button_cerrar_sesion.yaml)  
Trackeo de cierre de sesion por parte de los ususarios del app.

- 📘 `card_credencial_virtual`: [payload](./03-perfl/card_credencial_virtual.yaml)  
Ingreso a visualizacion de la credencial del estudiante mediante el app.

- 📘 `card_terminos_y_condiciones`: [payload](./03-perfl/card_terminos_y_condiciones.yaml)  
Visualiazcion de los terminos y condiciones del app (esto no se relaciones con el proceso de login).

## 🚀 Informativo
Seccion **Informativo** de la aplicacion UPN.

### Eventos generales

- 📘 `screen_view`: [payload](./04-informativo/screen_view.yaml)  

- 📘 `card_correo`: [payload](./04-informativo/card_correo.yaml)  

- 📘 `card_eventos`: [payload](./04-informativo/card_eventos.yaml)  

- 📘 `card_noticias`: [payload](./04-informativo/card_noticias.yaml)  

Dentro de esta seccion existen otros elementos que no han sido etiquetados. Si se necesita su seguimiento se puede hacer mediante el [evento generico](./04-informativo/card_general_event.yaml) para el resto de cards dentro de la seccion.

## 🚀 Ayuda
Seccion **Ayuda** de la aplicacion UPN.

### Eventos generales

- 📘 `screen_view`: [payload](./05-ayuda/screen_view.yaml)  
Carga de la pantalla del menu de ayuda.

- 📘 `button_calificar_tiendas`: [payload](./05-ayuda/button_calificar_tiendas.yaml)  
Enviar calificacion del app en el appstore o playstore.

- 📘 `button_enviar_respuesta_csat`: [payload](./05-ayuda/button_enviar_respuesta_csat.yaml)  
Enviar clasificacion CSAT que ha brindado el estudiante.

- 📘 `button_llamar`: [payload](./05-ayuda/00-central-telefonica/button_llamar.yaml)  
Seguimiento de los clicks a los botones que dirigen a algun contacto de ayuda a nivel de centrales telefonicas.

El resto de eventos en esta seccion hacen tracking de la interaccion del usuario con los diversos cards que se encuentran presentes en la sección. Todos los eventos sirven para identificar secciones de interes dentro del app y se pueden programar de manera general mediante el [siguiente evento](./05-ayuda/card_general_event.yaml) en linea con lo siguiente:

- ⚙️ Implementacion  
Todos los elementos dentro de esta sección deben de contar con los siguientes atributos dentro de su
estructura a nivel de código:

    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "ayuda"
    data-ui-url       = "{{url_destino}}"
    ```

    Asimismo, se presentan estructuras rigidas que pueden ser usadas en el caso de que la implementacion parametrica se vea dificultada por algun motivo. Los archivos se pueden encontrar en el siguiente [folder](./05-ayuda/).

- 🩻 Imagenes  
Aqui se presentan vistas detalladas de la ubicacion de la seccion dentro del app.

## 🚀 Academico

### Eventos generales

- 📘 `screen_view`: [payload](./06-academico/screen_view.yaml)  

- 📘 `card_cursos`: [payload](./06-academico/card_cursos.yaml)  

- 📘 `card_horarios`: [payload](./06-academico/card_horarios.yaml)  

- 📘 `card_calendario`: [payload](./06-academico/card_calendario.yaml)  

### Cursos
Seccion de cursos dentro del menu **Academico**. Este apartado de cursos es distinto al apartado de cursos que se puede observar dentro del menu **inicio**.

- 📘 `screen_view_curso`: [payload](./06-academico/screen_view_curso.yaml)  
Vista del detalle del curso, importante para seguimiento y calculo del grado de interés.

- 📘 `screen_view_buddy`: [payload](./06-academico/screen_view_buddy.yaml)  
Visalizacion de la lista de compañeros con los que se lleva el mismo curso.

- 📘 `screen_view_attendance`: [payload](./06-academico/screen_view_attendance.yaml)  
Visualizacion del seguimiento de asistencias que se tiene para un curso especifico.

- 📘 `modal_info_curso`: [payload](./06-academico/modal_info_curso.yaml)  
Cuando se interactua con la seccion **ver mas detalles** del curso.

### horarios
Eventos relacionado a la interaccion con datos sobre horarios del curso. Importante para determinar un indicador de interes del estudiante.

- 📘 `modal_horario_curso`: [payload](./06-academico/modal_horario_curso.yaml)  
El usuario visualiza el horario de un curso especifico.

- 📘 `link_buzon_msj`: [payload](./06-academico/link_buzon_msj.yaml)  
El usuario se dirige al buzon de mensajes de un curso especifico.

## 🚀 Modals
Tracking de eventos relacionados a modals que pueden aparecer dentro del app. Un modal se presenta como una pantalla pero sobrepuesta sobre otra pantalla principal. Estas "vistas" no deben ser trackeadas como paginas o pantallas debido a que causan calculos erroneos a nivel de rebote o navegacion.  
Los modals generalmente suelen ser `popups` o secciones del app que requieran de cierta accion del usuario sin modificar la pantalla o vista principal.

- 📘 `popup_click`: [payload](./07-modals/popup_click.yaml)  
Cuando se hace click en cualquier elemento del popup. Captura datos sobre que se ha mostrado y permite hacer un tracking a nivel de comunicaciones importantes.

- 📘 `popup_view`: [payload](./07-modals/popup_view.yaml)  
Permite capturar que elementos popup se han mostrado al estudiante. Con estos datos podemos validar datos de campañas o de intereses de los usuarios cuando usan el app.


---

Nota:  
La implementacion de este codigo esa basado en la estructura generica del evento [ui-interaction](../../00-snippets/ui-interaction.yaml) con algunas modificaciones de ser necesario. Todos estos eventos se pueden ver complementados tambien por la estructura de [datos de usuario loggeado](../../00-snippets/logged-user.yaml).