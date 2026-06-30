# Guía Visual: bachiller_subidaExitosa
**Payload General:** [bachiller_subidaexitosa.yaml](../07-tramites/bachiller_subidaexitosa.yaml)

---
## Instancia: bachiller_subidaExitosa
- **Descripción:** Este evento mide el clic en subida Exitosa de documentos del grado de Bachiller dentro de los tramites que se va a realizar.

![bachiller_subidaexitosa](../assets/bachiller_subidaexitosa.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "button",                       # Qué es el elemento (button)
  "ui_action"       : "click",                      # Qué hace (click)
  "ui_label"        : "bachiller_subidaexitosa",                      # Identificador único del elemento (bachiller_subidaexitosa)
  "ui_hierarchy"    : "portal > tramites",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null,                            # Datos recopilados (mensajes de error, etc.)
  "csat_value"      : null                             # Solo para CSAT (0 a 5)
}
```
