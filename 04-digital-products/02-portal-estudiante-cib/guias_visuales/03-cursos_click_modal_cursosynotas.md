# Guía Visual: Click/Modal-CursosyNotas
**Payload General:** [click_modal_cursosynotas.yaml](../03-cursos/click_modal_cursosynotas.yaml)

---
## Instancia: Click/Modal-CursosyNotas
- **Descripción:** Este evento mide los clics en la lista de Cursos que se encuentra en la interna de la sección de Cursos y Notas.

![click_modal_cursosynotas](../assets/click_modal_cursosynotas.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_modal_cursosynotas",                      # Identificador único del elemento (click_modal_cursosynotas)
  "ui_hierarchy"    : "portal_cib > cursos_y_notas",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```
