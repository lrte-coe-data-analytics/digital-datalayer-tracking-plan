# Guía Visual: bachiller_subidaError
**Payload General:** [bachiller_subidaerror.yaml](../07-tramites/bachiller_subidaerror.yaml)

---
## Instancia: bachiller_subidaError
- **Descripción:** Este evento mide el evento si hay un error en la subida de documentos de documentos del grado de Bachiller dentro de los tramites que se va a realizar.

![bachiller_subidaerror](../assets/bachiller_subidaerror.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "bachiller_subidaerror",                      # Identificador único del elemento (bachiller_subidaerror)
  "ui_hierarchy"    : "portal > tramites",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```
