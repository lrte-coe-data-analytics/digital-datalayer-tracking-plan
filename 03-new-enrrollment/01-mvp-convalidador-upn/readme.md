# Documento de marcación - MVP Convalidador UPN
Fecha de creación: 11 de Febrero 2026  
Fecha última actualización: 16 de Junio 2026

## Tabla de contenido
1. [🏠 Inicio](#-inicio)
2. [📋 Convalidación](#-convalidación)
3. [✅ Convalidación Completa](#-convalidación-completa)
4. [⚠️ Error](#-error)

---

## 🏠 Inicio
Eventos iniciales para comenzar el flujo de convalidación.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home`
*   **`path_location`**: `/`

### Eventos
- 📘 `paso-inicial`: [payload](./00-inicio/paso-inicial.yaml) | [guía visual](./guias_visuales/00-inicio_paso-inicial.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `generar_simulacion`

---

## 📋 Convalidación
Eventos que ocurren durante el proceso de análisis y carga de notas.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > convalidacion`
*   **`path_location`**: `/convalidacion`

### Eventos
- 📘 `subir-record-notas`: [payload](./01-convalidacion/subir-record-notas.yaml) | [guía visual](./guias_visuales/01-convalidacion_subir-record-notas.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `subir_record_notas`

- 📘 `empezar-analisis`: [payload](./01-convalidacion/empezar-analisis.yaml) | [guía visual](./guias_visuales/01-convalidacion_empezar-analisis.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `empezar_analisis`

- 📘 `descarga-resultado`: [payload](./01-convalidacion/descarga-resultado.yaml) | [guía visual](./guias_visuales/01-convalidacion_descarga-resultado.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `descargar_simulacion`

---

## ✅ Convalidación Completa
Eventos relacionados con la finalización del flujo y descarga oficial.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > convalidacion > completa`
*   **`path_location`**: `/convalidacion-completa`

### Eventos
- 📘 `descarga-convalidacion-oficial`: [payload](./02-convalidacion-completa/descarga-convalidacion-oficial.yaml) | [guía visual](./guias_visuales/02-convalidacion-completa_descarga-convalidacion-oficial.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `descargar_resultados`

---

## ⚠️ Error
Mensajes de error del sistema.

### ⚙️ Estructura de Datos
*   **`ui_location`**: `modal_window`
*   **`ui_element`**: `modal_window`

### Eventos
- 📘 `error`: [payload](./03-error/error.yaml) | [guía visual](./guias_visuales/03-error_error.md)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `entendido`
