# Documento de marcación - Prospección Colegios UPN
Fecha de creación: 17 Enero 2026  
Fecha última actualización: 16 de Junio 2026

## Tabla de contenido
1. [📝 Registro](#-registro)
2. [🎮 Descubre tus Poderes](#-descubre-tus-poderes)
3. [⭐ CSAT](#-csat)

---

## 📝 Registro
Eventos relacionados con el proceso de registro e identificación del usuario.

### ⚙️ Estructura de Datos
Los eventos de registro comparten parámetros clave para la identificación:
*   **`event`**: `ui_interaction` (Estándar).
*   **`ui_hierarchy`**: `home > registro`.
*   **`user_code`**: Identificador único del usuario (HubSpot ID). **Solo presente en login y registro exitoso.**

### Eventos
- 📘 `login`: [payload](./00-registro/login.yaml) | [guía visual](./guias_visuales/00-registro_login.md)
    Evento de interacción de botón para iniciar sesión (submit).

- 📘 `mision-futuro`: [payload](./00-registro/mision-futuro.yaml) | [guía visual](./guias_visuales/00-registro_mision-futuro.md)
    Evento al hacer clic en el botón "Continuar" dentro de las secciones dinámicas del registro.

- 📘 `registro_exitoso`: [payload](./00-registro/registro_exitoso.yaml) | [guía visual](./guias_visuales/00-registro_registro_exitoso.md)
    Evento de envío exitoso del formulario de registro.

- 📘 `registro_error`: [payload](./00-registro/registro_error.yaml) | [guía visual](./guias_visuales/00-registro_registro_error.md)
    Impresión de la ventana modal de error cuando ocurre una falla en el proceso de registro.

---

## 🎮 Descubre tus Poderes
Eventos relacionados con el flujo de cuestionarios vocacionales y de autoconocimiento "Descubre tus poderes".

### ⚙️ Estructura de Datos
*   **`ui_hierarchy`**: Dinámico por nivel/cuestionario.
*   **`path_location`**: Dinámico por pantalla.

### Eventos
- 📘 `inicio`: [payload](./01-descubre-tus-poderes/inicio.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_inicio.md)
    Inicio de la interacción con el nivel/cuestionario correspondiente.

- 📘 `preguntas`: [payload](./01-descubre-tus-poderes/preguntas.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_preguntas.md)
    Evento de respuesta a una pregunta del cuestionario.

- 📘 `valoracion_carreras`: [payload](./01-descubre-tus-poderes/valoracion_carreras.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_valoracion_carreras.md)
    Interacciones sobre la aceptación o rechazo de carreras sugeridas.

- 📘 `enviar_por_whatsapp`: [payload](./01-descubre-tus-poderes/enviar_por_whatsapp.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_enviar_por_whatsapp.md)
    Envío de resultados al canal de WhatsApp del prospecto.

- 📘 `modal`: [payload](./01-descubre-tus-poderes/modal.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_modal.md)
    Aceptación de la ventana modal al completar un cuestionario.

- 📘 `error`: [payload](./01-descubre-tus-poderes/error.yaml) | [guía visual](./guias_visuales/01-descubre-tus-poderes_error.md)
    Impresión de modal de error dentro del flujo del cuestionario.

---

## ⭐ CSAT
Medición de satisfacción del usuario.

### Eventos
- 📘 `button_csat_enviar`: [payload](./03-csat/button_csat_enviar.yaml) | [guía visual](./guias_visuales/03-csat_button_csat_enviar.md)
    Envío del feedback y calificación CSAT (1-5 estrellas).
