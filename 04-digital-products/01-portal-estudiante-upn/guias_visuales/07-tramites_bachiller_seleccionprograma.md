# Guía Visual: bachiller_seleccionPrograma
**Payload General:** [bachiller_seleccionprograma.yaml](../07-tramites/bachiller_seleccionprograma.yaml)

---
## Instancia: bachiller_seleccionPrograma
- **Descripción:** Este evento mide el clic al programa del tramite que se va a realizar.

![bachiller_seleccionprograma](../assets/bachiller_seleccionprograma.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "bachiller_seleccionprograma",                      # Identificador único del elemento (bachiller_seleccionprograma)
  "ui_hierarchy"    : "portal > tramites",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```
