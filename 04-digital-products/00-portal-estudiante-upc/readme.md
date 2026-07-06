# Documento de Marcación: Portal del Estudiante - UPC
Fecha de creación: 27 Junio 2026  
Fecha última actualización: 27 Junio 2026

## Table of content
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
1. [📂 Avisos](#avisos)
2. [📂 Banner](#banner)
3. [📂 Cursos y Notas](#cursos-y-notas)
4. [📂 Dashboard](#dashboard)
5. [📂 Documentos](#documentos)
6. [📂 Eventos](#eventos)
7. [📂 Header](#header)
8. [📂 Horario](#horario)
9. [📂 Login](#login)
10. [📂 Mis Servicios](#mis-servicios)
11. [📂 Notificaciones](#notificaciones)
12. [📂 Obligaciones por pagar](#obligaciones-por-pagar)
13. [📂 Pagos](#pagos)
14. [📂 Perfil](#perfil)
15. [📂 Pop up](#pop-up)
16. [📂 Todas](#todas)


3.  **Convención `ui_label`:** En este proyecto, `ui_label` contiene el identificador del evento (nombre del archivo sin extensión, ej. `"click_dashboard"`). Esta convención facilita el mapeo directo entre el data layer y el archivo de especificación.

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


## 📂 Cursos y Notas
Eventos capturados en la sección de Cursos y Notas.

### Eventos detallados

- 📘 `Click-Tabs`: [payload](./03-cursos/click_tabs.yaml) | [guía visual](./guias_visuales/03-cursos_click_tabs.md)
    **Descripción:** Este evento mide los clics en los Tabs de la interna de la sección de Cursos y Notas.

- 📘 `Click/Modal-CursosyNotas`: [payload](./03-cursos/click_modal_cursosynotas.yaml) | [guía visual](./guias_visuales/03-cursos_click_modal_cursosynotas.md)
    **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

- 📘 `Click/Abrir-CursosyNotas`: [payload](./03-cursos/click_abrir_cursosynotas.yaml) | [guía visual](./guias_visuales/03-cursos_click_abrir_cursosynotas.md)
    **Descripción:** Este evento mide los clics en los botones (Detalles, Asistencias y Notas) en cada curso, dentro de la lista de cursos en la sección de Cursos y Notas.

- 📘 `Click/select-programa`: [payload](./03-cursos/click_select_programa.yaml) | [guía visual](./guias_visuales/03-cursos_click_select_programa.md)
    **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

- 📘 `Click/VerMasDetalles`: [payload](./03-cursos/click_vermasdetalles.yaml) | [guía visual](./guias_visuales/03-cursos_click_vermasdetalles.md)
    **Descripción:** Este evento mide los clics en Ver más Detalle de Cursos que se encuentra en la interna de la sección de Cursos y Notas.


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

