# Guía Visual: Click-Dashboard
**Payload General:** [click_dashboard.yaml](../01-home/click_dashboard.yaml)

---
## Instancia: Click-Dashboard
- **Descripción:** Este evento mide los clics a 3 elementos del Home Principal que se llama Dashboard, que son: 

- Notas
- Horario
- Servicio

![click_dashboard](../assets/click_dashboard.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_dashboard",                      # Identificador único del elemento (click_dashboard)
  "ui_hierarchy"    : "portal_cib > dashboard",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```
