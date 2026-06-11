# Documento de marcación - MVP Convalidador UPN
Fecha de creacion: 11 de febreo 2026  
Fecha ultima actualizacion: 11 Febrero 2026

## Tabla de contenido
1. [🚀 Flujo Express](#-flujo-express)
2. [📋 Flujo Completo](#-flujo-completo)

---

## 🚀 Flujo Express
Eventos relacionados con el proceso de validación rápida (respuesta "No").

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > flujo_express`
*   **`path_location`**: `/`

### Eventos
- 📘 `pasos`: [payload](./00-flujo-express/pasos.yaml)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click` en botón "No".
    -   **Etiqueta**: `no`

- 📘 `resultado`: [payload](./00-flujo-express/resultado.yaml)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `impression` de la ventana modal de resultado.
    -   **Etiqueta**: `resultado`

## 📋 Flujo Completo
Eventos relacionados con el proceso de validación completa (respuesta "Sí").

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > flujo_completo`
*   **`path_location`**: `/`

### Eventos
- 📘 `paso-inicial`: [payload](./01-flujo-completo/paso-inicial.yaml)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click` en botón "Sí".
    -   **Etiqueta**: `si`

- 📘 `pasos`: [payload](./01-flujo-completo/pasos.yaml)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click` en botones del formulario (ej. subir sílabus, empezar análisis).
    -   **Etiqueta**: Dinámica `{{text formulario}}`

- 📘 `resultado`: [payload](./01-flujo-completo/resultado.yaml)
    -   **Evento**: `ui_interaction`
    -   **Acción**: `impression` de la ventana modal de resultado.
    -   **Etiqueta**: `resultado`
    -   **Nota**: En el archivo original la jerarquía aparece como `flujo_express` (posible error), aquí se documenta como parte del `flujo_completo`.
