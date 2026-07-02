# Guía Visual: Click/Select-Horario
**Payload General:** [click_select_horario.yaml](../03-cursos/click_select_horario.yaml)

---
## Instancia: Click/Select-Horario
- **Descripción:** Este evento mide el cambio de cursos dentro de los Horarios en la sección de Horario.

![click_select_horario](../assets/click_select_horario.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_select_horario",                      # Identificador único del elemento (click_select_horario)
  "ui_hierarchy"    : "portal_upn > horario",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```
