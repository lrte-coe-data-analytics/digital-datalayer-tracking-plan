# Documento de marcación - MVP Convalidador UPN
Fecha de creación: 11 de Febrero 2026  
Fecha última actualización: Agosto 2026

## Tabla de contenido
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [📝 Formulario Principal (Nuevo Flujo)](#-formulario-principal-nuevo-flujo)
3. [📊 Resultados de Simulación (Nuevo Flujo)](#-resultados-de-simulación-nuevo-flujo)
4. [🏠 Inicio ⚠️ DEPRECADO](#-inicio-️-deprecado)
5. [📋 Convalidación ⚠️ DEPRECADO](#-convalidación-️-deprecado)
6. [✅ Convalidación Completa ⚠️ DEPRECADO](#-convalidación-completa-️-deprecado)
7. [⚠️ Error](#-error)

---

## 🏗️ Arquitectura de Implementación

### 🌐 Entornos utilizados

Durante la implementación y validación del tracking se utilizan los siguientes entornos:

- **CERTI:** `https://admision-online-fe-cert-upn.stage02.link/convalidacion/analysis`
- **Desarrollo:** `https://admision-online.upn.edu.pe/convalidacion/analysis`

> **Nota:** El desarrollo y las pruebas funcionales del tracking se realizan sobre el sitio de Educación Continua UPN. La validación técnica de los eventos enviados al `dataLayer` y/o herramientas de analítica se realiza mediante la plataforma CERTI.

---

## 📝 Formulario Principal (Nuevo Flujo)

Formulario único de ingreso de datos para generar la simulación de convalidación. Reemplaza el antiguo flujo dividido de Inicio + Convalidación.

> **Contexto del flujo:** El usuario accede directamente a `/convalidacion/analysis` y se le presenta un único formulario. Independientemente de si selecciona "Completé mi carrera" o "No terminé mi carrera", se muestran los mismos campos (carrera previa, ciclos completados, carrera objetivo en UPN). Al enviar, se muestra la pantalla de resultados.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > formulario_simulacion`
*   **`path_location`**: `/convalidacion/analysis`

### Campos del Formulario
*   **Datos personales:** Nombres, Apellido Paterno, Apellido Materno, DNI/CE, Código BANNER (opcional)
*   **Modalidad \*:** Selección de modalidad (4 opciones)
*   **¿Dónde estudiaste? \*:** Búsqueda/selección de universidad previa
*   **¿Qué estudiaste antes? \*:** Selección de carrera previa
*   **¿Completaste tu carrera? \*:** "Completé mi carrera" / "No terminé mi carrera"
*   **Ciclos completados \*:** Cantidad de ciclos cursados (1–14)
*   **¿Qué quieres estudiar en UPN? \*:** Selección de carrera objetivo UPN

### Eventos

- 📘 `seleccionar-modalidad`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: Valor de la modalidad seleccionada:
        -   `modalidad_semipresencial_trabajador` → "Carrera gente que trabaja - Modalidad Semipresencial"
        -   `modalidad_virtual_trabajador` → "Carrera gente que trabaja - Modalidad Virtual"
        -   `modalidad_semipresencial_pregrado` → "Pregrado Semipresencial"
        -   `modalidad_presencial_pregrado` → "Pregrado Presencial"
    -   **`ui_hierarchy`**: `home > formulario_simulacion`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **`data_collected`**: Modalidad seleccionada

- 📘 `seleccionar_carrera_completada`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: Valor de la opción seleccionada:
        -   `carerra_completada_si` → "Completé mi carrera"
        -   `carrera_completada_no` → "No terminé mi carrera"
    -   **`ui_hierarchy`**: `home > formulario_simulacion`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **`data_collected`**: Opción seleccionada (ambas opciones derivan al mismo sub-flujo de ingreso de datos)

- 📘 `seleccionar_ciclos_completados`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `ciclos_completados_{N}` donde `{N}` es el número de ciclos seleccionado (ej: `ciclos_completados_3` para "3 ciclos")
    -   **`ui_hierarchy`**: `home > formulario_simulacion`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **`data_collected`**: Cantidad de ciclos completados (1–14)

- 📘 `generar_simulacion`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `generar_simulacion` (botón "Generar simulación" al final del formulario)
    -   **`ui_hierarchy`**: `home > formulario_simulacion`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **`data_collected`**: Todos los datos del formulario: nombres, DNI/CE, modalidad, universidad previa, carrera previa, carrera completada (sí/no), ciclos completados, carrera objetivo UPN
    -   **`user_code`**: `{{id_usuario}}` (código de prospecto / Hubspot, si está disponible)

---

## 📊 Resultados de Simulación (Nuevo Flujo)

Pantalla de resultados que se muestra después de enviar el formulario. Incluye las tarjetas de métricas, botón de descarga de simulación y link para repetir la convalidación.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > formulario_simulacion > resultado`
*   **`path_location`**: `/convalidacion/analysis`

### Eventos

- 📘 `visualizar_resultado`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `impression`
    -   **Etiqueta**: `resultado_simulacion`
    -   **`ui_location`**: `navigation`
    -   **`ui_element`**: `result_container`
    -   **`ui_hierarchy`**: `home > formulario_simulacion > resultado`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **`data_collected`**: Métricas mostradas: ciclos convalidados, fecha estimada de graduación, años ahorrados, ciclo de ingreso (nuevo inicio)

- 📘 `descargar_simulacion`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `descargar_simulacion`
    -   **`ui_hierarchy`**: `home > formulario_simulacion > resultado`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **Nota**: Sustituye al evento deprecado `descarga-resultado` de la sección Convalidación.

- 📘 `realizar_otra_convalidacion`
    -   **Evento**: `ui_interaction`
    -   **Acción**: `click`
    -   **Etiqueta**: `realizar_otra_convalidacion`
    -   **`ui_hierarchy`**: `home > formulario_simulacion > resultado`
    -   **`path_location`**: `/convalidacion/analysis`
    -   **Descripción**: Link de texto que reinicia el formulario para realizar una nueva simulación.

---

## 🏠 Inicio ⚠️ DEPRECADO

> ⚠️ **SECCIÓN DEPRECADA** (Actualización 12/08/2026)
>
> **Motivo:** El antiguo botón de "Generar simulación" en la pantalla de inicio ya no existe. Ahora el formulario completo de convalidación se muestra directamente al cargar `/convalidacion/analysis`, y el botón de submit `generar_simulacion` se encuentra al final de dicho formulario (ver sección **Formulario Principal**).

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

## 📋 Convalidación ⚠️ DEPRECADO

> ⚠️ **SECCIÓN DEPRECADA** (Actualización 12/08/2026)
>
> **Motivo:**
> - La carga de récord de notas (`subir-record-notas`) ya no se solicita. El mensaje en la pantalla de resultados indica: *"Muy pronto podrás obtener un resultado más preciso cargando tu récord académico, constancia de egresado u otro documento similar. ¡Estamos trabajando en ello!"*
> - El evento `empezar-analisis` fue reemplazado por el submit del formulario principal.
> - El evento `descarga-resultado` fue movido y renombrado a `descargar_simulacion` dentro de la sección **Resultados de Simulación**.

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

## ✅ Convalidación Completa ⚠️ DEPRECADO

> ⚠️ **SECCIÓN DEPRECADA** (Actualización 12/08/2026)
>
> **Motivo:** Ya no existe un flujo separado de "Convalidación Completa" ni un botón de "Descargar convalidación oficial". La convalidación actual solo entrega una **simulación no oficial**; el banner de resultados indica explícitamente: *"Este NO es un resultado oficial."* La descarga oficial queda en planeamiento para una versión futura.

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
