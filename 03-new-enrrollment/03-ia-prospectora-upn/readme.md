# Documento de marcación - IA Prospectora UPN
Fecha de creación: 11 de Febrero 2026  
Fecha última actualización: 16 de Junio 2026

## Tabla de contenido
1. [🏠 Home](#-home)
2. [📝 Registro](#-registro)
3. [📁 Documentos](#-documentos)
4. [💳 Pagos](#-pagos)
5. [⚠️ Error](#-error)

---

## 🏠 Home
Eventos relacionados con la página de inicio.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home`
*   **`path_location`**: `/`

### Eventos
- 📘 `inicio`: [payload](./00-home/inicio.yaml) | [guía visual](./guias_visuales/00-home_inicio.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `inicia`

---

## 📝 Registro
Eventos del formulario de registro del alumno.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > registro`
*   **`path_location`**: `/registro`

### Eventos
- 📘 `check-condiciones`: [payload](./01-registro/check-condiciones.yaml) | [guía visual](./guias_visuales/01-registro_check-condiciones.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: Campo dinámico de autorización (ej. `TC`, `Comunicaciones`, etc.)

- 📘 `registro-alumno`: [payload](./01-registro/registro-alumno.yaml) | [guía visual](./guias_visuales/01-registro_registro-alumno.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `continuar`

---

## 📁 Documentos
Eventos de carga y aceptación de documentos.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > documentos`
*   **`path_location`**: `/documentos`

### Eventos
- 📘 `check-declaraciones`: [payload](./02-documentos/check-declaraciones.yaml) | [guía visual](./guias_visuales/02-documentos_check-declaraciones.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: Campo dinámico de autorización de documentos/juramentos.

- 📘 `subir-dni`: [payload](./02-documentos/subir-dni.yaml) | [guía visual](./guias_visuales/02-documentos_subir-dni.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `subir_dni`

- 📘 `subir-record-notas`: [payload](./02-documentos/subir-record-notas.yaml) | [guía visual](./guias_visuales/02-documentos_subir-record-notas.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `subir_record_notas`

- 📘 `continuar-documentos`: [payload](./02-documentos/continuar-documentos.yaml) | [guía visual](./guias_visuales/02-documentos_continuar-documentos.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `continuar`

---

## 💳 Pagos
Eventos relacionados con el proceso de pagos.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > pagos`
*   **`path_location`**: `/pagos`

### Eventos
- 📘 `check-tipo-pago`: [payload](./03-pagos/check-tipo-pago.yaml) | [guía visual](./guias_visuales/03-pagos_check-tipo-pago.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: Campo dinámico de selección de tipo de pago (ej. `Matrícula Completa`, `Derecho de Admisión`, etc.)

- 📘 `continuar-pagos`: [payload](./03-pagos/continuar-pagos.yaml) | [guía visual](./guias_visuales/03-pagos_continuar-pagos.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `continuar`

---

## ⚠️ Error
Modal de error del sistema.

### Eventos
- 📘 `error`: [payload](./04-error/error.yaml) | [guía visual](./guias_visuales/04-error_error.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `Ir a WhatsApp`
