# Documento de marcación - Prospección Colegios UPC
Fecha de creacion: 17 Enero 2026  
Fecha ultima actualizacion: 13 Febrero 2026

## Tabla de contenido
1. [📝 Registro](#-registro)
2. [🎮 Nivel 1 (Preguntas de Autonocimiento)](#-nivel-1-preguntas-de-autoconocimiento)
3. [🧠 Test de Autoconocimiento](#-test-de-autoconocimiento)
4. [🤖 5 Niveles Chatbot (Explora, Visualiza, Imagina, Globalizate, Transforma)](#-5-niveles-chatbot-explora-visualiza-imagina-globalizate-transforma)
5. [⭐ CSAT y Emociones](#-csat-y-emociones)

---

## 📝 Registro
Eventos relacionados con el proceso de registro e identificación del usuario.
**Nota Importante:** Los usuarios que ingresan a la plataforma son navegantes anónimos (`anonymous`) hasta que se registran o inician sesión. En ese momento (`login` o `registro_exitoso`) se envía el `user_code`, que corresponde al ID de Hubspot que identifica al usuario y permite la trazabilidad.

### ⚙️ Estructura de Datos
Los eventos de registro comparten parámetros clave para la identificación:
*   **`event`**: `ui_interaction` (Estándar).
*   **`ui_hierarchy`**: `home > registro`.
*   **`user_code`**: Identificador único del usuario (Hubspot ID). **Solo presente en login y registro exitoso.**
*   **`data_collected`**: Mensajes de error o respuestas de formulario.

### Eventos
- 📘 `login`: [payload](./00-registro/login.yaml)
    Evento de interacción de botón para iniciar sesión (submit).
    **Nota:** Define la identidad del usuario para los eventos subsiguientes.

- 📘 `tus_planes`: [payload](./00-registro/tus_planes.yaml)
    Click en el botón "Continuar" dentro de la sección "Tus Planes". Captura data recopilada del formulario.

- 📘 `registro_exitoso`: [payload](./00-registro/registro_exitoso.yaml)
    Evento de envío exitoso del formulario de registro.

- 📘 `registro_error`: [payload](./00-registro/registro_error.yaml)
    Impresión de un modal de error cuando falla el registro. Contiene el mensaje de error específico.

## 🎮 Nivel 1 (Preguntas de Autonocimiento)
Eventos para el flujo del primer nivel de interacción.

### ⚙️ Estructura de Datos
Parámetros comunes para el seguimiento del flujo de gamificación:
*   **`ui_hierarchy`**: `home > nivel1`.
*   **`ui_label`**: Identifica la acción específica (ej. 'inicio', 'fin') o el texto del botón dinámico.
*   **`data_collected`**: Captura la respuesta seleccionada por el usuario en las preguntas.

### Eventos
- 📘 `inicio`: [payload](./01-nivel1/inicio.yaml)
    Click en el botón de inicio del Nivel 1.

- 📘 `preguntas`: [payload](./01-nivel1/preguntas.yaml)
    Evento `submit` al responder preguntas dentro del nivel.
    **Dinámico:** `ui_label` varía según el nombre del botón y `data_collected` contiene la respuesta.

- 📘 `error`: [payload](./01-nivel1/error.yaml)
    Impresión de modal de error dentro del flujo del Nivel 1.

- 📘 `fin`: [payload](./01-nivel1/fin.yaml)
    Click en el botón de finalización del Nivel 1.

## 🧠 Test de Autoconocimiento
Eventos para la sección de test vocacional o de autoconocimiento.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: `home > autoconocimiento`.
*   **`ui_label`**: Utilizado para numerar preguntas (`1`, `2`...) o identificar acciones (`si|no`).
*   **`data_collected`**: Almacena la carrera de interés o la respuesta a la pregunta.

### Eventos
- 📘 `inicio`: [payload](./02-test-autoconocimiento/inicio.yaml)
    Click en el botón para iniciar el test.

- 📘 `preguntas`: [payload](./02-test-autoconocimiento/preguntas.yaml)
    Evento `submit` por cada pregunta respondida.
    `ui_label` corresponde al número de pregunta.

- 📘 `valoracion_carreras`: [payload](./02-test-autoconocimiento/valoracion_carreras.yaml)
    Interacción (SI/NO) sobre el interés en carreras específicas mostradas.

- 📘 `enviar_por_whatsapp`: [payload](./02-test-autoconocimiento/enviar_por_whatsapp.yaml)
    Evento `submit` para enviar los resultados por WhatsApp.

- 📘 `fin`: [payload](./02-test-autoconocimiento/fin.yaml)
    Click en el botón para finalizar la sección de autoconocimiento.

## 🤖 5 Niveles Chatbot (Explora, Visualiza, Imagina, Globalizate, Transforma)
Interacciones con el asistente virtual (Chatbot) en diferentes niveles.

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: Dinámico según el nivel (ej. `home > nivel6` para descarga).
*   **`ui_element`**: Principalmente botones de interacción.
*   **`data_collected`**: Puede contener el mensaje del chatbot o datos de la interacción.

### Eventos
- 📘 `inicio`: [payload](./03-niveles-chatbot/inicio.yaml)
    Inicio de la interacción con el chatbot.

- 📘 `ia_chatbot`: [payload](./03-niveles-chatbot/chatbot.yaml)
    Click en opciones o interacciones dentro del flujo del chatbot.

- 📘 `descargar` (WhatsApp): [payload](./03-niveles-chatbot/descargar.yaml)
    Solicitud de descarga o envío de información por WhatsApp desde el chatbot.
    **Ubicación:** Este evento ocurre específicamente en el **Nivel 6 (Transforma)**.
    **Nota:** El archivo se llama `descargar.yaml` pero el `ui_label` es `enviar_por_whatssapp`.

- 📘 `fin`: [payload](./03-niveles-chatbot/fin.yaml)
    Finalización de la interacción con el chatbot.

## ⭐ CSAT y Emociones
Medición de satisfacción y feedback emocional del usuario.

### ⚙️ Estructura de Datos
Parámetros específicos de valoración:
*   **`csat_value`**: (Solo CSAT) Valor numérico de la calificación (1-5).
*   **`data_collected`**: Mensaje de feedback o etiqueta de emoción seleccionada.
*   **`ui_hierarchy`**: `home > emociones` (para emociones) o dinámico según contexto.

### Eventos
- 📘 `enviar_csat`: [payload](./04-csat/button_csat_enviar.yaml)
    Envío de la valoración CSAT (1-5 estrellas).

- 📘 `enviar_emociones`: [payload](./05-emociones/enviar.yaml)
    Envío del feedback sobre emociones (interesado, no interesado, etc.).
