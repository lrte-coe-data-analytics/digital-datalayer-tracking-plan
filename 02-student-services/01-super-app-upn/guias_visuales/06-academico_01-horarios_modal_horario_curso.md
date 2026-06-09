# Guía Visual: modal_horario_curso
**Payload General:** [../06-academico/01-horarios/modal_horario_curso.yaml](../06-academico/01-horarios/modal_horario_curso.yaml)

---
## Instancia: modal_horario_curso
- **Descripción:** El usuario visualiza el horario de un curso específico.

![modal_horario_curso](../assets/modal_horario_curso.png)

**Data Layer (Payload):**
```yaml
{
  "event"       : "ui_interaction",                    # Nombre fijo del evento
  "ui_location" : "academico",                         # Dónde está el elemento
  "ui_element"  : "modal_window",                      # Qué es el elemento
  "ui_action"   : "open_modal",                        # Qué hace (open_modal, navigation, etc.)
  "ui_label"    : "{{cod_curso}} > {{curso_label}}",   # Esto debe enviar el texto principal del elemento
  "ui_hierarchy": "academico > horarios",              # Identificador semantico de la seccion donde se ubica.
  "link_url"    : "{{url_desino}}"                     # Si te dirige hacia algun otro lugar, abre algun modal o cambia de vista o pagina web.
}
```
