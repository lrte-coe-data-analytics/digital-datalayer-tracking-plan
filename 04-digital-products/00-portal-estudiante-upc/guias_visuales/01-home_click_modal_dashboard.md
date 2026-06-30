# Guía Visual: Click/Modal-Dashboard
**Payload General:** [click_modal_dashboard.yaml](../01-home/click_modal_dashboard.yaml)

---
## Instancia: Click/Modal-Dashboard
- **Descripción:** Este evento mide los clics en el icono de agrandar (Levantar el Pop Up) en los cursos, dentro de la lista de Horarios.

![click_modal_dashboard](../assets/click_modal_dashboard.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "open_modal",                      # Qué hace (open_modal)
  "ui_label"        : "click_modal_dashboard",                      # Identificador único del elemento (click_modal_dashboard)
  "ui_hierarchy"    : "portal > dashboard",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```
