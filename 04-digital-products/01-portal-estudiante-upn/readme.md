# Documento de Marcación: Portal del Estudiante - UPN
Fecha de creación: 27 Junio 2026  
Fecha última actualización: 27 Junio 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
1. [📂 Avisos](#avisos)
2. [📂 Banner](#banner)
3. [📂 CAD 2](#cad-2)
4. [📂 Cursos y Notas](#cursos-y-notas)
5. [📂 Dashboard](#dashboard)
6. [📂 Documentos](#documentos)
7. [📂 Eventos](#eventos)
8. [📂 Header](#header)
9. [📂 Horario](#horario)
10. [📂 Login](#login)
11. [📂 Mis Servicios](#mis-servicios)
12. [📂 Notificaciones](#notificaciones)
13. [📂 Obligaciones por pagar](#obligaciones-por-pagar)
14. [📂 Pagos](#pagos)
15. [📂 Perfil](#perfil)
16. [📂 Pop up](#pop-up)
17. [📂 Todas](#todas)
18. [📂 Tramites](#tramites)

---

## 🏗️ Arquitectura de Implementación

Para asegurar que todas las interacciones sean atribuidas al alumno correcto, se deben seguir estas reglas de **Sincronización y Persistencia**:

1.  **Prioridad de Datos de Usuario:** El objeto de usuario (definido en [`login.yaml`](./00-login/login.yaml)) debe ser el **primer push** al DataLayer al cargar la aplicación o refrescar la página. Todos los eventos posteriores asumirán automáticamente la identidad de este usuario.

2.  **Prevención de Race Conditions:** Los eventos de `page_view` o interacciones de UI **NO deben dispararse** hasta que la aplicación haya confirmado la sesión del usuario y enviado sus datos al DataLayer.  
    * *Incorrecto:* Disparar `page_view` mientras la API de sesión sigue cargando.  
    * *Correcto:* Esperar la promesa de sesión -> Push User Data -> Push Page View.

3.  **Convención de `ui_label`:** Para este portal se adopta la convención simplificada de usar el nombre de archivo del evento en snake_case como valor de `ui_label` (por ejemplo, `"click_dashboard"`). Esto facilita el mapeo directo con los archivos de definición.

---

## 📂 Avisos
Eventos capturados en la sección de Avisos.

### Eventos detallados

- 📘 `Click/AbrirAvisos-Home`: [payload](./01-home/click_abriravisos_home.yaml) | [guía visual](./guias_visuales/01-home_click_abriravisos_home.md)
    **Descripción:** Este evento mide el clic en los Avisos.

- 📘 `Click/AvisoPopup-Home`: [payload](./01-home/click_avisopopup_home.yaml) | [guía visual](./guias_visuales/01-home_click_avisopopup_home.md)
    **Descripción:** Este evento mide el clic en los Avisos que se cargan en los Pop Up de Avisos.

- 📘 `Click/SliderPopup-AvisosHome`: [payload](./01-home/click_sliderpopup_avisoshome.yaml) | [guía visual](./guias_visuales/01-home_click_sliderpopup_avisoshome.md)
    **Descripción:** Este evento mide el clic en las flechas de navegación que se cargan en los Pop Up de Avisos.


## 📂 Banner
Eventos capturados en la sección de Banner.

### Eventos detallados

- 📘 `Click/Banner-Home`: [payload](./01-home/click_banner_home.yaml) | [guía visual](./guias_visuales/01-home_click_banner_home.md)
    **Descripción:** Este evento mide el clic en el banner en la Home.


## 📂 CAD 2
Eventos capturados en la sección de CAD 2.

### Eventos detallados

- 📘 `Click/home_cursos_cad`: [payload](./08-cad/click_home_cursos_cad.yaml) | [guía visual](./guias_visuales/08-cad_click_home_cursos_cad.md)
    **Descripción:** Este evento mide el clic al modulo de Cursos en la Home de CAD 2.0

- 📘 `Click/popup_cur_home_cad`: [payload](./08-cad/click_popup_cur_home_cad.yaml) | [guía visual](./guias_visuales/08-cad_click_popup_cur_home_cad.md)
    **Descripción:** Este evento mide el clic al levantar el Pop UP de Cursos en la Home de CAD 2.0

- 📘 `Click/home_horario_cad`: [payload](./08-cad/click_home_horario_cad.yaml) | [guía visual](./guias_visuales/08-cad_click_home_horario_cad.md)
    **Descripción:** Este evento mide el clic al modulo de Horario en la Home de CAD 2.0

- 📘 `Click/popup_hor_home_cad`: [payload](./08-cad/click_popup_hor_home_cad.yaml) | [guía visual](./guias_visuales/08-cad_click_popup_hor_home_cad.md)
    **Descripción:** Este evento mide el clic al levantar el Pop UP de Horarios en la Home de CAD 2.0

- 📘 `Click/notas_y_cursos`: [payload](./08-cad/click_notas_y_cursos.yaml) | [guía visual](./guias_visuales/08-cad_click_notas_y_cursos.md)
    **Descripción:** Este evento mide el clic a la interna de Notas y Cursos de CAD 2.0

- 📘 `Click/detalle_notas_y_cursos`: [payload](./08-cad/click_detalle_notas_y_cursos.yaml) | [guía visual](./guias_visuales/08-cad_click_detalle_notas_y_cursos.md)
    **Descripción:** Este evento mide el clic al boton de Detalle del curso la interna de Notas y Cursos de CAD 2.0

- 📘 `Click/notas_notas_y_cursos`: [payload](./08-cad/click_notas_notas_y_cursos.yaml) | [guía visual](./guias_visuales/08-cad_click_notas_notas_y_cursos.md)
    **Descripción:** Este evento mide el clic al boton de Notas del curso la interna de Notas y Cursos de CAD 2.0

- 📘 `Click/recomendaciones_notas_y_cursos`: [payload](./08-cad/click_recomendaciones_notas_y_cursos.yaml) | [guía visual](./guias_visuales/08-cad_click_recomendaciones_notas_y_cursos.md)
    **Descripción:** Este evento mide el clic al boton de Recomendaciones del curso la interna de Notas y Cursos de CAD 2.0

- 📘 `Click/popup_det_cursos_cad`: [payload](./08-cad/click_popup_det_cursos_cad.yaml) | [guía visual](./guias_visuales/08-cad_click_popup_det_cursos_cad.md)
    **Descripción:** Este evento mide el clic al levantar el Pop UP de Cursos en la interna de Cursos de CAD 2.0

- 📘 `Click/horario_semanal`: [payload](./08-cad/click_horario_semanal.yaml) | [guía visual](./guias_visuales/08-cad_click_horario_semanal.md)
    **Descripción:** Este evento mide el clic de Horario Semanal el Pop UP de Cursos en la interna de Cursos de CAD 2.0

- 📘 `Click/ver_horario`: [payload](./08-cad/click_ver_horario.yaml) | [guía visual](./guias_visuales/08-cad_click_ver_horario.md)
    **Descripción:** Este evento mide el clic de boton de Ver Horario Semanal el Pop UP de Cursos en la interna de Cursos de CAD 2.0

- 📘 `Click/popup_ver_horario`: [payload](./08-cad/click_popup_ver_horario.yaml) | [guía visual](./guias_visuales/08-cad_click_popup_ver_horario.md)
    **Descripción:** Este evento mide el clic al levantar el Pop UP de Horarios en la interna de Cursos de CAD 2.0


## 📂 Cursos y Notas
Eventos capturados en la sección de Cursos y Notas.

### Eventos detallados

- 📘 `Click/Modal-CursosyNotas`: [payload](./03-cursos/click_modal_cursosynotas.yaml) | [guía visual](./guias_visuales/03-cursos_click_modal_cursosynotas.md)
    **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

- 📘 `Click/select-programa`: [payload](./03-cursos/click_select_programa.yaml) | [guía visual](./guias_visuales/03-cursos_click_select_programa.md)
    **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.


## 📂 Dashboard
Eventos capturados en la sección de Dashboard.

### Eventos detallados

- 📘 `Click-Dashboard`: [payload](./01-home/click_dashboard.yaml) | [guía visual](./guias_visuales/01-home_click_dashboard.md)
    **Descripción:** Este evento mide los clics a 3 elementos del Home Principal que se llama Dashboard, que son: 

- Notas
- Horario
- Servicio

- 📘 `Click/Modal-Dashboard`: [payload](./01-home/click_modal_dashboard.yaml) | [guía visual](./guias_visuales/01-home_click_modal_dashboard.md)
    **Descripción:** Este evento mide los clics en el icono de agrandar (Levantar el Pop Up) en los cursos, dentro de la lista de Horarios.

- 📘 `Click/Select-HorarioPopup`: [payload](./01-home/click_select_horariopopup.yaml) | [guía visual](./guias_visuales/01-home_click_select_horariopopup.md)
    **Descripción:** Este evento mide el clic en seleccionar profesores en el Pop Up de Curso dentro de Horario.

- 📘 `Click/Remoto-HorarioPopup`: [payload](./01-home/click_remoto_horariopopup.yaml) | [guía visual](./guias_visuales/01-home_click_remoto_horariopopup.md)
    **Descripción:** Este evento mide el clic a la dirección del Aula virtual del Curso Virtual, dentro del Pop Up de Horario.

- 📘 `Click/Desplegable-Dashboard`: [payload](./01-home/click_desplegable_dashboard.yaml) | [guía visual](./guias_visuales/01-home_click_desplegable_dashboard.md)
    **Descripción:** Este evento mide el icono de agrandar (Levantar el Pop Up), dentro de la lista de Notas.


## 📂 Documentos
Eventos capturados en la sección de Documentos.

### Eventos detallados

- 📘 `Click-Documentos`: [payload](./06-documentos/documentos.yaml) | [guía visual](./guias_visuales/06-documentos_documentos.md)
    **Descripción:** Este evento mide el clic general o acceso a la sección de Documentos.

- 📘 `Search/buscador-Documentos`: [payload](./06-documentos/search_documentos.yaml) | [guía visual](./guias_visuales/06-documentos_search_documentos.md)
    **Descripción:** Este evento mide el uso del buscador en la sección de Documentos.

- 📘 `Click/preview-Documentos`: [payload](./06-documentos/click_preview_documentos.yaml) | [guía visual](./guias_visuales/06-documentos_click_preview_documentos.md)
    **Descripción:** Este evento mide el clic en el icono de preview de un documento. 

- 📘 `Click/download-Documentos`: [payload](./06-documentos/click_download_documentos.yaml) | [guía visual](./guias_visuales/06-documentos_click_download_documentos.md)
    **Descripción:** Este evento mide el clic en el icono de Descarga de un documento. 


## 📂 Eventos
Eventos capturados en la sección de Eventos.

### Eventos detallados

- 📘 `Click/Card-Eventos`: [payload](./01-home/click_card_eventos.yaml) | [guía visual](./guias_visuales/01-home_click_card_eventos.md)
    **Descripción:** Este evento mide el clic en los Card de Eventos. 

- 📘 `Click/Boton-Eventos`: [payload](./01-home/click_boton_eventos.yaml) | [guía visual](./guias_visuales/01-home_click_boton_eventos.md)
    **Descripción:** Este evento mide el clic en Registrarse en los Eventos.

- 📘 `Click/Ver-ubicacion`: [payload](./01-home/click_ver_ubicacion.yaml) | [guía visual](./guias_visuales/01-home_click_ver_ubicacion.md)
    **Descripción:** Este evento mide el clic en Ver úbicacion en los Eventos.


## 📂 Header
Eventos capturados en la sección de Header.

### Eventos detallados

- 📘 `Click-MenuHeader`: [payload](./01-home/click_menuheader.yaml) | [guía visual](./guias_visuales/01-home_click_menuheader.md)
    **Descripción:** Este evento mide los clics en el menu que esta en la Cabecera.


## 📂 Horario
Eventos capturados en la sección de Horario.

### Eventos detallados

- 📘 `Click/Select-Horario`: [payload](./03-cursos/click_select_horario.yaml) | [guía visual](./guias_visuales/03-cursos_click_select_horario.md)
    **Descripción:** Este evento mide el cambio de cursos dentro de los Horarios en la sección de Horario.


## 📂 Login
Eventos capturados en la sección de Login.

### Eventos detallados

- 📘 `Login`: [payload](./00-login/login.yaml) | [guía visual](./guias_visuales/00-login_login.md)
    **Descripción:** Este evento se levanta cuando en la Pantalla cuando un Alumno se Loguea a la Plataforma.


## 📂 Mis Servicios
Eventos capturados en la sección de Mis Servicios.

### Eventos detallados

- 📘 `Search-MisServicios`: [payload](./04-servicios/search_misservicios.yaml) | [guía visual](./guias_visuales/04-servicios_search_misservicios.md)
    **Descripción:** Este evento mide el uso del buscador en la sección de Mis Servicios.

- 📘 `Click/Card-MisServicios`: [payload](./04-servicios/click_card_misservicios.yaml) | [guía visual](./guias_visuales/04-servicios_click_card_misservicios.md)
    **Descripción:** Este evento mide el clic en los card de Mis Servicios en la sección de Mis Servicios


## 📂 Notificaciones
Eventos capturados en la sección de Notificaciones.

### Eventos detallados

- 📘 `Click/AbrirNotificaciones`: [payload](./01-home/click_abrirnotificaciones.yaml) | [guía visual](./guias_visuales/01-home_click_abrirnotificaciones.md)
    **Descripción:** Este evento mide los Clic a abrir la notificaciones 

- 📘 `Click/Item-Notificaciones`: [payload](./01-home/click_item_notificaciones.yaml) | [guía visual](./guias_visuales/01-home_click_item_notificaciones.md)
    **Descripción:** Este evento mide los clic a las notificaciones


## 📂 Obligaciones por pagar
Eventos capturados en la sección de Obligaciones por pagar.

### Eventos detallados

- 📘 `Click-VerDetallePago`: [payload](./05-finanzas/click_verdetallepago.yaml) | [guía visual](./guias_visuales/05-finanzas_click_verdetallepago.md)
    **Descripción:** Este evento mide el clic en Ver Detalle de Pago en Obligaciones por Pagar. 

- 📘 `Click-BotonMediosDePagoPopup`: [payload](./05-finanzas/click_botonmediosdepagopopup.yaml) | [guía visual](./guias_visuales/05-finanzas_click_botonmediosdepagopopup.md)
    **Descripción:** Este evento mide el clic en Medios de Pago en cada Pop Up de Obligaciones por Pagar.

- 📘 `Click-Tabs`: [payload](./05-finanzas/click_tabs.yaml) | [guía visual](./guias_visuales/05-finanzas_click_tabs.md)
    **Descripción:** Este evento mide el clic en los tabs de Obligaciones por Pagar y Pagados.

- 📘 `Click-VerMasDetalles`: [payload](./05-finanzas/click_vermasdetalles.yaml) | [guía visual](./guias_visuales/05-finanzas_click_vermasdetalles.md)
    **Descripción:** Este evento mide el clic en el icono de ver más detalle por cada obligación de Obligaciones por Pagar.


## 📂 Pagos
Eventos capturados en la sección de Pagos.

### Eventos detallados

- 📘 `Click/VerPagos-Home`: [payload](./01-home/click_verpagos_home.yaml) | [guía visual](./guias_visuales/01-home_click_verpagos_home.md)
    **Descripción:** Este evento mide el clic en Pagos Home


## 📂 Perfil
Eventos capturados en la sección de Perfil.

### Eventos detallados

- 📘 `Click/Editar-MiPerfil`: [payload](./02-perfil/click_editar_miperfil.yaml) | [guía visual](./guias_visuales/02-perfil_click_editar_miperfil.md)
    **Descripción:** Este evento mide el clic al icono de Editar mi Perfil, dentro de Mi Perfil. 

- 📘 `Search/Editar-MiPerfil`: [payload](./02-perfil/search_editar_miperfil.yaml) | [guía visual](./guias_visuales/02-perfil_search_editar_miperfil.md)
    **Descripción:** Este evento mide el clic a la sección de buscar la información laboral dentro de Mi Perfil.

- 📘 `Click/verificar-celular`: [payload](./02-perfil/click_verificar_celular.yaml) | [guía visual](./guias_visuales/02-perfil_click_verificar_celular.md)
    **Descripción:** Este evento mide el clic a la sección de verificar el número de celular, para hacer el cambio o editar el perfil. 

- 📘 `Click/validar-celular-reenviar-otp`: [payload](./02-perfil/click_validar_celular_reenviar_otp.yaml) | [guía visual](./guias_visuales/02-perfil_click_validar_celular_reenviar_otp.md)
    **Descripción:** Este evento mide el clic a validar el SMS que valida el número de Celular, al cambio de Perfil

- 📘 `Click/EditarFoto-MiPerfil`: [payload](./02-perfil/click_editarfoto_miperfil.yaml) | [guía visual](./guias_visuales/02-perfil_click_editarfoto_miperfil.md)
    **Descripción:** Este evento mide el clic a editar la foto de perfil del alumno.


## 📂 Pop up
Eventos capturados en la sección de Pop up.

### Eventos detallados

- 📘 `Click/PopupBtn-Home`: [payload](./01-home/click_popupbtn_home.yaml) | [guía visual](./guias_visuales/01-home_click_popupbtn_home.md)
    **Descripción:** Este evento mide el clic en el Banner del Pop Up.

- 📘 `Click/PopupCard-Home`: [payload](./01-home/click_popupcard_home.yaml) | [guía visual](./guias_visuales/01-home_click_popupcard_home.md)
    **Descripción:** Este evento mide el clic en el Banner de un Card Pop Up.


## 📂 Todas
Eventos capturados en la sección de Todas.

### Eventos detallados

- 📘 `page_view`: [payload](./00-login/page_view.yaml) | [guía visual](./guias_visuales/00-login_page_view.md)
    **Descripción:** Es el evento que corresponde a que se muestre una vista y/o cambia la URL 

## 📂 Tramites
Eventos capturados en la sección de Tramites.

### Eventos detallados

- 📘 `click_tramites_accion`: [payload](./07-tramites/click_tramites_accion.yaml) | [guía visual](./guias_visuales/07-tramites_click_tramites_accion.md)
    **Descripción:** Este evento mide el clic en los tipos de tramite que se va realizar.

- 📘 `bachiller_seleccionPrograma`: [payload](./07-tramites/bachiller_seleccionprograma.yaml) | [guía visual](./guias_visuales/07-tramites_bachiller_seleccionprograma.md)
    **Descripción:** Este evento mide el clic al programa del tramite que se va a realizar.

- 📘 `bachiller_subirDocumentos`: [payload](./07-tramites/bachiller_subirdocumentos.yaml) | [guía visual](./guias_visuales/07-tramites_bachiller_subirdocumentos.md)
    **Descripción:** Este evento mide el clic en subida de documentos del grado de Bachiller dentro de los tramites que se va a realizar.

- 📘 `bachiller_subidaExitosa`: [payload](./07-tramites/bachiller_subidaexitosa.yaml) | [guía visual](./guias_visuales/07-tramites_bachiller_subidaexitosa.md)
    **Descripción:** Este evento mide el clic en subida Exitosa de documentos del grado de Bachiller dentro de los tramites que se va a realizar.

- 📘 `bachiller_subidaError`: [payload](./07-tramites/bachiller_subidaerror.yaml) | [guía visual](./guias_visuales/07-tramites_bachiller_subidaerror.md)
    **Descripción:** Este evento mide el evento si hay un error en la subida de documentos de documentos del grado de Bachiller dentro de los tramites que se va a realizar.

- 📘 `titulacion_verificacionRequisitos`: [payload](./07-tramites/titulacion_verificacionrequisitos.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_verificacionrequisitos.md)
    **Descripción:** Este evento mide el clic de la verificacion de los requisitos del tramite que se va a realizar en Titulación.

- 📘 `titulacion_preferenciasDiploma`: [payload](./07-tramites/titulacion_preferenciasdiploma.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_preferenciasdiploma.md)
    **Descripción:** Este evento mide el clic de la Preferencias del grado de Titulación dentro de los tramites que se va a realizar.

- 📘 `titulacion_subirDocumentos`: [payload](./07-tramites/titulacion_subirdocumentos.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_subirdocumentos.md)
    **Descripción:** Este evento mide el clic en subida de documentos del grado de Titulación dentro de los tramites que se va a realizar.

- 📘 `titulacion_confirmarComprobante`: [payload](./07-tramites/titulacion_confirmarcomprobante.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_confirmarcomprobante.md)
    **Descripción:** Este evento mide el clic en Confirmar Comprobante de documentos del grado de Titulación dentro de los tramites que se va a realizar.

- 📘 `titulacion_solicitudRegistrada`: [payload](./07-tramites/titulacion_solicitudregistrada.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_solicitudregistrada.md)
    **Descripción:** Este evento mide el evento de Solicitud Registrada del grado de Titulación dentro de los tramites que se va a realizar.

- 📘 `titulacion_solicitudPagada`: [payload](./07-tramites/titulacion_solicitudpagada.yaml) | [guía visual](./guias_visuales/07-tramites_titulacion_solicitudpagada.md)
    **Descripción:** Este evento mide el evento de Solicitud Pagada del grado de Titulación dentro de los tramites que se va a realizar.

- 📘 `click_historial_accion`: [payload](./07-tramites/click_historial_accion.yaml) | [guía visual](./guias_visuales/07-tramites_click_historial_accion.md)
    **Descripción:** Historial de Tramites


