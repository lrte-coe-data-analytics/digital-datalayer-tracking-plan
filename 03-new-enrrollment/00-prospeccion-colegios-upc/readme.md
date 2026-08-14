# Documento de marcación - Prospección Colegios UPC
Fecha de creación: 17 Enero 2026  
Fecha última actualización: Agosto 2026

## Tabla de contenido
1. [🏗️ Arquitectura de Implementación](#-arquitectura-de-implementación)
2. [📝 Registro](#-registro)
3. [🎮 Nivel 1 (Preguntas de Autoconocimiento)](#-nivel-1-preguntas-de-autoconocimiento)
4. [🧠 Test de Autoconocimiento](#-test-de-autoconocimiento)
5. [🤖 5 Niveles (Explora, Visualiza, Imagina, Globalizate con Chatbot; Transforma con Video y Descarga)](#-5-niveles-explora-visualiza-imagina-globalizate-con-chatbot-transforma-con-video-y-descarga)
6. [⭐ CSAT y Emociones](#-csat-y-emociones)

---

## 🏗️ Arquitectura de Implementación

### 🌐 Entornos utilizados

Durante la implementación y validación del tracking se utilizan los siguientes entornos:

- **CERTI:** https://colegios-prospeccion-fe-cert-upc.stage02.link/
- **Desarrollo:** https://decidetufuturo.upc.edu.pe/

> **Nota:** El desarrollo y las pruebas funcionales del tracking se realizan sobre el sitio de Prospección Colegios UPC. La validación técnica de los eventos enviados al `dataLayer` y/o herramientas de analítica se realiza mediante la plataforma CERTI.

---

## 📝 Registro
Eventos relacionados con el proceso de registro e identificación del usuario.
**Nota Importante:** Los usuarios que ingresan a la plataforma son navegantes anónimos (`anonymous`) hasta que se registran o inician sesión. En ese momento (`login` o `registro_exitoso`) se envía el `user_code`, que corresponde al ID de HubSpot que identifica al usuario y permite la trazabilidad.

### ⚙️ Estructura de Datos
Los eventos de registro comparten parámetros clave para la identificación:
*   **`event`**: `ui_interaction` (Estándar).
*   **`ui_hierarchy`**: `home > registro`.
*   **`user_code`**: Identificador único del usuario (HubSpot ID). **Solo presente en login y registro exitoso.**
*   **`data_collected`**: Mensajes de error o respuestas de formulario.

### Eventos
- 📘 `login`: [payload](./00-registro/login.yaml) | [guía visual](./guias_visuales/00-registro_login.md)
    Evento de interacción de botón para iniciar sesión (submit).
    **Nota:** Define la identidad del usuario para los eventos subsiguientes.

- 📘 `tus_planes`: [payload](./00-registro/tus_planes.yaml) | [guía visual](./guias_visuales/00-registro_tus_planes.md)
    Click en el botón "Continuar" dentro de la sección "Tus Planes". Captura data recopilada del formulario.

- 📘 `registro_exitoso`: [payload](./00-registro/registro_exitoso.yaml) | [guía visual](./guias_visuales/00-registro_registro_exitoso.md)
    Evento de envío exitoso del formulario de registro.

- 📘 `registro_error`: [payload](./00-registro/registro_error.yaml) | [guía visual](./guias_visuales/00-registro_registro_error.md)
    Impresión de un modal de error cuando falla el registro. Contiene el mensaje de error específico.

## 🎮 Nivel 1 (Preguntas de Autoconocimiento)
Eventos para el flujo del primer nivel de interacción.

### ⚙️ Estructura de Datos
Parámetros comunes para el seguimiento del flujo de gamificación:
*   **`ui_hierarchy`**: `home > nivel_01`.
*   **`ui_label`**: Texto visible del botón, normalizado a `snake_case` sin tildes ni puntuación. Valores para esta sección: `"comenzar_la_aventura"` → evento `inicio` | `"excelente"` → evento `fin` | `"error"` → evento `error` | Para `preguntas`: valor dinámico según el texto del botón (ej. `"vamos_por_mas"`).
*   **`data_collected`**: Captura la respuesta seleccionada por el usuario en las preguntas.

### Eventos
- 📘 `inicio`: [payload](./01-nivel-01/inicio.yaml) | [guía visual](./guias_visuales/01-nivel-01_inicio.md)
    Click en el botón de inicio del Nivel 1.

- 📘 `preguntas`: [payload](./01-nivel-01/preguntas.yaml) | [guía visual](./guias_visuales/01-nivel-01_preguntas.md)
    Evento `submit` al responder preguntas dentro del nivel.
    **Dinámico:** `ui_label` varía según el nombre del botón y `data_collected` contiene la respuesta.

- 📘 `error`: [payload](./01-nivel-01/error.yaml) | [guía visual](./guias_visuales/01-nivel-01_error.md)
    Impresión de modal de error dentro del flujo del Nivel 1.

- 📘 `fin`: [payload](./01-nivel-01/fin.yaml) | [guía visual](./guias_visuales/01-nivel-01_fin.md)
    Click en el botón de finalización del Nivel 1.

## 🧠 Test de Autoconocimiento
Eventos para la sección de test vocacional o de autoconocimiento.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > autoconocimiento`.
*   **`ui_label`**: Utilizado para numerar preguntas (`01`, `02`...) o identificar la valoración (`si`, `no_mucho`).
*   **`data_collected`**: Almacena la carrera de interés o la respuesta a la pregunta.

> **Criterio `ui_action`:** Usar `"submit"` cuando hay un botón de envío separado que confirma una acción de formulario (ej. "Siguiente" en las preguntas); usar `"click"` para selecciones directas sin formulario (ej. `valoracion_carreras`).

### Eventos
- 📘 `inicio`: [payload](./02-test-autoconocimiento/inicio.yaml) | [guía visual](./guias_visuales/02-test-autoconocimiento_inicio.md)
    Click en el botón para iniciar el test.

- 📘 `preguntas`: [payload](./02-test-autoconocimiento/preguntas.yaml) | [guía visual](./guias_visuales/02-test-autoconocimiento_preguntas.md)
    Evento `submit` por cada pregunta respondida (23 en total).
    `ui_label` corresponde al número de pregunta con zero-padding (ej. `01`).

- 📘 `valoracion_carreras`: [payload](./02-test-autoconocimiento/valoracion_carreras.yaml) | [guía visual](./guias_visuales/02-test-autoconocimiento_valoracion_carreras.md)
    Interacción (`si` / `no_mucho`) sobre el interés en carreras específicas mostradas.

- 📘 `enviar_por_whatsapp`: [payload](./02-test-autoconocimiento/enviar_por_whatsapp.yaml) | [guía visual](./guias_visuales/02-test-autoconocimiento_enviar_por_whatsapp.md)
    Evento `submit` para enviar los resultados por WhatsApp.

- 📘 `fin`: [payload](./02-test-autoconocimiento/fin.yaml) | [guía visual](./guias_visuales/02-test-autoconocimiento_fin.md)
    Click en el botón para finalizar la sección de autoconocimiento.

## 🤖 5 Niveles (Explora, Visualiza, Imagina, Globalizate con Chatbot; Transforma con Video y Descarga)
Interacciones en los 5 niveles del flujo. Los primeros 4 niveles (Explora, Visualiza, Imagina, Globalizate) utilizan el asistente virtual (Chatbot). Transforma (Nivel 5) cuenta con video y descarga de guía.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: Dinámico según el nivel (ej. `home > transforma para descarga`).
*   **`ui_element`**: Principalmente botones de interacción.
*   **`data_collected`**: Puede contener el mensaje del chatbot o datos de la interacción.

### Eventos
- 📘 `inicio`: [payload](./03-niveles-chatbot/inicio.yaml) | [guía visual](./guias_visuales/03-niveles-chatbot_inicio.md)
    Inicio de la interacción con el chatbot / nivel.

- 📘 `ia_chatbot`: [payload](./03-niveles-chatbot/chatbot.yaml) | [guía visual](./guias_visuales/03-niveles-chatbot_chatbot.md)
    Click en opciones o interacciones dentro del flujo del chatbot.

- 📘 `video`: [payload](./03-niveles-chatbot/video.yaml) | [guía visual](./guias_visuales/03-niveles-chatbot_video.md)
    Reproducción del video introductorio en el Nivel 5 (Transforma).

- 📘 `descargar` (WhatsApp): [payload](./03-niveles-chatbot/descargar.yaml) | [guía visual](./guias_visuales/03-niveles-chatbot_descargar.md)
    Solicitud de descarga o envío de información por WhatsApp.
    **Ubicación:** Este evento ocurre específicamente en el **Nivel 5 (Transforma)**.
    **Nota:** El archivo se llama `descargar.yaml` y el `ui_label` es `enviar_por_whatsapp`.

- 📘 `fin`: [payload](./03-niveles-chatbot/fin.yaml) | [guía visual](./guias_visuales/03-niveles-chatbot_fin.md)
    Finalización de la interacción con el chatbot / nivel.

## ⭐ CSAT y Emociones
Medición de satisfacción y feedback emocional del usuario.

### ⚙️ Estructura de Datos
Parámetros específicos de valoración:
*   **`csat_value`**: (Solo CSAT) Valor numérico de la calificación (1-5).
*   **`data_collected`**: Mensaje de feedback o etiqueta de emoción seleccionada.
*   **`ui_hierarchy`**: `home > emociones` (para emociones) o dinámico según contexto.

### Eventos
- 📘 `enviar_csat`: [payload](./04-csat/button_csat_enviar.yaml) | [guía visual](./guias_visuales/04-csat_button_csat_enviar.md)
    Envío de la valoración CSAT (1-5 estrellas).

- 📘 `enviar_emociones`: [payload](./05-emociones/enviar.yaml) | [guía visual](./guias_visuales/05-emociones_enviar.md)
    Envío del feedback sobre emociones (interesado, no interesado, etc.).
