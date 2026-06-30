# Guía Visual: Click-MenuHeader
**Payload General:** [click_menuheader.yaml](../01-home/click_menuheader.yaml)

---
## Instancia: Click-MenuHeader
- **Descripción:** Este evento mide los clics en el menu que esta en la Cabecera.

![click_menuheader](../assets/click_menuheader.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "header",                      # Dónde está el elemento (header)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "click_menuheader",                      # Identificador único del elemento (click_menuheader)
  "ui_hierarchy"    : "portal > header",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```
