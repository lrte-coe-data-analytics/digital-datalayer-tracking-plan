# Guía Visual: Click/Select-HorarioPopup
**Payload General:** [click_select_horariopopup.yaml](../01-home/click_select_horariopopup.yaml)

---
## Instancia: Click/Select-HorarioPopup
- **Descripción:** Este evento mide el clic en seleccionar profesores en el Pop Up de Curso dentro de Horario.

![click_select_horariopopup](../assets/click_select_horariopopup.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_select_horariopopup",                      # Identificador único del elemento (click_select_horariopopup)
  "ui_hierarchy"    : "portal_cib > dashboard",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```
