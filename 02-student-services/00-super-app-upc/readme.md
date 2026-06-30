# Documento de marcación
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 22 Enero 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [🔐 Login](#-login)  
3. [🏠 Inicio](#-inicio)
    - [Explora y descubre](#explora-y-descubre)  
    - [Cachimbo](#cachimbo)  
    - [Dashboard](#dashboard)  
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

- 📘 `login`: [payload](./01-login/login.yaml) | [guía visual](./guias_visuales/01-login_login.md)  
    **⚠️ Evento Crítico de Sesión.** Este evento tiene una doble función:
    1.  **Como evento:** Se envía cuando el proceso de validación de credenciales es exitoso.
    2.  **Como estado (Hydration):** Este payload debe enviarse **siempre** al inicio de cada sesión o recarga de página para "recordarle" al DataLayer quién es el usuario actual. Sin este paso, el resto de eventos en el app saldrán como anónimos.

- 📘 `button_login`: [payload](./01-login/button_login.yaml) | [guía visual](./guias_visuales/01-login_button_login.md)  
    Evento que captura la interacción específica del clic en el botón "Ingresar". Sirve para medir la intención de acceso antes de la validación.

- 📘 `button_tyc`: [payload](./01-login/button_tyc.yaml) | [guía visual](./guias_visuales/01-login_button_tyc.md)  
    Cuando el usuario hace click en el boton de **aceptar** de los terminos y condiciones. Este proceso se levanta al momento del primer ingreso al app.

- 📘 `modal_pwd_error`: [payload](./01-login/modal_pwd_error.yaml) | [guía visual](./guias_visuales/01-login_modal_pwd_error.md)  
    Cuando se le muestra el modal de error al momento de ingresar la contraseña. Nos sirve para tracking de actividad del usuario con el app.

## 🏠 Inicio
Pantalla principal del app, aqui se encuentran secciones de interes para navegacion directa.

### Home inicio

- 📘 `screen_view`: [payload](./00-home/screen_view.yaml) | [guía visual](./guias_visuales/00-home_screen_view.md)  
    Este evento se lanza cuando se carga la pantalla de inicio.  
    **Nota de implementación:** Este evento debe esperar a que el payload de `login` (usuario) haya sido procesado para asegurar la atribución correcta.

- 📘 `carousel_banner`: [payload](./00-home/carousel_banner.yaml) | [guía visual](./guias_visuales/00-home_carousel_banner.md)  
    Captura la interacción del usuario con el `carousel` de la pantalla de inicio.

- 📘 `card_cachimbo_upc`: [payload](./00-home/card_cachimbo.yaml) | [guía visual](./guias_visuales/00-home_card_cachimbo.md)  
    Captura la interaccion de **click** del usuario con el card relacionado a **Cachimbo UPC**.

- 📘 `icon_campana`: [payload](./00-home/icon_campana.yaml) | [guía visual](./guias_visuales/00-home_icon_campana.md)  
    Cuando el usuario hace click en la campana de notificaciones.

- 📘 `list_item_notification`: [payload](./00-home/01-notificaciones/list_item_notification.yaml) | [guía visual](./guias_visuales/00-home_01-notificaciones_list_item_notification.md)  
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

- 📘 `card_cursos`: [payload](./00-home/00-explora-y-descubre/card_cursos.yaml) | [guía visual](./guias_visuales/00-home_00-explora-y-descubre_card_cursos.md)  
    Click en el card Cursos en la sección Explora y descubre.

- 📘 `card_finanzas`: [payload](./00-home/00-explora-y-descubre/card_finanzas.yaml) | [guía visual](./guias_visuales/00-home_00-explora-y-descubre_card_finanzas.md)  
    Click en el card Finanzas en la sección Explora y descubre.

- 📘 `card_informativo`: [payload](./00-home/00-explora-y-descubre/card_informativo.yaml) | [guía visual](./guias_visuales/00-home_00-explora-y-descubre_card_informativo.md)  
    Click en el card Informativo en la sección Explora y descubre.

- 📘 `card_noticias`: [payload](./00-home/00-explora-y-descubre/card_noticias.yaml) | [guía visual](./guias_visuales/00-home_00-explora-y-descubre_card_noticias.md)  
    Click en el card Noticias en la sección Explora y descubre.

- 📘 `card_reservas`: [payload](./00-home/00-explora-y-descubre/card_reservas.yaml) | [guía visual](./guias_visuales/00-home_00-explora-y-descubre_card_reservas.md)  
    Click en el card Reservas en la sección Explora y descubre.

### Cachimbo
Sección del app para los ingresantes (Cachimbos).

- ⚙️ Implementacion  
    Estructura requerida:
    ```js
    data-ui-element   = "card"
    data-ui-label     = "{{card_label}}"
    data-ui-hierarchy = "inicio > cachimbo"
    data-ui-url       = "{{url_destino}}"
    ```
    [Ver payload genérico](./00-home/02-cachimbo/general_event.yaml).

- 📘 `card_descubre_upc`: [payload](./00-home/02-cachimbo/card_descubre_upc.yaml) | [guía visual](./guias_visuales/00-home_02-cachimbo_card_descubre_upc.md)  
    Click en el card Descubre UPC en la sección Cachimbo.

- 📘 `card_queremos_conocerte`: [payload](./00-home/02-cachimbo/card_queremos_conocerte.yaml) | [guía visual](./guias_visuales/00-home_02-cachimbo_card_queremos_conocerte.md)  
    Click en el card Queremos Conocerte en la sección Cachimbo.

### Dashboard
Sección principal que consolida información de cursos y horarios.

- 📘 `widget_cursos`: [payload](./00-home/03-dashboard/widget_cursos.yaml) | [guía visual](./guias_visuales/00-home_03-dashboard_widget_cursos.md)  
    Click en el widget Cursos en la sección Dashboard.

- 📘 `widget_horarios`: [payload](./00-home/03-dashboard/widget_horarios.yaml) | [guía visual](./guias_visuales/00-home_03-dashboard_widget_horarios.md)  
    Click en el widget Horarios en la sección Dashboard.

## 🛟 Ayuda
Seccion Ayuda del super app UPC.  

### Home ayuda

- 📘 `screen_view`: [payload](./02-ayuda/screen_view.yaml) | [guía visual](./guias_visuales/02-ayuda_screen_view.md)  
    Carga de la pantalla de ayuda. Requiere identificación de usuario previa.

- 📘 `button_csat_enviar`: [payload](./02-ayuda/button_csat_enviar.yaml) | [guía visual](./guias_visuales/02-ayuda_button_csat_enviar.md)  
    Evento capturado al hacer click en "enviar" en la valoración CSAT.

- 📘 `card_explora`: [payload](./02-ayuda/card_explora.yaml) | [guía visual](./guias_visuales/02-ayuda_card_explora.md)  
    Card presente en la pantalla de ayuda (usuario `docente`).

## 👤 Perfil
Seccion Perfil del super app UPC.

### Home perfil

- 📘 `screen_view`: [payload](./03-perfil/screen_view.yaml) | [guía visual](./guias_visuales/03-perfil_screen_view.md)  
    Carga de la pantalla de perfil. Requiere identificación de usuario previa.

- 📘 `card_acceso_biometrico`: [payload](./03-perfil/card_acceso_biometrico.yaml) | [guía visual](./guias_visuales/03-perfil_card_acceso_biometrico.md)  
    Evento capturado al momento de hacer click en el card "Acceso biometrico".

## 📚 Cursos
Seccion del app dedicada a los cursos matriculados.

### Home cursos

- 📘 `list_item_curso`: [payload](./04-cursos/list_item_curso.yaml) | [guía visual](./guias_visuales/04-cursos_list_item_curso.md)  
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

- 📘 `card_consulta_comprobantes`: [payload](./05-finanzas/card_consulta_comprobantes.yaml) | [guía visual](./guias_visuales/05-finanzas_card_consulta_comprobantes.md)  
    Click en el card de Consulta de Comprobantes.

- 📘 `card_facturacion`: [payload](./05-finanzas/card_facturacion.yaml) | [guía visual](./guias_visuales/05-finanzas_card_facturacion.md)  
    Click en el card de Facturación.

- 📘 `card_pagos_pendientes`: [payload](./05-finanzas/card_pagos_pendientes.yaml) | [guía visual](./guias_visuales/05-finanzas_card_pagos_pendientes.md)  
    Click en el card de Mis Pagos Pendientes.

### Mis pagos pendientes

- 📘 `card_detalle_pago`: [payload](./05-finanzas/00-mis-pagos-pendientes/card_detalle_pago.yaml) | [guía visual](./guias_visuales/05-finanzas_00-mis-pagos-pendientes_card_detalle_pago.md)  
    Click en cualquier card relacionado a pagos pendientes. Vital para modelos analíticos.

- 📘 `link_portal_upc`: [payload](./05-finanzas/00-mis-pagos-pendientes/link_portal_upc.yaml) | [guía visual](./guias_visuales/05-finanzas_00-mis-pagos-pendientes_link_portal_upc.md)  
    Click al enlace que dirige al portal del estudiante.

## 🪟 Modals
Tracking de eventos relacionados a popups o vistas sobrepuestas.

- 📘 `popup_click`: [payload](./06-modals/popup_click.yaml) | [guía visual](./guias_visuales/06-modals_popup_click.md)  
    Interacción dentro del popup.

- 📘 `popup_view`: [payload](./06-modals/popup_view.yaml) | [guía visual](./guias_visuales/06-modals_popup_view.md)  
    Impresión del popup en pantalla.

---

Nota General:  
Todos los eventos listados en este documento heredan automáticamente los atributos del usuario si se respeta la **Arquitectura de Implementación** descrita al inicio. Asegúrese de validar que el `user_id` no sea `undefined` antes de disparar eventos de interacción.