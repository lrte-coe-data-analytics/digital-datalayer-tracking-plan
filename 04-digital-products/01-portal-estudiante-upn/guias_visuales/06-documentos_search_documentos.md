# Guía Visual: Search/buscador-Documentos
**Payload General:** [search_documentos.yaml](../06-documentos/search_documentos.yaml)

---
## Instancia: Search/buscador-Documentos
- **Descripción:** Este evento mide el uso del buscador en la sección de Documentos.

![search_documentos](../assets/search_documentos.png)

**Data Layer (Payload):**
```yaml
{
  "event"           : "ui_interaction",                # Nombre fijo del evento
  "ui_location"     : "content_body",                      # Dónde está el elemento (content_body)
  "ui_element"      : "input_field",                       # Qué es el elemento (button)
  "ui_action"       : "search",                      # Qué hace (click)
  "ui_label"        : "search_documentos",                      # Identificador único del elemento ()
  "ui_hierarchy"    : "portal_upn > documentos",                     # Identificador semántico de la sección
  "link_url"        : null,                        # Si dirige a otro sitio o abre un modal (URL destino o null)
  "path_location"   : "{{path_actual_del_evento}}",    # URL y/o path de donde se da el evento
  "data_collected"  : null                            # Datos recopilados (mensajes de error, etc.)
}
```
