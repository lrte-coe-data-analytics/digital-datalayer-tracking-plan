# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 22 Enero 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [🔐 Login](#-login)  
3. [🏠 Inicio](#-inicio)
    - [Explora y descubre](#explora-y-descubre)  
    - [Tu camino al exito](#tu-camino-al-exito)  
4. [🛟 Ayuda](#-ayuda)  
5. [👤 Perfil](#-perfil)  
6. [📚 Cursos](#-cursos)  
7. [💳 Finanzas](#-finanzas)  
8. [🪟 Modals](#-modals)  

---

## 🏗️ Arquitectura de Implementación

Para asegurar que todas las interacciones sean atribuidas al alumno correcto, se deben seguir estas reglas de **Sincronización y Persistencia**:

1.  **Prioridad de Datos de Usuario:** El objeto de usuario (definido en [`login.yaml`](./01-login/login.yaml)) debe ser el **primer push** al DataLayer al cargar la aplicación o refrescar la página. Todos los eventos posteriores asumirán automáticamente la identidad de este usuario.

2.  **Prevención de Race Conditions:** Los eventos de `screen_view` o interacciones de UI **NO deben dispararse** hasta que la aplicación haya confirmado la sesión del usuario y enviado sus datos al DataLayer.  
    * *Incorrecto:* Disparar `screen_view` mientras la API de sesión sigue cargando.  
    * *Correcto:* Esperar la promesa de sesión -> Push User Data -> Push Screen View.

---

## 🔐 Login
Eventos que capturan datos relacionados al login en el app (sign-in y sing-up) y la gestión de la sesión.

### Eventos generales

- 📘 `login`: [payload](./01-login/login.yaml)  
    **⚠️ Evento Crítico de Sesión.** Este evento tiene una doble función:
    1.  **Como evento:** Se envía cuando el proceso de validación de credenciales es exitoso.
    2.  **Como estado (Hydration):** Este payload debe enviarse **siempre** al inicio de cada sesión o recarga de página para "recordarle" al DataLayer quién es el usuario actual. Sin este paso, el resto de eventos en el app saldrán como anónimos.

- 📘 `button_login`: [payload](./01-login/button_login.yaml)  
    Evento que captura la interacción específica del clic en el botón "Ingresar". Sirve para medir la intención de acceso antes de la validación.

- 📘 `button_tyc`: [payload](./01-login/button_tyc.yaml)  
    Cuando el usuario hace click en el boton de **aceptar** de los terminos y condiciones. Este proceso se levanta al momento del primer ingreso al app.

- 📘 `modal_pwd_error`: [payload](./01-login/modal_pwd_error.yaml)  
    Cuando se le muestra el modal de error al momento de ingresar la contraseña. Nos sirve para tracking de actividad del usuario con el app.

## 🏠 Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa.

### Home inicio

- 📘 `screen_view`: [payload](./00-home/screen_view.yaml)  
    Este evento se lanza cuando se carga la pantalla de inicio.  
    **Nota de implementación:** Este evento debe esperar a que el payload de `login` (usuario) haya sido procesado para asegurar la atribución correcta.

- 📘 `carousel_banner`: [payload](./00-home/carousel_banner.yaml)  
    Captura la interacción del usuario con el `carousel` de la pantalla de inicio.

- 📘 `card_cachimbo_upc`: [payload](./00-home/card_cachimbo.yaml)  
    Captura la interaccion de **click** del usuario con el card relacionado a **Cachimbo UPC**.

- 📘 `icon_campana`: [payload](./00-home/icon_campana.yaml)  
    Cuando el usuario hace click en la campana de notificaciones.

- 📘 `list_item_notification`: [payload](./00-home/01-notificaciones/list_item_notification.yaml)  
    Cada vez que el usuario haga click en algun elemento de la lista de notificaciones.

### Explora y descubre
Esta sección presenta distintos Cards que permiten navegar a ciertas secciones del app.

- ⚠️ Importancia  
    Estos eventos nos permiten identificar secciones de interes entre los usuarios del app.

- ⚙️ Implementacion  
    Todos los elementos dentro de esta sección deben de contar con los siguientes atributos:  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > explora_y_descubre"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./00-home/00-explora-y-descubre/general_event.yaml).

### Tu camino al exito
Seccion del app para los ingresantes (Cachimbos).

- ⚙️ Implementacion  
    Estructura requerida:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > tu_camino_al_exito"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./00-home/02-tu-camino-al-exito/general_event.yaml).

## 🛟 Ayuda
Seccion Ayuda del super app UPC.  

### Home ayuda

- 📘 `screen_view`: [payload](./02-ayuda/screen_view.yaml)  
    Carga de la pantalla de ayuda. Requiere identificación de usuario previa.

- 📘 `button_csat_enviar`: [payload](./02-ayuda/button_csat_enviar.yaml)  
    Evento capturado al hacer click en "enviar" en la valoración CSAT.

- 📘 `card_explora`: [payload](./02-ayuda/card_explora.yaml)  
    Card presente en la pantalla de ayuda (usuario `docente`).

## 👤 Perfil
Seccion Perfil del super app UPC.

### Home perfil

- 📘 `screen_view`: [payload](./03-perfil/screen_view.yaml)  
    Carga de la pantalla de perfil. Requiere identificación de usuario previa.

- 📘 `card_acceso_biometrico`: [payload](./03-perfil/card_acceso_biometrico.yaml)  
    Evento capturado al momento de hacer click en el card "Acceso biometrico".

## 📚 Cursos
Seccion del app dedicada a los cursos matriculados.

### Home cursos

- 📘 `list_item_curso`: [payload](./04-cursos/list_item_curso.yaml)  
    Click en cualquier elemento de la lista de cursos. Se capturan datos dinámicos como el nombre del curso.

## 💳 Finanzas
Seccion relacionada a documentos y pagos.

### Home finanzas

- ⚙️ Implementacion  
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > finanzas"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./05-finanzas/general_event.yaml).

### Mis pagos pendientes

- 📘 `card_detalle_pago`: [payload](./05-finanzas/00-mis-pagos-pendientes/card_detalle_pago.yaml)  
    Click en cualquier card relacionado a pagos pendientes. Vital para modelos analíticos.

- 📘 `link_portal_upc`: [payload](./05-finanzas/00-mis-pagos-pendientes/link_portal_upc.yaml)  
    Click al enlace que dirige al portal del estudiante.

## 🪟 Modals
Tracking de eventos relacionados a popups o vistas sobrepuestas.

- 📘 `popup_click`: [payload](./06-modals/popup_click.yaml)  
    Interacción dentro del popup.

- 📘 `popup_view`: [payload](./06-modals/popup_view.yaml)  
    Impresión del popup en pantalla.

---

Nota General:  
Todos los eventos listados en este documento heredan automáticamente los atributos del usuario si se respeta la **Arquitectura de Implementación** descrita al inicio. Asegúrese de validar que el `user_id` no sea `undefined` antes de disparar eventos de interacción.